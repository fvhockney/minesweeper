export const actions = {
    dig: function ({ commit }, dangerZone) {
        commit('uncovered', dangerZone)
        dangerZone.hasBomb ? commit('explode') : null
    },
    checkAdjacent: function ({ commit, getters }, dangerZone) {
        _.each(getters.adjacent(dangerZone.x, dangerZone.y), d => {
            if (getters.numberOfBombs(d.x, d.y) === 0 || !d.hasBomb && !d.flagged) {
                d.uncovered = true
            }
        })
    },
    generateField: function ({ commit }, level) {
        commit('makeField', level)
        commit('toggleGreet')
        commit('toggleField')
    }
}
