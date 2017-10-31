<template>
  <div class="sheet">
    <Settings/>
    <p class="name">{{ sheetInfo }}</p>
    <img src="../assets/piano-sheets/chopin-nocturne-music-sheet.jpg" alt="The music sheet for Chopin's Nocture op.9 No.2">
  </div>
</template>

<script>
import Settings from './Settings';

export default {
  components: { Settings },
  name: 'MusicSheet',
  data() {
    return {
      sheetInfo: 'Chopin',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  font-size: 4em;
  font-weight: bold;
}
</style>
