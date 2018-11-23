<template>
  <div class="container">
    <div class="row">
      <select class="test-component column" v-model="first">
        <option value="0">--- 選択してください ---</option>
        <option
          v-for="user in users"
          :value="user.id"
          :key="user.id"
        >
          {{ user.name }}
        </option>
      </select>
      <select class="test-component column" v-model="second">
        <option value="0">--- 選択してください ---</option>
        <option
          v-for="user in users"
          :value="user.id"
          :key="user.id"
        >
          {{ user.name }}
        </option>
      </select>
      <button @click="getRmse(first, second)">比較</button>
    </div>
    <div class="row">
      <div class="column">比較結果：{{ rmse === -1 ? '-' : rmse }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: 0,
      second: 0
    };
  },
  props: {
    users: {
      type: Array,
      default: []
    },
    getRmse: {
      type: Function,
      default: null
    },
    rmse: {
      type: Number,
      default: -1
    }
  }
};
</script>
