import { atom } from 'recoil';

const searchFilterState = atom({
  key: 'searchFilterState',
  default: {
      keyword: '',
      category: '',
      company: []
  },
});


export { searchFilterState };