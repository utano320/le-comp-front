<template>
 <div id="app">
    <h1>Kattsun</h1>

    <kattsun-component
      :strength="strength"
      :get-count="getCount"
      :st-count="stCount"
    />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import KattsunComponent from "~/components/KattsunComponent.vue";

export default {
  name: "App",
  components: {
    KattsunComponent
  },
  data() {
    return {
      apiUrl: process.env.API_PROTOCOL + "://" + process.env.API_HOST,
      strength: [
        "アレンジ",
        "回復志向",
        "規律性",
        "公平性",
        "慎重さ",
        "信念",
        "責任感",
        "達成欲",
        "目標志向",
        "活発性",
        "競争性",
        "コミュニケーション",
        "最上志向",
        "自我",
        "自己確信",
        "社交性",
        "指令性",
        "適応性",
        "運命思考",
        "成長促進",
        "共感性",
        "調和性",
        "包含",
        "個別化",
        "ポジティブ",
        "親密性",
        "学習欲",
        "原点思考",
        "収集心",
        "戦略性",
        "着想",
        "内省",
        "分析思考",
        "未来志向",
      ],
      stCount: []
        };
  },
  methods: {

    getCount(name) {
      let self = this;
      axios
        .get(self.apiUrl + "/strength", {
          params: {
            name: name
          }
        })
        .then(res => {
          self.stCount = res.data.count;
        });
    }
  }
};
</script>

<style scoped>
h1 {
  color: tomato;
}
</style>
