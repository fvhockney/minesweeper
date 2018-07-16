<template>
    <div @click.left="dig(dangerZone)" @click.right.prevent="flag(dangerZone)" class="square cell"
         :class="[dangerZone.uncovered ? 'show' : dangerZone.flagged ? 'flagged' : 'covered']">
        <!--<template v-if="dangerZone.uncovered">-->
            <span v-if="dangerZone.hasBomb">!!!</span>
            <span v-else-if="numberOfBombs(x,y) === 0"></span>
            <span v-else :class="'number-'+numberOfBombs(x,y)">{{numberOfBombs(x,y)}}</span>
        <!--</template>-->
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex';

    export default {
        name: "MineCell",
        props: ['x', 'y'],
        data() {
            return {
                dangerZone: {}
            }
        },
        created() {
            this.dangerZone = this.cell(this.x, this.y)
        },
        watch: {
            'dangerZone.uncovered': function () {
                this.dangerZone = this.cell(this.x, this.y)
                if (this.numberOfBombs(this.x, this.y) === 0 && this.dangerZone.uncovered) {
                    this.checkAdjacent(this.dangerZone)
                }
            },
            deep: true
        },
        computed: {
            ...mapGetters(['adjacent', 'numberOfBombs', 'cell'])
        },
        methods: {
            ...mapActions(['dig', 'flag', 'checkAdjacent']),
            ...mapMutations(['flag'])
        }
    }
</script>

<style lang="scss" scoped>
    .square {
        width: 50px;
        height: 50px;
    }

    .show {
        background-color: darkgray;
    }

    .covered {
        background-color: lightgray;
        box-shadow: gray inset 2px 2px;
    }

    .flagged {
        background-color: green;
    }

    .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        .number-1 {color: darkblue}
        .number-2 {color: royalblue}
        .number-3 {color: darkgreen}
        .number-4 {color: darkcyan}
        .number-5 {color: darkviolet}
        .number-6 {color: orange}
        .number-7 {color: saddlebrown}
        .number-8 {color: darkred}
    }
</style>