#!/usr/bin/env ts-node
/**
 * importParameters.ts
 *
 * Script to migrate parameters and configurator-specific overrides
 * from multiple parameterDefinitions.ts files into PostgreSQL tables.
 */

import { Client } from 'pg';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.development or .env.production
const env = process.env.NODE_ENV || 'development';
const envPath = path.resolve(__dirname, `.env.${env}`);
dotenv.config({ path: envPath });

console.log('Starting import script...');
console.log('Environment:', process.env.NODE_ENV);
console.log('Loading parameter definitions...');

// Import parameter definitions
let urbanParams, stepthruParams, mixedParams;
try {
  console.log('Attempting to import parameter files...');
  urbanParams = require('../dynamic/components/ConfiguratorPage/components/ParameterPanel/parameterDefinitionsUrban').parameterDefinitions;
  stepthruParams = require('../dynamic/components/ConfiguratorPage/components/ParameterPanel/parameterDefinitionsST').parameterDefinitions;
  mixedParams = require('../dynamic/components/ConfiguratorPage/components/ParameterPanel/parameterDefinitions6').parameterDefinitions;
  console.log('Parameter files loaded successfully');
} catch (error) {
  console.error('Error loading parameter files:', error);
  process.exit(1);
}

/**
 * Combine all parameter definitions into a single array
 */
const allParameterDefinitions = [
  ...urbanParams,
  ...stepthruParams,
  ...mixedParams,
];

/**
 * Configure your PostgreSQL connection using environment variables
 */
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Required for Supabase connections
  }
});

/**
 * Upsert a parameter into the 'parameters' table.
 */
async function upsertParameter(param: any) {
  const upsertSQL = `
    INSERT INTO parameters 
      (id, name, category, sub_category, type, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
    ON CONFLICT (id) 
    DO UPDATE SET 
      name = EXCLUDED.name,
      category = EXCLUDED.category,
      sub_category = EXCLUDED.sub_category,
      type = EXCLUDED.type,
      updated_at = NOW();
  `;

  await client.query(upsertSQL, [
    param.id,
    param.name,
    param.category || 'other',
    param.subCategory || null,
    param.type || 'text',
  ]);
}

/**
 * Upsert a configurator override into the 'parameter_configurator_types' table.
 */
async function upsertConfiguratorOverride(param: any, configurator: string) {
  const upsertOverrideSQL = `
    INSERT INTO parameter_configurator_types
      (parameter_id, configurator_type, default_value, min, max, step, unit, options, hidden)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    ON CONFLICT (parameter_id, configurator_type)
    DO UPDATE SET
      default_value = EXCLUDED.default_value,
      min = EXCLUDED.min,
      max = EXCLUDED.max,
      step = EXCLUDED.step,
      unit = EXCLUDED.unit,
      options = EXCLUDED.options,
      hidden = EXCLUDED.hidden;
  `;

  // Prepare values, ensuring proper handling of undefined or null fields
  const defaultValue = param.value !== undefined ? String(param.value) : null;
  const paramMin = param.min !== undefined ? String(param.min) : null;
  const paramMax = param.max !== undefined ? String(param.max) : null;
  const paramStep = param.step !== undefined ? String(param.step) : null;
  const paramUnit = param.unit || null;
  const optionsJson = param.options ? JSON.stringify(param.options) : null;
  const hiddenFlag = param.hidden !== undefined ? param.hidden : false; // Default to false

  await client.query(upsertOverrideSQL, [
    param.id,
    configurator,
    defaultValue,
    paramMin,
    paramMax,
    paramStep,
    paramUnit,
    optionsJson,
    hiddenFlag,
  ]);
}

/**
 * Import parameters and apply overrides to each configurator type.
 */
async function importParameters(paramsArray: any[]) {
  for (const param of paramsArray) {
    // Upsert base parameter
    await upsertParameter(param);

    // Determine which configurators should get overrides
    const configurators = Array.isArray(param.configuratorTypes) && param.configuratorTypes.length > 0
      ? param.configuratorTypes
      : [];

    // If no configurator is provided, skip adding overrides
    if (configurators.length === 0) {
      continue;
    }

    // Upsert the parameter_configurator_types row for each configurator
    for (const conf of configurators) {
      await upsertConfiguratorOverride(param, conf);
    }
  }
}

client.connect()
  .then(async () => {
    console.log('Connected to database successfully');
    try {
      // Start transaction
      await client.query('BEGIN;');

      // Import all parameters
      console.log('Importing parameters from all parameterDefinitions...');
      await importParameters(allParameterDefinitions);

      // Commit transaction
      await client.query('COMMIT;');
      console.log('Migration completed successfully.');
    } catch (err) {
      console.error('Migration failed:', err);
      await client.query('ROLLBACK;');
      console.log('Transaction rolled back.');
    } finally {
      await client.end();
      console.log('Disconnected from PostgreSQL.');
    }
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });