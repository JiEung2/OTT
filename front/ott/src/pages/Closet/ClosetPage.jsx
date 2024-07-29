import { useState } from 'react';
import backgroundImage from '../../assets/images/background_image_closet.png';
import CategoryDropdown from '../../components/closet/CategoryDropdown';
import ClothesGrid from '../../components/closet/ClothesGrid';
import AddClothesModal from '../../components/closet/AddClothesModal';
import clothesData from './clothesData.js';

const ClosetPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [clothes, setClothes] = useState(clothesData);
  const [categories, setCategories] = useState([
    '전체', '상의', '하의', '아우터', '한벌옷', '즐겨찾기'
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleAddClothes = (newClothes) => {
    setClothes([...clothes, newClothes]);
    if (!categories.includes(newClothes.category)) {
      setCategories([...categories, newClothes.category]);
    }
  };

  const handleToggleLike = (id) => {
    setClothes(clothes.map(item => item.id === id ? { ...item, isLiked: !item.isLiked } : item));
  };

  const filteredClothes = selectedCategory === '전체'
    ? clothes
    : selectedCategory === '즐겨찾기'
    ? clothes.filter(item => item.isLiked)
    : clothes.filter(item => item.category === selectedCategory);

  return (
    <div
      className="relative flex flex-col items-center w-full h-full min-h-screen bg-cover pb-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <CategoryDropdown
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        categories={categories}
      />
      <ClothesGrid clothes={filteredClothes} onToggleLike={handleToggleLike} />
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 bg-violet-400 text-white rounded-lg hover:bg-violet-600 flex items-center justify-center"
          style={{ width: '200px' }}
        >
          + 옷 추가하기
        </button>
      </div>
      <AddClothesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddClothes={handleAddClothes}
        categories={categories.filter(cat => cat !== '즐겨찾기')}
      />
    </div>
  );
};

export default ClosetPage;
