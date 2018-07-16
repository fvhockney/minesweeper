export default class Minefield {
    constructor(settings) {
        this.field = {}
        this._mineTheField(settings.height, settings.width, settings.bombs)
        this.area = settings.height * settings.width
        this.rows = settings.height
        this.cols = settings.width
        this.bombs = settings.bombs
    }

    _mineTheField(height, width, bombs) {
        let x = 1
        let y = 1
        let areaLeft = height * width
        for (; y <= height; y++) {
            for (x = 1; x <= width; x++) {
                let isBomb = bombs > 0 ? this._buryMine(bombs, areaLeft) : false
                isBomb ? bombs-- : null
                areaLeft--
                this.field[`${x}_${y}`] = {
                    'hasBomb': isBomb, 'x': x, 'y': y, 'uncovered': false, 'flagged': false
                }
            }
        }
    }

    _buryMine(bombs, areaLeft) {
        return Math.random() > (bombs / areaLeft)
    }

}