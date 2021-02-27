let mover = {
    getDirection() {
        let availableDirections = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt(`Введите число, куда хотите переместиться, или "Отмена" для выхода`));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел');
                continue;
            }
            return direction;
        }
    },
    getFieldofPlay(nextPoint) {
        return nextPoint.x >= 0 && nextPoint.x < 10 && nextPoint.y >= 0 && nextPoint.y < 10;
    },
    getNextPosition(direction) {
        let nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 5:
                nextPosition.y;
                nextPosition.x;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition;
    }
};