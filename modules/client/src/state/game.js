import { atom } from 'recoil';
import { cardSrc } from '../consts/cards';

const mixCardsPot = () => Object.keys(cardSrc).sort(() => Math.random() - Math.random());
const pot = mixCardsPot();

export const Game = atom({
    key: 'Game',
    default: {
        pot,
        active: pot.splice(0, 1),
        upCards: [],
        player1: {
            cards: pot.splice(0, 5),
            points:  0
        },
        player2: {
            cards: pot.splice(0, 5),
            points:  0
        }
    }
})
