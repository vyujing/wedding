const gallery = [ // galley image list
  require('./Image/gallery/1.jpeg'),
  require('./Image/gallery/2.jpeg'),
  require('./Image/gallery/3.jpeg'),
  require('./Image/gallery/4.jpeg'),
  require('./Image/gallery/5.jpeg'),
  require('./Image/gallery/6.jpeg'),
  require('./Image/gallery/7.jpeg'),
  require('./Image/gallery/8.jpeg'),
];

export default {
  global: {
    googleMapAPIKey: 'AIzaSyA2LscoZWUWai7Clucd6kAXbye6W_XXwY0',
    comment: {
      livere: {
        enable: true, // if false, not rendering livere comment component
        service: 'city',
        uid: 'MTAyMC8zMjU1Ni85MTE3',
      },
      facebook: {
        enable: false, // if false, not rendering facebook comment component
        appId: '1535680996513864',
      },
    },
  },
  title: 'Wedding Invitation', // recomanded English
  wedding: {
    place: {
      name: '샤이닝스톤컨벤션 B1 모닝컨벤션홀',
      address: '서울특별시 영등포구 은행로 30 중소기업중앙회',
      latitude: 37.5282002153,
      longitude: 126.9226583218,
    },
    at: '2018-01-27 12:00',
  },
  bridal: {
    name: '김광민',
    firstName: '광민',
    lastName: '김',
    image: require('./Image/bridal.png'),
    phone: '01026871577',
    facebook: false, // if false, not showing facebook icon
    father: '김명철',
    mother: '장명화',
    position: '장남',
  },
  groom: {
    name: '강진주',
    firstName: '진주',
    lastName: '강',
    image: require('./Image/groom.png'),
    phone: '01051215262',
    facebook: false,
    father: '강석일',
    mother: '이상미',
    position: '장녀',
  },
  image: {
    header: require('./Image/gallery/1.jpeg'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
