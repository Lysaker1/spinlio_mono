// Import React for JSX support and component creation
import React from 'react';

// Update TabType to include furniture categories
export type TabType = 'tubing' | 'geometry' | 'accessories' | 'sizing' | 'material';

// Define the shape of a tab
interface Tab {
  id: TabType;
  label: string;
}

// Define bike-specific tabs
const BIKE_TABS: Tab[] = [
  { id: 'tubing', label: 'Tubing' },
  { id: 'geometry', label: 'Geometry' },
  { id: 'accessories', label: 'Parts' },
] as const;

// Define furniture-specific tabs
const FURNITURE_TABS: Tab[] = [
  { id: 'sizing', label: 'General Sizing' },
  { id: 'material', label: 'Material' },
] as const;

// Update props interface to include configurator type
interface CategoryTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  configuratorType?: 'default' | 'vulz' | 'stepthru' | 'bookshelf' | 'table' | 'sofa' | 'urban';
}

// Main CategoryTabs component that renders a row of selectable tabs
export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeTab,
  onTabChange,
  configuratorType = 'bike'
}) => {
  // Select appropriate tabs based on configurator type
  const tabs = ['bookshelf', 'sofa', 'table'].includes(configuratorType) ? FURNITURE_TABS : BIKE_TABS;


  // Handler function that calls onTabChange when a tab is clicked
  const handleTabClick = (tabId: TabType) => {
    onTabChange(tabId);
  };

  // Render a navigation element containing the tab buttons
  return (
    <nav className="flex items-center justify-between w-full gap-0.5 p-0.5 rounded-2xl h-full" role="tablist">
      {/* Map through tabs array to create button elements */}
      {tabs.map(tab => (
        <button
          key={tab.id}           // React needs unique key for list items
          role="tab"             // Accessibility role
          aria-selected={activeTab === tab.id}  // Tells screen readers which tab is selected
          aria-controls={`${tab.id}-panel`}     // Links tab to its panel for accessibility
          className={`tab-button w-1/${tabs.length} h-full rounded-full ${activeTab === tab.id ? 'bg-black text-white' : ''}`}  // Styling classes
          onClick={() => handleTabClick(tab.id)} // Click handler
        >
          {tab.label}  {/* Display the tab's label text */}
        </button>
      ))}
    </nav>
  );
};

// Export the component as default for simpler imports
export default CategoryTabs;