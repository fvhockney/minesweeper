import Minefield from "../classes/minefield";
import { settings } from "../classes/config";

export const mutations = {
    flag: function (state, dangerZone) {
        if (!dangerZone.uncovered) {
            dangerZone.flagged = !dangerZone.flagged
        }
    },
    uncovered: function (state, dangerZone) {
        dangerZone.uncovered = true
        dangerZone.flagged = false
    },
    explode: function (state) {
        state.explosion = true
    },
    toggleGreet: function(state) {
        state.showGreet = ! state.showGreet
    },
    toggleField: function (state) {
        state.showField = ! state.showField
    },
    makeField: function (state, level) {
        let config
        config = settings[level]
        state.minefield = new Minefield({'height': config.rows, 'width': config.cols, 'bombs': config.bombs})
    }
}
