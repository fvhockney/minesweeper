<template>
    <b-alert :show="explosion || won">
        <span v-if="explosion">You Lost</span>
        <span v-if="won">You Won</span>
    </b-alert>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';
    export default {
        name: "GameMessage",
        computed: {
            ...mapState(['explosion']),
            ...mapGetters(['won'])
        }
    }
</script>

<style scoped>

</style>