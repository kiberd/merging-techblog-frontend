import { atom } from 'recoil';

const listState = atom({
  key: 'listState',
  default: true,
});

export { listState };