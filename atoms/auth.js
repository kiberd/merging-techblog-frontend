import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
      isLogin: false,
      info: {
          name: '',
          email: '',
          img: '',
          bookmarkList: []
      },
      
  },
});


