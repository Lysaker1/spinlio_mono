import React from 'react';
import { Text, TextInput, Pagination } from '@mantine/core';
import { IconArrowBarToLeft, IconArrowBarToRight, IconSearch } from '@tabler/icons-react';
import '../../Dashboard.css'
import { AuthenticatedFeature } from '@shared/components/AuthenticatedFeature/AuthenticatedFeature';
import { useAuth0 } from '@auth0/auth0-react';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onSearch: (query: string) => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  children,
  totalPages,
  currentPage,
  onPageChange,
  onSearch,
}) => {
  const { isAuthenticated } = useAuth0();

  const unauthenticatedPages = [
    "/dashboard/prefabs",
    "/dashboard/pedro"
  ] //  Pages that not require authentication

  // Check if the current path starts with any of the unauthenticated pages
  const isUnauthenticatedPage = unauthenticatedPages.some(page => 
    window.location.pathname.startsWith(page)
  );

  if (!isAuthenticated && !isUnauthenticatedPage) {
    return (
      <div className="page-container">
        <AuthenticatedFeature>
          Log in to visit this page
        </AuthenticatedFeature>
      </div>
    )
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <Text size="xl" fw={600}>{title}</Text>
        <TextInput
          leftSection={<IconSearch size={16} />}
          placeholder="Search..."
          onChange={(e) => onSearch(e.currentTarget.value)}
        />
      </div>

      <div className="page-content">
        {children}
      </div>

      <div className="pagination">
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={onPageChange}
          withEdges
          firstIcon={IconArrowBarToLeft}
          lastIcon={IconArrowBarToRight}
          color="var(--mantine-color-text)"
          size="xl"
          radius="xl"
          siblings={0}
          styles={{
            control: {
              border: 'none'
            }
          }}
        />
      </div>
    </div>
  );
};

export default PageLayout; 