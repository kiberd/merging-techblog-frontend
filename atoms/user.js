import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    bookmarkList: []
  },
});

export const bookmarkListState = selector({
    key: 'bookmarkListSelector',
    get: ({get}) => {
      return get(userState).bookmarkList;
    },
    set: ({set, get}, newValue) => {
  
      const newBookmarkList = [...get(userState).bookmarkList];


    //   const isExist = newBookmarkList.some((bookmark) => bookmark._id === newValue._id);
  
    //   if (isExist) {
    //       const index = newBookmarkList.findIndex((bookmark: NewsResult) => bookmark._id === newValue._id);
    //       newBookmarkList.splice(index, 1);
    //   } else {
    //       newBookmarkList.push(newValue);
    //   }
    //   set(userState, (prevState) => ({
    //       ...prevState,
    //       bookmarkList: newBookmarkList
    //   }));


    }
  });