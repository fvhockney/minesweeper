<template>
  <div class="my-auto">
    <div class="d-flex" v-for="row in rows" :key="row">
      <mine-cell v-for="cell in cols" :key="cell" :x="cell" :y="row"></mine-cell>
    </div>
  </div>
</template>

<script>
import MineCell from './minecell';
import {mapState} from 'vuex';

export default {
  name: "Minefield",
  components: {MineCell},
  computed: {
    ...mapState({
      rows: state => state.minefield.rows,
      cols: state => state.minefield.cols,
    })
  },
}
</script>

<style scoped>

</style>
