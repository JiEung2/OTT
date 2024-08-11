import { useState, useEffect } from 'react';
import Recommend from '../../components/recommend/Recommend.jsx';
import MyLookbook from '../../components/mylookbook/MyLookbook';
import backgroundImage from '../../assets/images/background_image_main.png';
import FeedFollow from '../../components/feed/FeedFollow.jsx';
import FeedNoFollow from '../../components/feed/FeedNoFollow.jsx';
import { getUid } from '../../api/user/user.js';
import useUserStore from '../../data/lookbook/userStore.js';
import { getFollowingCount } from '../../api/user/user.js';

const NavBar = ({ activeComponent, setActiveComponent }) => {
  return (
    <nav className="flex justify-around w-full bg-white p-2 -mt-2">
      {['recommendation', 'feed', 'myLookbook'].map((comp, index) => (
        <button
          key={index}
          className={`bg-transparent border-none font-dohyeon text-slate-400 text-lg py-2 px-5 mx-1 sm:mx-3 cursor-pointer rounded-full ${
            activeComponent === comp ? 'bg-violet-200 text-slate-400' : ''
          }`}
          style={{ fontFamily: 'dohyeon' }}
          onClick={() => setActiveComponent(comp)}
        >
          {comp === 'recommendation'
            ? '추천'
            : comp === 'feed'
              ? '피드'
              : '내룩북'}
        </button>
      ))}
    </nav>
  );
};

const MainPage = () => {
  const [activeComponent, setActiveComponent] = useState('recommendation');

  const [hasFollow, setHasFollow] = useState(false);

  const setUserId = useUserStore((state) => state.setUserId);
  const memberId = useUserStore((state) => state.userId);
  const renderComponent = () => {
    switch (activeComponent) {
      case 'recommendation':
        return <Recommend />;
      case 'feed':
        return hasFollow ? (
          <FeedFollow />
        ) : (
          <FeedNoFollow setActiveComponent={setActiveComponent} />
        );
      case 'myLookbook':
        return <MyLookbook />;
      default:
        return <Recommend />;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const uidResponse = await getUid();
        console.log(uidResponse);
        const id = uidResponse.data.id;
        setUserId(id); // Set the userId in the Zustand store
        console.log('User ID:', id);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserData();
  }, [setUserId]);

  useEffect(() => {
    const fetchFollowCount = async () => {
      // console.log('Fetching follow count...'); // 이 로그가 찍히는지 확인
      try {
        const response = await getFollowingCount(memberId);
        // console.log('API Response:', response); // 이 로그가 찍히는지 확인
        if (response.data !== 0) {
          setHasFollow(true);
        } else {
          setHasFollow(false);
        }
      } catch (error) {
        console.error('Error fetching follow count:', error);
      }
    };
    fetchFollowCount();
  }, []); // 의존성을 빈 배열로 설정

  return (
    <div
      className="relative flex flex-col items-center w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <NavBar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <div className="content w-full flex-grow box-border mb-20">
        {renderComponent()}
      </div>
    </div>
  );
};

export default MainPage;
