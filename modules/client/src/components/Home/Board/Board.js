import Card from './Card';
import { useRecoilState } from 'recoil';
import classes from './Board.module.scss';
import { cardBack } from '../../../consts/cards';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import { Game } from '../../../state/game';

const Board = () => {
    const [game, setGame] = useRecoilState(Game);

    console.log('game?', game);

    return (
        <div className={classes.board}>
            <div className={classes.inner}>
                <div className={classes.player}>
                    <p>player 1</p>

                    <div className={classes.playerCards}>
                        {game.player1.cards.map(value => (
                            <Card back={true} key={value} value={value} disabled />
                        ))}
                    </div>
                </div>

                <div className={clsx(classes.pot)}>
                    <div className={clsx(classes.potCards, { [classes.action]: !!game.upCards.length })} data-drop-here>
                        <img src={cardBack} />
                        <img src={cardBack} />
                        <img src={cardBack} />
                        <img src={cardBack} />
                    </div>

                    <Divider />

                    <Card value={game.active} data-drop-here disabled />
                </div>

                <div className={classes.player}>
                    <p>player 2</p>
                    <div className={classes.playerCards}>
                        {game.player2.cards.map(value => (
                            <Card key={value} value={value} up={game.upCards.includes(value)}
                                setUp={(_up) => setGame((_game) => ({
                                    ...game,
                                    upCards: _up ? [...game.upCards, value] : game.upCards.filter(_value => _value !== value)
                                }))} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
