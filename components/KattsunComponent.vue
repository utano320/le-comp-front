<template>
   <div class="container">
    <div class="row">
      <select class="kattsun-component column" v-model="name">
        <option value="">--- 選択してください ---</option>
        <option
          v-for="name in strength"
          :value="name"
          :key="name"
        >
          {{ name }}
        </option>
      </select>
      <button @click="getCount(name)">実行</button>
    </div>
    <table>
      <tr>
        <th>順位</th>
        <th>人数</th>
      </tr>
     <tr
        v-for="(count, index) in stCount"
        :key="index"
      >
        <td>{{ index + 1 }} 位</td>
        <td>{{ count }} 人</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    }
  },
  props: {
    strength: {
      type: Array,
      default: []
    },
    getCount: {
      type: Function,
      default: null
    },
    stCount: {
      type: Array,
      default: []
    }
  }
}
</script>
