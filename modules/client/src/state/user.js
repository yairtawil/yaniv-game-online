import { atom } from 'recoil';

export const UserState = atom({
  key: 'userState',
  default: {
    initialized: false,
    user: null,
  },
});

export const IsConnected = atom({
  key: 'IsConnected',
  default: false
})
