import { 
  getComponentGroups, 
  getComponentCategories,
  getComponentSubcategories,
  ComponentGroup,
  ComponentCategory
} from '@shared/services/modelService';
import { 
  cacheComponentGroups, 
  cacheCategories,
  cacheSubcategories,
  getCachedComponentGroups,
  isCacheValid 
} from './cacheUtils';

/**
 * Preloads essential application data in the background
 * This function will check if data is cached first and only load from API if needed
 * It's designed to be called early in the application lifecycle
 */
export const preloadCategoryData = async (): Promise<void> => {
  try {
    console.log('Checking if preloading category data is needed...');
    
    // Check if cache is valid first
    if (isCacheValid()) {
      const cachedGroups = getCachedComponentGroups();
      if (cachedGroups && cachedGroups.length > 0) {
        console.log('Using cached component data, preloading not needed');
        return;
      }
    }
    
    console.log('Preloading component groups...');
    
    // Load component groups
    const groups = await getComponentGroups();
    cacheComponentGroups(groups);
    
    // Preload first level of categories for each group
    const categoryPromises = groups.map(async (group: ComponentGroup) => {
      try {
        const categories = await getComponentCategories(group.id);
        cacheCategories(group.id, categories);
        return { groupId: group.id, categories };
      } catch (error) {
        console.error(`Failed to preload categories for group ${group.id}:`, error);
        return { groupId: group.id, categories: [] };
      }
    });
    
    // Wait for all category requests to complete
    const categoriesResults = await Promise.all(categoryPromises);
    
    console.log('Preloading subcategories...');
    
    // Now preload subcategories for all categories to eliminate the delay
    const subcategoryPromises = [];
    
    for (const result of categoriesResults) {
      for (const category of result.categories) {
        subcategoryPromises.push(
          (async () => {
            try {
              const subcategories = await getComponentSubcategories(category.id);
              cacheSubcategories(category.id, subcategories);
            } catch (error) {
              console.error(`Failed to preload subcategories for category ${category.id}:`, error);
            }
          })()
        );
      }
    }
    
    // Wait for all subcategory requests to complete
    await Promise.all(subcategoryPromises);
    
    console.log('Preloading component data complete');
  } catch (error) {
    console.error('Error preloading category data:', error);
  }
};

/**
 * Utility to measure performance of data loading
 */
export const measureLoadTime = (label: string): () => void => {
  const startTime = performance.now();
  return () => {
    const endTime = performance.now();
    console.log(`${label} took ${(endTime - startTime).toFixed(2)}ms`);
  };
}; 