import { atom } from 'recoil';
import { cardSrc } from '../consts/cards';

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

const mixCardsPot = () => Object.keys(cardSrc).sort(() => Math.random() - Math.random());

export const CardsPot = atom({
  key: 'cardsPot',
  default: mixCardsPot(),
})

// export const Round = atom({
//   key: 'Round',
//   default: mixCardsPot()
// })
