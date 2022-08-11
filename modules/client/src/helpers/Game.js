import { cardSrc } from '../consts/cards'

export class Player {
    cards
    points

    constructor(pot) {
        this.cards = pot.splice(0, 5)
        this.points = 0
    }
}

export class Game {
    pot
    player1
    player2
    static instance

    static getInstance() {
        if (!this.instance) {
            this.instance = new Game()
        }

        return this.instance
    }

    constructor() {
        this.start()
    }

    start() {
        this.pot = Object.keys(cardSrc).sort(() => Math.random() - Math.random())
        this.player1 = new Player(this.pot)
        this.player2 = new Player(this.pot)
    }

    // public static final int player1_id=0,player2_id=1,player3_id=2,player4_id=3;
    // private ;
    // private boolean isVibrate;
    // private long gameSpeed;
    // private int NOW_TURN_ID=0;
    // private int howMuchPlayers,yanivNumber,roundCount,GameOverOn;
    //
    // ArrayList<Player> Players = null;
    // AllCards kupa=null;
    // droptCard pl1=null;
    // String UserName;
    // int UserIcon;
    // ArrayList<oneRoundInfo> RoundsHistory;

    // public void;

    // refresh() {
    //     CardView.getInstance().initAll();
    //     Calculation.isFinish = true;
    //     pl1.set();
    //     for (Player p :Players
    // )
    //     p.showCards();
    //     ViewesFunctions.on_start();
    // }
}
