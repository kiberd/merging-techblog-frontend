import { atom } from 'recoil';

const userState = atom({
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


export { userState };