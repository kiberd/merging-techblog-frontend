import { atom } from 'recoil';

const listState = atom({
  key: 'listState',
  default: true,
});

const loginModalState = atom({
  key: 'loginModalState',
  default: false
})

export { listState, loginModalState };