import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getClothesItemData } from '../../api/closet/clothes';
import {
  faChevronLeft,
  faChevronRight,
  faEdit,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const ClothesDetailsView = ({ itemDetails, onEdit, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스 상태 관리
  const [detailedItem, setDetailedItem] = useState(itemDetails); // 상세 아이템 상태 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  console.log(itemDetails);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const data = await getClothesItemData(itemDetails.clothesId);
        setDetailedItem(data);
      } catch (error) {
        console.error('Error fetching item details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [itemDetails.clothesId]);

  // 성별에 따른 텍스트 반환 함수
  const getGenderText = (gender) => {
    const genderMap = {
      MAN: '남성',
      WOMAN: '여성',
      COMMON: '남녀공용',
    };
    return genderMap[gender] || '지정되지 않음';
  };

  // 공개 상태에 따른 텍스트 반환 함수
  const getPublicStatusText = (publicStatus) => {
    const statusMap = {
      PUBLIC: '공개',
      PRIVATE: '비공개',
    };
    return statusMap[publicStatus] || '지정되지 않음';
  };

  // 판매 상태에 따른 텍스트 반환 함수
  const getSalesStatusText = (salesStatus) => {
    return salesStatus === 'ON_SALE' ? 'O' : 'X';
  };

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시
  }

  return (
    <>
      <div className="absolute top-3 right-3 flex space-x-2">
        <div
          onClick={onEdit}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <FontAwesomeIcon icon={faEdit} size="lg" /> {/* 편집 아이콘 */}
        </div>
        <div
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" /> {/* 닫기 아이콘 */}
        </div>
      </div>

      <div className="overflow-y-auto max-h-[75vh] p-4">
        <h2 className="text-xl font-bold">
          {detailedItem.name || '상세 정보'} {/* 옷 이름 또는 상세 정보 */}
        </h2>
        <div className="relative mb-4">
          {detailedItem.imageUrls && detailedItem.imageUrls.length > 0 ? (
            <div>
              <img
                src={detailedItem.imageUrls[currentImageIndex]}
                alt={`옷 이미지 ${currentImageIndex + 1}`}
                className="w-full my-2"
              />
              {detailedItem.imageUrls.length > 1 && (
                <>
                  <div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                    onClick={() =>
                      setCurrentImageIndex(
                        (currentImageIndex -
                          1 +
                          detailedItem.imageUrls.length) %
                          detailedItem.imageUrls.length
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />{' '}
                    {/* 이전 이미지로 이동 */}
                  </div>
                  <div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                    onClick={() =>
                      setCurrentImageIndex(
                        (currentImageIndex + 1) % detailedItem.imageUrls.length
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </>
              )}
            </div>
          ) : (
            <p>이미지가 없습니다.</p>
          )}
        </div>
        <p>카테고리: {detailedItem.category || '지정되지 않음'}</p>
        <p>브랜드: {detailedItem.brand || '지정되지 않음'}</p>
        <p>사이즈: {detailedItem.size || '지정되지 않음'}</p>
        <p>색상: {detailedItem.color || '지정되지 않음'}</p>
        <p>구매처: {detailedItem.purchase || '지정되지 않음'}</p>
        <p>성별: {getGenderText(detailedItem.gender)}</p>
        <p>판매 여부: {getSalesStatusText(detailedItem.salesStatus)}</p>
        <p>공개 여부: {getPublicStatusText(detailedItem.publicStatus)}</p>
        <p>즐겨찾기: {detailedItem.isLiked ? '예' : '아니오'}</p>
      </div>
    </>
  );
};

export default ClothesDetailsView;
