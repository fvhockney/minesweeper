<template>
    <b-alert id="game-message" :show="explosion || won" :variant="variant">
        <span v-if="explosion">You Lost</span>
        <span v-if="won">You Won</span>
    </b-alert>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';
    export default {
        name: "GameMessage",
        computed: {
          variant: function (){
            return this.won ? 'success' : 'danger'
          },
            ...mapState(['explosion']),
            ...mapGetters(['won'])
        }
    }
</script>

<style lang='scss' scoped>
#game-message {
  position: absolute;
  top: 10%;
}
</style>
