import lookbookimg from '../../../public/icon-192x192.png';

export const dummyLookbooks = [
  {
    id: 1,
    name: 'Summer Collection',
    image: lookbookimg,
    date: '2024년 7월 16일',
    timeAgo: '몇시간 전',
    likes: 120,
    creatorName: '이름1',
    tags: ['#여름', '#도시남'],
    attributes: {
      height: 170,
      weight: 65,
      bodyType: 'Slim',
      style: 'Formal',
    },
    comments: [
      { author: '사용자1', text: '이 옷 정말 좋아요!', time: '4일 전' },
    ],
  },
  {
    id: 2,
    name: 'Autumn Vibes',
    image: lookbookimg,
    date: '2024년 8월 10일',
    timeAgo: '5일 전',
    likes: 75,
    creatorName: '이름2',
    tags: ['#가을', '#따뜻한'],
    attributes: {
      height: 175,
      weight: 70,
      bodyType: 'Athletic',
      style: 'Casual',
    },
    comments: [
      {
        author: '사용자2',
        text: '니트가 너무 따뜻해 보이네요.',
        time: '2일 전',
      },
    ],
  },
  {
    id: 3,
    name: 'Winter Wonderland',
    image: lookbookimg,
    date: '2024년 12월 1일',
    timeAgo: '13일 전',
    likes: 98,
    creatorName: '이름3',
    tags: ['#겨울', '#코트'],
    attributes: {
      height: 180,
      weight: 75,
      bodyType: 'Average',
      style: 'Formal',
    },
    comments: [
      {
        author: '사용자3',
        text: '이 코트 어디서 살 수 있나요?',
        time: '5일 전',
      },
    ],
  },
  {
    id: 4,
    name: 'Spring Blossoms',
    image: lookbookimg,
    date: '2024년 4월 15일',
    timeAgo: '9일 전',
    likes: 54,
    creatorName: '이름4',
    tags: ['#봄', '#화사한'],
    attributes: {
      height: 165,
      weight: 60,
      bodyType: 'Slim',
      style: 'Casual',
    },
    comments: [
      { author: '사용자4', text: '이 룩 너무 상큼해요!', time: '7일 전' },
    ],
  },
  {
    id: 5,
    name: 'Urban Jungle',
    image: lookbookimg,
    date: '2024년 5월 20일',
    timeAgo: '17일 전',
    likes: 150,
    creatorName: '이름5',
    tags: ['#도시', '#스트릿패션'],
    attributes: {
      height: 172,
      weight: 68,
      bodyType: 'Athletic',
      style: 'Casual',
    },
    comments: [
      { author: '사용자5', text: '멋진 도심 스타일!', time: '3일 전' },
    ],
  },
  {
    id: 6,
    name: 'Beach Breeze',
    image: lookbookimg,
    date: '2024년 6월 10일',
    timeAgo: '21일 전',
    likes: 177,
    creatorName: '이름6',
    tags: ['#해변', '#휴양지'],
    attributes: {
      height: 178,
      weight: 72,
      bodyType: 'Slim',
      style: 'Casual',
    },
    comments: [
      { author: '사용자6', text: '휴양지 느낌 물씬 나네요.', time: '7일 전' },
    ],
  },
  {
    id: 7,
    name: 'Classic Elegance',
    image: lookbookimg,
    date: '2024년 2월 14일',
    timeAgo: '1달 전',
    likes: 200,
    creatorName: '이름7',
    tags: ['#클래식', '#엘레강스'],
    attributes: {
      height: 168,
      weight: 64,
      bodyType: 'Average',
      style: 'Casual',
    },
    comments: [
      { author: '사용자7', text: '이 정장 너무 멋져요.', time: '14일 전' },
    ],
  },
  {
    id: 8,
    name: 'Sporty Spice',
    image: lookbookimg,
    date: '2024년 3월 5일',
    timeAgo: '3주 전',
    likes: 250,
    creatorName: '이름8',
    tags: ['#운동', '#스포티'],
    attributes: {
      height: 175,
      weight: 70,
      bodyType: 'Athletic',
      style: 'Sporty',
    },
    comments: [
      { author: '사용자8', text: '운동하기 딱 좋은 옷!', time: '20일 전' },
    ],
  },
  {
    id: 9,
    name: 'Evening Chic',
    image: lookbookimg,
    date: '2024년 9월 14일',
    timeAgo: '2달 전',
    likes: 180,
    creatorName: '이름9',
    tags: ['#저녁', '#시크'],
    attributes: {
      height: 165,
      weight: 55,
      bodyType: 'Slim',
      style: 'Casual',
    },
    comments: [
      { author: '사용자9', text: '저녁 모임에 딱이에요.', time: '30일 전' },
    ],
  },
  {
    id: 10,
    name: 'Festival Fun',
    image: lookbookimg,
    date: '2024년 10월 2일',
    timeAgo: '1달 전',
    likes: 133,
    creatorName: '이름10',
    tags: ['#페스티벌', '#즐거움'],
    attributes: {
      height: 180,
      weight: 75,
      bodyType: 'Average',
      style: 'Casual',
    },
    comments: [
      { author: '사용자10', text: '페스티벌에 입기 좋아요!', time: '28일 전' },
    ],
  },
  {
    id: 11,
    name: 'Cozy Winter',
    image: lookbookimg,
    date: '2024년 11월 30일',
    timeAgo: '3주 전',
    likes: 210,
    creatorName: '이름11',
    tags: ['#겨울', '#코지'],
    attributes: {
      height: 170,
      weight: 70,
      bodyType: 'Slim',
      style: 'Casual',
    },
    comments: [
      { author: '사용자11', text: '따뜻하고 아늑해요.', time: '20일 전' },
    ],
  },
  {
    id: 12,
    name: 'Street Style',
    image: lookbookimg,
    date: '2024년 5월 12일',
    timeAgo: '6개월 전',
    likes: 145,
    creatorName: '이름12',
    tags: ['#거리', '#스트릿'],
    attributes: {
      height: 178,
      weight: 74,
      bodyType: 'Athletic',
      style: 'Casual',
    },
    comments: [
      { author: '사용자12', text: '도시적인 스타일!', time: '25일 전' },
    ],
  },
  {
    id: 13,
    name: 'Retro Revival',
    image: lookbookimg,
    date: '2024년 1월 10일',
    timeAgo: '1주 전',
    likes: 190,
    creatorName: '이름13',
    tags: ['#레트로', '#복고'],
    attributes: {
      height: 165,
      weight: 60,
      bodyType: 'Slim',
      style: 'Retro',
    },
    comments: [{ author: '사용자13', text: '복고풍 멋져요!', time: '12일 전' }],
  },
  {
    id: 14,
    name: 'Casual Comfort',
    image: lookbookimg,
    date: '2024년 7월 22일',
    timeAgo: '4일 전',
    likes: 165,
    creatorName: '이름14',
    tags: ['#캐주얼', '#편안함'],
    attributes: {
      height: 172,
      weight: 68,
      bodyType: 'Average',
      style: 'Casual',
    },
    comments: [
      { author: '사용자14', text: '편안하게 입기 좋아요.', time: '2일 전' },
    ],
  },
  {
    id: 15,
    name: 'Bohemian Dream',
    image: lookbookimg,
    date: '2024년 3월 15일',
    timeAgo: '1달 전',
    likes: 230,
    creatorName: '이름15',
    tags: ['#보헤미안', '#드림'],
    attributes: {
      height: 160,
      weight: 55,
      bodyType: 'Slim',
      style: 'Casual',
    },
    comments: [
      { author: '사용자15', text: '보헤미안 느낌 좋아요.', time: '28일 전' },
    ],
  },
  {
    id: 16,
    name: 'Summer Breeze',
    image: lookbookimg,
    date: '2024년 7월 20일',
    timeAgo: '3일 전',
    likes: 105,
    creatorName: '이름1',
    tags: ['#여름', '#바캉스'],
    attributes: {
      height: 170,
      weight: 65,
      bodyType: 'Slim',
      style: 'Casual',
    },
    comments: [
      { author: '사용자16', text: '여름에 입기 좋아요!', time: '1일 전' },
    ],
  },
  {
    id: 17,
    name: 'Urban Chic',
    image: lookbookimg,
    date: '2024년 7월 22일',
    timeAgo: '2일 전',
    likes: 112,
    creatorName: '이름1',
    tags: ['#도시', '#시크'],
    attributes: {
      height: 175,
      weight: 70,
      bodyType: 'Athletic',
      style: 'Formal',
    },
    comments: [
      {
        author: '사용자17',
        text: '도시에서 입기 좋은 스타일.',
        time: '2일 전',
      },
    ],
  },
  {
    id: 18,
    name: 'Classic Winter',
    image: lookbookimg,
    date: '2024년 12월 5일',
    timeAgo: '10일 전',
    likes: 130,
    creatorName: '이름1',
    tags: ['#겨울', '#클래식'],
    attributes: {
      height: 180,
      weight: 75,
      bodyType: 'Average',
      style: 'Formal',
    },
    comments: [
      {
        author: '사용자18',
        text: '겨울에 입기 좋은 클래식 룩.',
        time: '3일 전',
      },
    ],
  },
  {
    id: 19,
    name: 'Spring Awakening',
    image: lookbookimg,
    date: '2024년 4월 18일',
    timeAgo: '11일 전',
    likes: 95,
    creatorName: '이름1',
    tags: ['#봄', '#활기찬'],
    attributes: {
      height: 165,
      weight: 60,
      bodyType: 'Slim',
      style: 'Casual',
    },
    comments: [
      { author: '사용자19', text: '봄에 딱 맞는 스타일.', time: '7일 전' },
    ],
  },
  {
    id: 20,
    name: 'Urban Night',
    image: lookbookimg,
    date: '2024년 5월 25일',
    timeAgo: '15일 전',
    likes: 145,
    creatorName: '이름1',
    tags: ['#도시', '#야경'],
    attributes: {
      height: 172,
      weight: 68,
      bodyType: 'Athletic',
      style: 'Casual',
    },
    comments: [
      { author: '사용자20', text: '야경에서 빛나는 룩.', time: '5일 전' },
    ],
  },
];
