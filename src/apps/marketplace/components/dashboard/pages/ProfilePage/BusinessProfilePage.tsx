import { Button, Image, Menu, SimpleGrid } from "@mantine/core";
import { getCategoryNameById, getModelsPerUser } from "@shared/services/modelService";
import { ModelMetadata } from "@shared/services/modelService";
import { BusinessProfile as BusinessProfileType } from "@shared/types/Profile";
import { IconArrowLeft, IconArrowRight, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconCertificate, IconFlag, IconGlobe, IconInfoCircle, IconMail, IconMapPin, IconPhone, IconRefresh, IconSettings, IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileStorageService } from '@shared/services/profileStorage';
import { ComponentModal } from "../../components/ComponentModal/ComponentModal";
import ProductCard from "../Marketplace/components/ProductCard";

const RATING = 3.3

const BusinessProfilePage = ({businessProfile, ownProfile, onSwitch}: {businessProfile: BusinessProfileType, ownProfile: boolean, onSwitch: () => void}) => {
  const [images, setImages] = useState<string[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [products, setProducts] = useState<ModelMetadata[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [categories, setCategories] = useState<{id: number, name: string}[]>([]);
  const [selectedCategory, setSelectedSubcategory] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ModelMetadata | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      const images = await ProfileStorageService.getBusinessImages(businessProfile.id);
      setImages(images);
    };
    fetchImages();
  }, [businessProfile]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const userProducts = await getModelsPerUser(businessProfile.id);
        setProducts(userProducts);
        console.log("products", userProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [businessProfile]);

  useEffect(() => {
    const fetchSubcategoryNames = async () => {
      if (products.length === 0) return;
      try {
        const uniquecategories = Array.from(new Set(products.map((product) => product.category).filter((category) => category !== undefined)));
        const allcategories = await Promise.all(uniquecategories.map(async (category) => {
          const categoryName = await getCategoryNameById(category);
          return { id: category, name: categoryName };
        }));
        setCategories(allcategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchSubcategoryNames();
  }, [products]);

  const nextImage = () => {
    const newIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImageIndex(newIndex);
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length === 0) return;
  
    const total = images.length;
    const prevIndex = (selectedImageIndex - 1 + total) % total;
    const nextIndex = (selectedImageIndex + 1) % total;
  
    const updatedPreviewImages = [
      images[prevIndex],
      images[selectedImageIndex],
      images[nextIndex],
    ];
    console.log(updatedPreviewImages);
  
    setPreviewImages(updatedPreviewImages);
  }, [images, selectedImageIndex]);


  return (
    <>
    <div className="w-full bg-zinc-100 flex gap-8 py-4 px-24">
      <div className="flex flex-col gap-4 w-1/2">
        <div>
          <img src={businessProfile.logo} alt={businessProfile.company_name} className="h-24" />
        </div>
        <div>
          <p className="text-2xl font-semibold">{businessProfile.business_type}</p>
        </div>
        <div>
          <p className="text-4xl font-bold">{businessProfile.company_name},</p>
          <p className="text-4xl font-semibold">{businessProfile.country}</p>
        </div>
        <div>
          {(() => {
            const roundedRating = Math.round(RATING * 2) / 2;
            const fullStars = Math.floor(roundedRating);
            const halfStar = roundedRating % 1 !== 0;
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
            
            return (
              <div className="flex items-center gap-1">
                {Array.from({length: fullStars}).map((_, index) => (
                  <IconStarFilled size={24} className="text-yellow-500" key={`full-${index}`} />
                ))}
                {halfStar && <IconStarHalfFilled size={24} className="text-yellow-500" key="half" />}
                {Array.from({length: emptyStars}).map((_, index) => (
                  <IconStar size={24} className="text-yellow-500" key={`empty-${index}`} />
                ))}
                <p className="text-sm text-black font-bold mx-1">{RATING}</p>
                <p className="text-sm text-gray-500 font-light">Bazaar Rating</p>
              </div>
            );
          })()}
        </div>
        <div className="flex gap-2">
          <Menu shadow="md" width={200} position="bottom-start">
            <Menu.Target>
              <button className="bg-white px-4 rounded-md h-10 flex items-center justify-center font-bold">
                Information
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              {
                !businessProfile.country && !businessProfile.city && !businessProfile.description && !businessProfile.website && (
                  <Menu.Item>
                    {businessProfile.company_name} has no information
                  </Menu.Item>
                )
              }
              {
                businessProfile.country && (
                  <Menu.Item
                    leftSection={<IconFlag size={24} />}
                  >
                    {businessProfile.country}
                  </Menu.Item>
                )
              }
              {
                businessProfile.city && (
                  <Menu.Item
                    leftSection={<IconMapPin size={24} />}
                  >
                    {businessProfile.city}
                  </Menu.Item>
                )
              }
              {
                businessProfile.description && (
                  <Menu.Item
                    leftSection={<IconInfoCircle size={24} />}
                  >
                    {businessProfile.description}
                  </Menu.Item>
                )
              }
              {
                businessProfile.website && (
                  <Menu.Item
                    component="a"
                    href={businessProfile.website}
                    target="_blank"
                    leftSection={<IconGlobe size={24} />}
                  >
                    {businessProfile.website}
                  </Menu.Item>
                )
              }
            </Menu.Dropdown>
          </Menu>
          <Menu shadow="md" width={200} position="bottom-start">
            <Menu.Target>
              <button className="bg-white px-4 rounded-md h-10 flex items-center justify-center font-bold">
                Social Media
              </button>
            </Menu.Target>

            <Menu.Dropdown>
              {
                !businessProfile.facebook && !businessProfile.instagram && !businessProfile.linkedin && !businessProfile.youtube && (
                  <Menu.Item>
                    {businessProfile.company_name} has no social media links
                  </Menu.Item>
                )
              }
              {businessProfile.facebook && (
                <Menu.Item
                  component="a"
                  href={businessProfile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftSection={<IconBrandFacebook size={24} />}
                >
                  Facebook
                </Menu.Item>
              )}
              {businessProfile.instagram && (
                <Menu.Item
                  component="a"
                  href={businessProfile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftSection={<IconBrandInstagram size={24} />}
                >
                  Instagram
                </Menu.Item>
              )}
              {businessProfile.linkedin && (
                <Menu.Item
                  component="a"
                  href={businessProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftSection={<IconBrandLinkedin size={24} />}
                >
                  LinkedIn
                </Menu.Item>
              )}
              {businessProfile.youtube && (
                <Menu.Item
                  component="a"
                  href={businessProfile.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftSection={<IconBrandYoutube size={24} />}
                >
                  YouTube
                </Menu.Item>
              )}
            </Menu.Dropdown>
          </Menu>
          <Menu shadow="md" width={200} position="bottom-start">
            <Menu.Target>
              <button className="bg-white px-4 rounded-md h-10 flex items-center justify-center font-bold">
                Certifications
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconCertificate size={24} />}
              >
                Certifications
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu shadow="md" width={200} position="bottom-start">
            <Menu.Target>
              <button className="bg-white px-4 rounded-md h-10 flex items-center justify-center font-bold">
                Contact
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              {
                !businessProfile.phone && !businessProfile.email && (
                  <Menu.Item>
                    {businessProfile.company_name} has no contact information
                  </Menu.Item>
                )
              }
              {businessProfile.phone && (
                <Menu.Item
                  component="a"
                  href={`tel:${businessProfile.phone}`}
                  rel="noopener noreferrer"
                  leftSection={<IconPhone size={24} />}
              >
                  {businessProfile.phone}
                </Menu.Item>
              )}
              {businessProfile.email && (
                <Menu.Item
                  component="a"
                  href={`mailto:${businessProfile.email}`}
                  rel="noopener noreferrer"
                  leftSection={<IconMail size={24} />}
              >
                  {businessProfile.email}
                </Menu.Item>
              )}
            </Menu.Dropdown>

          </Menu>
        </div>
        {ownProfile && (
          <SimpleGrid cols={2}>
            <Button color="black" radius="md" leftSection={<IconSettings size={16} />} onClick={() => navigate('/profile/edit')}>Edit Business Profile</Button>
            <Button color="black" radius="md" leftSection={<IconRefresh size={16} />} onClick={onSwitch}>Switch to Personal Profile</Button>
          </SimpleGrid>
        )}
      </div>

      <div className="flex flex-col gap-4 w-1/2">
        {/* Image carousel */}
        <div className="relative w-full h-96 p-4">
          <img
            src={images[selectedImageIndex]}
            alt={`${businessProfile.company_name} - Image ${selectedImageIndex + 1}`}
            className="h-full max-w-full object-contain rounded-2xl m-auto"
          />
        </div>

        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={previousImage}
            className="bg-gray-300 hover:bg-white p-2 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <IconArrowLeft size={24} />
          </button>
          {previewImages.map((image, index) => {
            const actualIndex = (selectedImageIndex - 1 + index + images.length) % images.length;

            return (
              <button
                key={image + index}
                onClick={() => setSelectedImageIndex(actualIndex)}
                className={`relative w-24 h-24 overflow-hidden rounded-xl ${
                  actualIndex === selectedImageIndex ? 'ring-2 ring-black' : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`${businessProfile.company_name} - Miniature ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
          <button
            onClick={nextImage}
            className="bg-gray-300 hover:bg-white p-2 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <IconArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
    
    {/* Products section */}
    <div className="w-full bg-white flex flex-col gap-4 py-4 px-24">
      <div className="flex gap-4 w-full justify-center">
        <Button variant="subtle" className="text-md" color={selectedCategory === null ? "black" : "gray"} onClick={() => setSelectedSubcategory(null)}>
          All Products
        </Button>
        {categories.map((category) => (
          <Button key={category.id} variant="subtle" className="text-md" color={selectedCategory === category.id ? "black" : "gray"} onClick={() => setSelectedSubcategory(category.id)}>
            {category.name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        {products.filter((product) =>  (product.category === selectedCategory || selectedCategory === null)).map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price || null} image={product.thumbnail_url} business={businessProfile} onClick={()=>setSelectedProduct(product)} id={product.id || ""} type="component" />
        ))}
      </div>
    </div>
    {selectedProduct && (
      <ComponentModal component={selectedProduct} onClose={() => setSelectedProduct(null)} />
    )}
    </>
  );
};

export default BusinessProfilePage;
