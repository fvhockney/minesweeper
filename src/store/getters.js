export default {
    numberOfBombs: (state, getters) => (x, y) => {
        return _.filter(getters.adjacent(x, y), 'hasBomb').length
    },
    adjacent: (state) => (x, y) => {
        return _.filter(state.minefield.field, m => {
            return ((m.x >= x - 1 && m.x <= x + 1) && (m.y >= y - 1 && m.y <= y + 1) && !(m.y === y && m.x === x))
        })
    },
    cell: (state) => (x, y) => {
        return state.minefield.field[`${x}_${y}`]
    },
    won: (state) => {
        return _.filter(state.minefield.field, {
            'hasBomb': true,
            'uncovered': false
        }).length === state.minefield.bombs && _.filter(state.minefield.field, {
            'hasBomb': false,
            'uncovered': true
        }).length === state.minefield.area - state.minefield.bombs
    },
}