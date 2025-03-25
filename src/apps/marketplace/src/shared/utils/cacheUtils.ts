import { ComponentCategory, ComponentGroup, ComponentSubcategory } from "../services/modelService";

const CACHE_KEYS = {
  COMPONENT_GROUPS: 'cached_component_groups',
  CATEGORIES: 'cached_categories_',
  SUBCATEGORIES: 'cached_subcategories_',
  CACHE_TIMESTAMP: 'component_cache_timestamp',
};

// Cache expiration time (24 hours in milliseconds)
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

// Save component groups to localStorage
export const cacheComponentGroups = (groups: ComponentGroup[]): void => {
  try {
    localStorage.setItem(CACHE_KEYS.COMPONENT_GROUPS, JSON.stringify(groups));
    updateCacheTimestamp();
  } catch (error) {
    console.error('Failed to cache component groups:', error);
  }
};

// Save categories to localStorage with their parent group ID
export const cacheCategories = (groupId: number, categories: ComponentCategory[]): void => {
  try {
    localStorage.setItem(`${CACHE_KEYS.CATEGORIES}${groupId}`, JSON.stringify(categories));
    updateCacheTimestamp();
  } catch (error) {
    console.error(`Failed to cache categories for group ${groupId}:`, error);
  }
};

// Save subcategories to localStorage with their parent category ID
export const cacheSubcategories = (categoryId: number, subcategories: ComponentSubcategory[]): void => {
  try {
    localStorage.setItem(`${CACHE_KEYS.SUBCATEGORIES}${categoryId}`, JSON.stringify(subcategories));
    updateCacheTimestamp();
  } catch (error) {
    console.error(`Failed to cache subcategories for category ${categoryId}:`, error);
  }
};

// Get cached component groups
export const getCachedComponentGroups = (): ComponentGroup[] | null => {
  if (!isCacheValid()) return null;
  
  try {
    const cached = localStorage.getItem(CACHE_KEYS.COMPONENT_GROUPS);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.error('Failed to retrieve cached component groups:', error);
    return null;
  }
};

// Get cached categories for a specific group
export const getCachedCategories = (groupId: number): ComponentCategory[] | null => {
  if (!isCacheValid()) return null;
  
  try {
    const cached = localStorage.getItem(`${CACHE_KEYS.CATEGORIES}${groupId}`);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.error(`Failed to retrieve cached categories for group ${groupId}:`, error);
    return null;
  }
};

// Get cached subcategories for a specific category
export const getCachedSubcategories = (categoryId: number): ComponentSubcategory[] | null => {
  if (!isCacheValid()) return null;
  
  try {
    const cached = localStorage.getItem(`${CACHE_KEYS.SUBCATEGORIES}${categoryId}`);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.error(`Failed to retrieve cached subcategories for category ${categoryId}:`, error);
    return null;
  }
};

// Update cache timestamp
const updateCacheTimestamp = (): void => {
  try {
    localStorage.setItem(CACHE_KEYS.CACHE_TIMESTAMP, Date.now().toString());
  } catch (error) {
    console.error('Failed to update cache timestamp:', error);
  }
};

// Check if cache is still valid (not expired)
export const isCacheValid = (): boolean => {
  try {
    const timestamp = localStorage.getItem(CACHE_KEYS.CACHE_TIMESTAMP);
    if (!timestamp) return false;
    
    const cacheTime = parseInt(timestamp, 10);
    const now = Date.now();
    
    return now - cacheTime < CACHE_EXPIRATION;
  } catch (error) {
    console.error('Failed to check cache validity:', error);
    return false;
  }
};

// Clear all component cache data
export const clearComponentCache = (): void => {
  try {
    // Get all localStorage keys
    const keys = Object.keys(localStorage);
    
    // Remove all component cache-related items
    keys.forEach(key => {
      if (
        key === CACHE_KEYS.COMPONENT_GROUPS ||
        key === CACHE_KEYS.CACHE_TIMESTAMP ||
        key.startsWith(CACHE_KEYS.CATEGORIES) ||
        key.startsWith(CACHE_KEYS.SUBCATEGORIES)
      ) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Failed to clear component cache:', error);
  }
}; 