import { Avatar, Card, Group, Image, Text } from "@mantine/core";
import { BusinessProfile, Profile } from "@shared/types/Profile";
import { useNavigate } from "react-router-dom";
import fallback from '@shared/assets/fallback.jpg';

interface MarketplaceCardProps {
  image?: string
  user?: Profile
  business?: BusinessProfile
  name: string
  price: number
  onClick?: () => void
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ image, user, business, name, price, onClick }) => {
  const navigate = useNavigate();
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder onClick={onClick} className="cursor-pointer">
      <Card.Section className='h-48'>
        <Image src={image || fallback} alt={name} className="w-full object-cover object-center" style={{ objectPosition: 'middle' }} />
      </Card.Section>
      <Card.Section className='bg-white p-2'>
        <Text fw={500}>{name}</Text>
        <Group className='flex items-center gap-2 py-2 cursor-pointer' onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the card's onClick
          navigate(`/profile/${business?.id || user?.id}`);
        }}>
          <Avatar src={business?.logo || user?.avatar_url || ""} alt={business?.company_name || user?.name || ""} radius="xl" size="sm">
            {business?.company_name?.charAt(0) || user?.name?.charAt(0)}
          </Avatar>
          <Text size='sm'>Produced by {business?.company_name || user?.name || 'Unknown'}</Text>
        </Group>
        <Text size='sm' className="font-semibold">${price}</Text>
      </Card.Section>
    </Card>
  );
};

export default MarketplaceCard;
