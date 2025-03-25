# Shared Code Management Scripts

This directory contains scripts to help manage shared code between the main `/src/shared/` folder and the app-specific `/src/apps/marketplace/src/shared/` folder.

## Available Scripts

### `diff-shared.js`

This script compares files between the main shared folder and the marketplace-specific shared folder, reporting any differences or missing files.

```bash
npm run diff-shared
```

This will output:
- Files missing in either directory
- Files that have different content
- A summary of the differences found

### `sync-shared.js`

This script analyzes both shared directories and can synchronize them based on which version is newer or larger.

#### Report mode (default)

```bash
npm run sync-shared
```

This will show what changes would be made without actually modifying any files.

#### Sync mode

```bash
npm run sync-shared:write
```

This will actually perform the file operations:
- Copy missing files from one directory to the other
- Replace older files with newer versions
- If timestamps are identical, use the larger file (likely more complete)

## Strategy for Shared Code

According to the PREFAB architecture:

1. During development:
   - Use the app-specific shared code in `src/apps/marketplace/src/shared/`
   - Keep imports using the `@shared` alias which points to this directory
   - Make changes to the app-specific shared code as needed

2. When upgrading the main shared code:
   - Use these scripts to identify differences between the two directories
   - Carefully merge changes in both directions as needed

3. For deployment branches only:
   - In the `marketplace-deploy-new` branch, make sure all necessary shared code
     is properly copied to the app-specific location
   - Ensure all imports use the `@shared` alias and not direct paths

## Note

Never directly import code between apps. All shared functionality should be in
the appropriate shared directory, and all imports should use the `@shared` alias. 