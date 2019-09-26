export default class Game {
    score = 0;
    lines = 0;
    level = 0;
    playfield = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ];
    activePieceX = 0;
    activePieceY = 0;
    activePiece = {
        x: 0,
        y: 0,
        blocks = [
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ]
    };

    movePieceLeft() {
        this.activePiece.x -= 1;

        if (this.isPieceOutOfBounds()) {
            this.activePiece.x += 1;
        }
    }

     movePieceRight() {
        this.activePiece.x += 1;
        if (this.isPieceOutOfBounds()) {
            this.activePiece.x -= 1;
        }
    }

     movePieceDown() {
        this.activePiece.y += 1;
        if (this.isPieceOutOfBounds()) {
            this.activePiece.y -= 1;
        }
    }

    isPieceOutOfBounds() {
        const playfield = this.playfield;
        const { y, x } = this.activePiece;

        return playfield[y] === undefined || playfield[y][x] !== undefined;
     }

     lockPiece() {
         const blocks = this.activePiece.blocks;
         const { y: pieceY, x: pieceX, blocks } = this.activePiece;

         for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < block[y].length; x++) {
                this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
            }
         }
     }
}