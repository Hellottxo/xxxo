<template>
  <xo-card shadow="hover" :max-height="500" align="left">
    <template v-slot:header>
      <div class="title">icon图标</div>
    </template>
    <div>
      <ul class="icon_lists dib-box">
        <li v-for="item in ICON" @click="() => getIcon(item)">
          <xo-icon :mode="item" :key="item"/>
          <div class="name">{{item}}</div>
        </li>
      </ul>
    </div>
  </xo-card>
</template>

<script>
import Vue from 'vue';
import xoIcon from "../../../src/components/icon";
import xoCard from "../../../src/components/card";
import Message from "../../../src/components/message";
import "../../../src/styles/index.less";
Vue.prototype.$message = Message;

const ICON = [
  "arrow-down",
  "arrow-right",
  "add",
  "add-account",
  "category",
  "column",
  "camera",
  "clock",
  "attachent",
  "arrow-up",
  "arrow-lift",
  "calendar",
  "browse",
  "ashbin",
  "all",
  "close",
  "bad",
  "ascending",
  "confirm",
  "cry",
  "conditions",
  "component",
  "comments",
  "collection",
  "code",
  "download",
  "discount",
  "double-arro-right",
  "coupons",
  "cut",
  "double-arrow-left",
  "ellipsis",
  "earth",
  "falling",
  "good",
  "editor",
  "help",
  "hot",
  "email",
  "descending",
  "data",
  "favorites",
  "leftbutton",
  "move",
  "leftarrow",
  "map",
  "pic",
  "Notvisible",
  "order",
  "prompt",
  "loading",
  "reduce",
  "pin",
  "remind",
  "play",
  "return",
  "process",
  "Rightarrow",
  "rising",
  "password",
  "QRcode",
  "reeor",
  "smile",
  "share",
  "suspended",
  "stop",
  "template",
  "seleted",
  "sorting",
  "Top",
  "success",
  "logistic-logo",
  "survey",
  "shoes",
  "Exportservices",
  "set",
  "Rightbutton",
  "warning",
  "topsales",
  "sound-filling",
  "Tradingvolume",
  "viewgallery",
  "search",
  "save",
  "viewlarger",
  "suggest",
  "upload",
  "tool",
  "viewlist",
  "switch",
  "text",
  "Daytimemode",
  "unlock",
  "VIP",
  "exchangerate",
  "feed-logo",
  "exchangerate1",
  "account1",
  "add-fill",
  "ashbin-fill",
  "all-fill",
  "bad-fill",
  "calendar-fill",
  "ali-clould-fill",
  "collection-fill",
  "cry-fill",
  "discount-fill",
  "email-fill",
  "favorites-fill",
  "good-fill",
  "home-fill",
  "help1",
  "feed-logo-fill",
  "hot-fill",
  "insurance-fill",
  "leftbutton-fill",
  "map1",
  "password1",
  "pin-fill",
  "play-fill",
  "phone1",
  "prompt-fill",
  "product1",
  "reduce-fill",
  "reeor-fill",
  "resonserate-fill",
  "remind-fill",
  "Rightbutton-fill",
  "smile-fill",
  "sound-filling-fill",
  "sound-Mute1",
  "suspended-fill",
  "success-fill",
  "Top-fill",
  "warning-fill",
  "set1"
];

export default {
  data() {
    return {
      ICON
    };
  },
  components: {
    xoCard,
    xoIcon
  },
  methods: {
    getIcon(text) {
      const temp = document.createElement("input");
      const node = `<xo-icon mode="${text}" />`;
      this.$message({ type: "success", message: `${node} 已复制至剪切板` });
      temp.setAttribute("value", node);
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
  }
};
</script>

<style scoped>
.title {
  font-weight: bold;
}
.icon_lists {
  width: 100% !important;
  overflow: hidden;
  *zoom: 1;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
}

.icon_lists li {
  width: 80px;
  margin: 10px;
  text-align: center;
  list-style: none !important;
  font-size: 14px;
  cursor: pointer;
}

.icon_lists li .code-name {
  line-height: 1.2;
}

.icon_lists .icon {
  display: block;
  height: 30px;
  line-height: 30px;
  font-size: 42px;
  margin: 10px auto;
  color: #333;
  transition: font-size 0.25s linear, width 0.25s linear;
}

.icon_lists .icon:hover {
  color: #fbb9b5;
  font-size: 62px;
}

.icon_lists .svg-icon {
  /* 通过设置 font-size 来改变图标大小 */
  width: 1em;
  /* 图标和文字相邻时，垂直对齐 */
  vertical-align: -0.15em;
  /* 通过设置 color 来改变 SVG 的颜色/fill */
  fill: currentColor;
  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
        normalize.css 中也包含这行 */
  overflow: hidden;
}
</style>
