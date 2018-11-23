<template>
  <div id="app">
    <h1>le-comp</h1>

    <test-component
      :users="users"
      :get-rmse="getRmse"
      :rmseList="rmseList"
    />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import TestComponent from "~/components/TestComponent.vue";

export default {
  name: "App",
  components: {
    TestComponent
  },
  data() {
    return {
      apiUrl: process.env.API_PROTOCOL + "://" + process.env.API_HOST,
      users: [],
      rmseList: []
    };
  },
  methods: {
    getUsers() {
      let self = this;
      axios.get(self.apiUrl + "/users").then(res => {
        self.users = res.data;
      });
    },
    getRmse(first) {
      let self = this;
      axios
        .get(self.apiUrl + "/comp_rmse", {
          params: {
            first: first
          }
        })
        .then(res => {
          self.rmseList = res.data.rmseList;
        });
    }
  },
  mounted: function() {
    this.getUsers();
  }
};
</script>


<style scoped>
h1 {
  color: #ccc;
}
</style>
