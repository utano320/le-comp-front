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
      <button @click="getRmse(first)">比較</button>
    </div>
    <table>
      <tr>
        <th>対象</th>
        <th>比較結果</th>
      </tr>
      <tr
        v-for="(rmse, index) in rmseList"
        :key="index"
      >
        <td>{{ rmseList[index][0] }}</td>
        <td>{{ rmseList[index][1] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: 0
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
    rmseList: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
table {
  color: #666;
  font-weight: bold;
}
</style>
