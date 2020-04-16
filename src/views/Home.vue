<template>
  <div class="home">
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>卡片</div>
      </template>
      <div class="content-wrap">
        <xo-card :hiddenText="'xxx'" @visibleChange="showVisible">
          <div>基础卡片</div>
          <template v-slot:footer>123</template>
        </xo-card>
      </div>
      <div class="content-wrap">
        <xo-card>
          <template v-slot:header>
            <div>标题</div>
          </template>
          <div>带标题的卡片</div>
        </xo-card>
      </div>
      <div class="content-wrap">
        <xo-card align="left">
          <template v-slot:header>
            <div>左侧对齐卡片</div>
          </template>
          <div>这是一张左侧对齐卡片</div>
        </xo-card>
      </div>
      <div class="content-wrap">
        <xo-card shadow="hover">鼠标悬浮时阴影特效的卡片</xo-card>
      </div>
      <div class="content-wrap">
        <xo-card shadow="always">始终有阴影的卡片</xo-card>
      </div>
      <div class="content-wrap">
        <xo-card :max-height="30" align="left" shadow="hover">
          <template v-slot:header>
            <div>可收起的卡片</div>
          </template>
          <div>
            <div>使用max-height属性固定卡片主体高度</div>
            <div>当卡片主体高度大于所设定max-height时，内容被收起，自动展示展开按钮</div>
            <div>本卡片所设置的max-height为30，超过30时，内容自动收起</div>
          </div>
        </xo-card>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>基础按钮</div>
      </template>
      <div class="content-wrap">
        <xo-button @click="collapse=!collapse">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="primary">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="warning">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="success">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="text">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="info">你好</xo-button>
        <xo-button @click="collapse=!collapse" type="danger">你好</xo-button>
      </div>
      <div class="content-wrap">
        <xo-button @click="collapse=!collapse" circle icon="search"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="clock" type="primary"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="cry" type="warning"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="collection" type="success"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="hot" type="info"></xo-button>
        <xo-button @click="collapse=!collapse" circle icon="VIP" type="danger"></xo-button>
      </div>
      <div class="content-wrap">
        <xo-button @click="collapse=!collapse" round>你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="primary">你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="warning">你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="success">你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="info">你好</xo-button>
        <xo-button @click="collapse=!collapse" round type="danger">你好</xo-button>
      </div>
      <div class="content-wrap">
        <xo-button @click="collapse=!collapse" disabled>你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="primary">你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="warning">你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="success">你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="info">你好</xo-button>
        <xo-button @click="collapse=!collapse" disabled type="danger">你好</xo-button>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>提示消息</div>
      </template>
      <div class="content-wrap">
        <xo-button @click="handleClick">提示消息</xo-button>
        <xo-button @click="handleClick('primary')" type="primary">提示消息</xo-button>
        <xo-button @click="handleClick('warning')" type="warning">提示消息</xo-button>
        <xo-button @click="handleClick('success')" type="success">提示消息</xo-button>
        <xo-button @click="handleClick('info')" type="info">提示消息</xo-button>
        <xo-button @click="handleClick('danger')" type="danger">提示消息</xo-button>
      </div>
      <div class="content-wrap">
        <xo-button @click="handleCloseClick">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('primary')" type="primary">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('warning')" type="warning">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('success')" type="success">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('info')" type="info">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('danger')" type="danger">可关闭消息</xo-button>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>评分</div>
      </template>
      <div class="content-wrap">
        <xo-rate></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="good" rate :defaultStar="1"></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="favorites" rate :defaultStar="2" :baseNumber="100"></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="smile" rate :defaultStar="3" :baseNumber="200"></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="Daytimemode" rate :defaultStar="4" :baseNumber="3"></xo-rate>
      </div>
      <div class="content-wrap">
        <xo-rate mode="hot" readonly rate :defaultStar="4" :baseNumber="3"></xo-rate>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>树形控件</div>
      </template>
      <div class="content-wrap">
        <xo-tree
          :data="treeData"
          node-key="id"
          default-selected="6"
          :default-expand="[0, 3]"
          @node-click="handleNodeClick"
        ></xo-tree>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>输入框</div>
      </template>
      <div class="content-wrap">
        <xo-input></xo-input>
        <xo-input disable placeholder="禁止输入"></xo-input>
        <xo-input clearable placeholder="可清空"></xo-input>
        <xo-input type="password" placeholder="请输入密码"></xo-input>
        <xo-input type="textarea" width="300" wordLimit :maxLength="30"></xo-input>
        <xo-input type="textarea" width="300" autoSize></xo-input>
        <xo-input>
          <template v-slot:suffix>
            <i class="iconfont icon-search"></i>
          </template>
        </xo-input>
        <xo-input>
          <template v-slot:prefix>
            <i class="iconfont icon-calendar"></i>
          </template>
        </xo-input>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>选择器</div>
      </template>
      <div class="content-wrap">
        <xo-select clearable v-model="selectData">
          <template v-for="item in optionsData">
            <xo-options :options="item" :key="item.value" :value="item.value">{{item.label}}</xo-options>
          </template>
        </xo-select>
        <xo-select multiple :width="200">
          <template v-for="item in optionsData">
            <xo-options :options="item" :key="item.value" :value="item.value">{{item.label}}</xo-options>
          </template>
        </xo-select>
        <xo-select multiple :width="200" collapse @change="selectChange">
          <template v-for="item in optionsData">
            <xo-options :options="item" :key="item.value">{{item.label}}</xo-options>
          </template>
        </xo-select>
        <xo-select
          multiple
          :width="200"
          collapse
          filter
          @change="selectChange"
          @visibleChange="visibleChange"
        >
          <xo-options v-for="item in optionsData" :options="item" :key="item.value">{{item.label}}</xo-options>
        </xo-select>
        <xo-select
          multiple
          :width="200"
          collapse
          filter
          @change="selectChange"
          @visibleChange="visibleChange"
        ></xo-select>
      </div>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>时间选择器</div>
      </template>
      <xo-time-picker></xo-time-picker>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>表格</div>
      </template>
      <xo-table
        :width="500"
        :height="300"
        :columns="columns"
        :data="tableData"
        :verticalLine="true"
        :stripe="true"
        :highlightRow="true"
        @rowClick="rowClick"
      />
    </xo-card>
  </div>
</template>

<script>
const TREE_DATA = [
  {
    id: 0,
    label: "一级1",
    children: [
      { id: 1, label: "二级" },
      { id: 2, label: "二级" },
      {
        id: 3,
        label: "二级",
        children: [{ id: 4, label: "三级" }, { id: 6, label: "三级" }]
      }
    ]
  },
  {
    id: 5,
    label: "一级2",
    children: [
      { id: 7, label: "二级" },
      { id: 8, label: "二级" },
      {
        id: 9,
        label: "二级",
        children: [{ id: 10, label: "三级" }, { id: 11, label: "三级" }]
      }
    ]
  }
];

const OPTIONS_DATA = [
  {
    value: "beijing",
    label: "北京市"
  },
  {
    value: "shanghai",
    label: "上海市"
  },
  {
    value: "shenzhen",
    label: "深圳市"
  },
  {
    value: "hangzhou",
    label: "杭州市"
  },
  {
    value: "nanjing",
    label: "南京市"
  },
  {
    value: "chongqing",
    label: "重庆市"
  }
];

const COLUMNS = [
  {
    label: "Name",
    key: "name",
    width: 100
  },
  {
    label: "Age",
    key: "age",
    width: 200
  },
  {
    label: "Address",
    key: "address",
    width: 300,
    fixed: "start"
  },
  {
    label: "Sex",
    key: "Sex",
    width: 100,
    fixed: "start"
  },
  {
    label: "Attribute",
    key: "Attribute",
    width: 100
  }
];

const TABLE_DATA = [
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
    children: [{ name: "xo" }],
    arrowPosition: "address"
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    rowExpand: "123"
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02"
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04"
  },
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
    children: [{ name: "xo" }],
    arrowPosition: "address"
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    rowExpand: "123"
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02"
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04"
  }
];

export default {
  name: "home",
  data() {
    return {
      collapse: false,
      treeData: TREE_DATA,
      optionsData: OPTIONS_DATA,
      columns: COLUMNS,
      tableData: TABLE_DATA,
      selectData: ["beijing"]
    };
  },
  methods: {
    handleClick(val) {
      if (val) {
        this.$message({
          type: val,
          message: "这是一个会停顿3s的消息"
        });
        return;
      }
      this.$message({ message: "这是一个会停顿3s的消息" });
    },
    handleCloseClick(val) {
      if (val) {
        this.$message({
          type: val,
          showClose: true,
          message: "这是一个可以手动关闭的消息"
        });
        return;
      }
      this.$message({
        message: "这是一个可以手动关闭的消息",
        showClose: true
      });
    },
    handleNodeClick(item) {
      console.log(item);
    },
    selectChange(val) {
      const arr = val.map(e => e.label);
      console.log(`选择了${arr.join(",")}`);
    },
    visibleChange(val) {
      console.log(`下拉框状态：${val}`);
    },
    rowClick(row) {
      console.log(`点击了行${row}`);
    },
    showVisible(flag) {
      console.log(1)
      console.log(flag)
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  padding: 10px 0;
  & > div {
    margin: 20px;
    max-width: 1000px;
    .xo-button {
      margin: 0 5px;
    }
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
    width: 100px;
    margin: 10px;
    text-align: center;
    list-style: none !important;
    font-size: 14px;
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
    color: @blue;
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

  .icon_lists li .name,
  .icon_lists li .code-name {
    color: #666;
  }
  .content-wrap {
    margin: 10px;
    & > .xo-input {
      display: flex;
      margin-bottom: 10px;
    }
  }
}
</style>
