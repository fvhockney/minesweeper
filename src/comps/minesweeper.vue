<template>
    <div class="d-flex justify-content-center full-page">
        <greet-screen v-if="showGreet"></greet-screen>
        <minefield v-if="!showGreet" class="p-4"></minefield>
        <game-message></game-message>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import GreetScreen from './greetscreen';
    import Minefield from './minefield';
    import GameMessage from './message';

    export default {
        name: "Minesweeper",
        components:{
            GreetScreen,
            Minefield,
            GameMessage
        },
        computed: {
            ...mapState([
                'showGreet'
            ])
        }

    }
</script>

<style lang="scss" scoped>
  .full-page {
    min-height: 100vh;
  }
</style>
