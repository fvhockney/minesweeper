<template>
    <div>
        <b-form-group label="Choose your poison!">
            <b-form-radio-group :options="levels" v-model="selected" name="mineLevels"></b-form-radio-group>
        </b-form-group>
        <b-button variant="primary" @click="generateField(selected)">Play</b-button>
    </div>
</template>


<script>
    import {mapActions} from 'vuex';
    export default {
        name: "GreetScreen",
        data() {
            return {
                selected: '',
                levels: [
                    {text: 'Beginner', value: 'beginner'},
                    {text: 'Advanced', value: 'advanced'},
                    {text: 'Expert', value: 'expert'}
                ],
            }
        },
        methods: {
            ...mapActions(['generateField'])
        }
    }
</script>
<style scoped>

</style>