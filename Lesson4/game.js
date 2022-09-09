const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0
};

const player = {
    x: null,
    y: null,
    init(startX, startY){
        this.x = startX;
        this.y = startY;
    },
    move(direction){
        switch (direction) {
            case 'w':
                this.y--;
                break;
            case 's':
                this.y++;
                break;
            case 'd':
                this.x++;
                break;
            case 'a':
                this.x--;
                break;
        }
    }
};

const game = {
    settings,
    player,
    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        while (true){
            this.render();
            const direction = this.getDirection();

            if (direction === 'q') return alert('game over');

            this.player.move(direction);
        }
    },
    render() {
        let map = '';
        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                map += this.player.x === col && this.player.y === row ? '0 ' : 'X ';
            }
            map += '\n';
        }
        console.clear();
        console.log(map);
    },

    getDirection(){
        const availableDirection = ['q', 'w', 's', 'a', 'd'];

        while (true){
            const direction = prompt('Enter direction WSAD or q for exit: ');
            if (!availableDirection.includes(direction)){
                alert('Enter direction WSAD or q for exit.');
                continue;
            }
            return direction;
        }


    },
};

game.run();