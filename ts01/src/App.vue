<template>
  <div id="app">
    <menu-bar></menu-bar>
    {{$store.state.title}}
    <item-list></item-list>
    <MemoEditor v-if="$store.state.isShow" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from './components/MenuBar.vue'
import ItemList from './components/ItemList.vue'
import MemoEditor from './components/MemoEditor.vue';
@Component({
  components: {
    MenuBar,
    ItemList,
    MemoEditor
  },
})
export default class App extends Vue {}
</script>
