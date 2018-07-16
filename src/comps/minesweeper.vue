<template>
    <div>
        <greet-screen v-if="showGreet"></greet-screen>
        <minefield></minefield>
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

<style scoped>

</style>