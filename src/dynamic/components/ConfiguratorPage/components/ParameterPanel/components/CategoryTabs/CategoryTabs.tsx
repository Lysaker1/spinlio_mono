// Import React for JSX support and component creation
import React from 'react';
// Import styles for the category tabs
import './CategoryTabs.css';

// Define the possible tab types as a union type for type safety
export type TabType = 'tubing' | 'geometry' | 'accessories';

// Define the default tabs configuration with labels
const DEFAULT_TABS: Tab[] = [
  { id: 'tubing', label: 'Tubing' },
  { id: 'geometry', label: 'Geometry' },
  { id: 'accessories', label: 'Accessories' },
] as const;

// Define the shape of a single tab object
interface Tab {
  id: TabType;  // Must be one of the TabType values
  label: string; // The text shown on the tab
}

// Define the props that can be passed to CategoryTabs component
interface CategoryTabsProps {
  activeTab: TabType;     // Currently selected tab
  onTabChange: (tab: TabType) => void;  // Function to call when tab changes
  tabs?: Tab[];           // Optional custom tabs array, uses DEFAULT_TABS if not provided
}

// Main CategoryTabs component that renders a row of selectable tabs
export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeTab,
  onTabChange,
  tabs = DEFAULT_TABS
}) => {
  // Handler function that calls onTabChange when a tab is clicked
  const handleTabClick = (tabId: TabType) => {
    onTabChange(tabId);
  };

  // Render a navigation element containing the tab buttons
  return (
    <nav className="category-tabs" role="tablist">
      {/* Map through tabs array to create button elements */}
      {tabs.map(tab => (
        <button
          key={tab.id}           // React needs unique key for list items
          role="tab"             // Accessibility role
          aria-selected={activeTab === tab.id}  // Tells screen readers which tab is selected
          aria-controls={`${tab.id}-panel`}     // Links tab to its panel for accessibility
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}  // Styling classes
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