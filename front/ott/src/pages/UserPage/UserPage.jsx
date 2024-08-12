import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import mainIcon from '../../assets/icons/main.logo.png';
import Posts from '@/components/userPage/Posts';
import Followers from '@/components/userPage/Followers';
import Following from '@/components/userPage/Following';
import backgroundImage from '../../assets/images/background_image_main.png';
import lockIcon from '../../assets/icons/lockicon.png';
import settingIcon from '../../assets/icons/Setting_icon.png';
import NavBar from '@/components/userPage/NavBar';
import closetIcon from '@/assets/icons/closet_icon.png';
import rtcIcon from '@/assets/icons/webrtcicon.png';
import {
  getUid,
  getUserInfo,
  followUser,
  unfollowUser,
} from '../../api/user/user';

const UserPage = () => {
  // targetId를 props로 받음
  const [activeComponent, setActiveComponent] = useState('posts');
  const [followStatus, setFollowStatus] = useState('팔로우'); // 초기 상태를 '팔로우'로 설정
  const [userInfo, setUserInfo] = useState(null);
  const [uid, setUid] = useState(null);
  const [isMe, setIsMe] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const [targetId, setTargetId] = useState(location.state.id);
  useEffect(() => {
    console.log('targetId:', targetId);
    const fetchUserData = async (targetId) => {
      try {
        const userInfoResponse = await getUserInfo(targetId);
        console.log('userInfoResponse : ', userInfoResponse);
        setUserInfo(userInfoResponse.data);

        // isMe와 isPublic 상태 업데이트
        setIsMe(userInfoResponse.data.followStatus === 'SELF');
        setIsPublic(userInfoResponse.data.publicStatus === 'PUBLIC');
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (targetId) {
      setUid(targetId);
      fetchUserData(targetId);
    } else {
      const fetchCurrentUserData = async () => {
        try {
          const uidResponse = await getUid();
          const id = uidResponse.data.id;
          setUid(id);
          fetchUserData(id);

          // targetId 저장 - 본인인 경우 targetId와 uid가 같음
          setTargetId(id);
        } catch (error) {
          console.error('Error fetching current user info:', error);
        }
      };
      fetchCurrentUserData();
    }
  }, [targetId]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  const { name, tags } = userInfo;

  let renderComponent;

  switch (activeComponent) {
    case 'posts':
      renderComponent = <Posts isMe={isMe} isPublic={isPublic} />;
      break;
    case 'followers':
      renderComponent = <Followers uid={uid} />;
      break;
    case 'following':
      renderComponent = <Following uid={uid} />;
      break;
    default:
      renderComponent = null;
  }

  //팔로우 요청 함수
  const fetchFollowUser = async (targetId) => {
    try {
      const response = await followUser(targetId);
      console.log('팔로우한 response : ', response);
      return response;
    } catch (error) {
      console.error('Error following user:', error);
    }
  };
  const fetchUnfollowUser = async (targetId) => {
    try {
      const response = await unfollowUser(targetId);
      console.log('언팔로우한 response : ', response);
      return response;
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };
  const handleClosetIconClick = () => {
    navigate('/closet');
  };

  const handleRtcIconClick = () => {};

  const handleFollowButtonClick = () => {
    if (followStatus === '팔로우') {
      setFollowStatus('요청됨');
      // 팔로우 요청 로직 추가
      fetchFollowUser(targetId);
    } else if (followStatus === '요청됨') {
      setFollowStatus('팔로우');
      // 팔로우 요청 취소 로직 추가
    }
  };

  const handleUnfollowButtonClick = () => {
    setFollowStatus('팔로우');
    // 언팔로우 로직 추가
    fetchUnfollowUser(targetId);
  };

  const handleSettingsClick = () => {
    console.log('이동하려는 회원 id', uid);
    if (uid) {
      navigate(`/updatePage`, { state: { uid, userInfo } });
    } else {
      console.error('ID is not available');
    }
  };

  return (
    <div
      className="relative flex flex-col items-center w-full min-h-screen bg-cover bg-center font-dohyeon mb-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="w-full flex justify-center mt-8">
          <img
            className="w-[70px] h-[70px] rounded-full"
            alt="User Icon"
            src={mainIcon}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-6">
          <div className="flex items-center justify-center w-full relative">
            <div className="flex items-center justify-center absolute left-0 right-0 mx-auto">
              {isPublic && isMe && (
                <img src={lockIcon} alt="잠금표시" className="w-6 h-6 mr-2" />
              )}
              <p className="text-lg font-dohyeon text-[rgba(0,0,0,0.5)]">
                {name}
              </p>
              {isMe && (
                <img
                  src={settingIcon}
                  alt="수정"
                  className="w-6 h-6 ml-2 cursor-pointer"
                  onClick={handleSettingsClick}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-2">
          <div className="w-[80%] flex justify-between border border-black p-2">
            {!isMe && (
              <div className="flex justify-center items-center w-full">
                <button
                  className={`w-[70%] px-4 py-2 border rounded ${
                    followStatus === '팔로잉'
                      ? 'bg-violet-200 text-black-500 border-violet-300'
                      : followStatus === '요청됨'
                        ? 'bg-blue-200 text-black-500 border-blue-300'
                        : 'bg-transparent text-[rgba(0,0,0,0.5)]'
                  }`}
                  onClick={
                    followStatus === '팔로잉'
                      ? handleUnfollowButtonClick
                      : handleFollowButtonClick
                  }
                  style={{ fontFamily: 'dohyeon' }}
                >
                  {followStatus}
                </button>
              </div>
            )}
            <div className="flex justify-center items-center w-full">
              {!isMe ? (
                <div className="flex">
                  <img
                    src={closetIcon}
                    alt="Colset Icon"
                    className="w-6 h-6 cursor-pointer mr-2"
                    onClick={handleClosetIconClick}
                  />
                  <img
                    src={rtcIcon}
                    alt="RTC Icon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleRtcIconClick}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center mt-1 ${
            tags.length > 3 ? 'flex-wrap' : ''
          } space-x-2`}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-violet-200 text-[rgba(0,0,0,0.5)] py-1 px-3 rounded-full text-sm mb-30 mt-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="w-full mt-6 h-full">
          <NavBar
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
          <div className="mt-4 text-[rgba(0,0,0,0.5)] h-full w-full">
            {renderComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
