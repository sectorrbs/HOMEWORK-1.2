'use strict'

let game = {
    run() {
        while (true) {
            let direction = mover.getDirection();
            if (direction === null) {
                console.log('Игра окончена');
                return;
            };
            let nextPoint = mover.getNextPosition(direction);
            if (mover.getFieldofPlay(nextPoint)) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            } else {
                alert('Не выходите за пределы поля!');
            }
        }
    },
    init() {
        console.log('Ваше положение  на карте в виде "o"');
        renderer.render();
        console.log('Наберите game.run() и нажмите Enter');
    },
};

game.init();