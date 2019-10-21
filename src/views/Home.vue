<template>
  <div class="home">
    <xo-button @click="collapse=!collapse" type="primary">展开</xo-button>
    <xo-menu default-active="4" :collapse="collapse" mode="horizontal">
      <xo-sub-menu title="主页" index="5">
        <template v-slot:title>
          <span>
            <i class="icon icon-smile"></i>
          </span>
          <span>主页</span>
        </template>
        <xo-menu-item index="7">主页2</xo-menu-item>
        <xo-menu-item index="8">主页3</xo-menu-item>
        <xo-menu-item index="9">主页4</xo-menu-item>
      </xo-sub-menu>
      <xo-menu-item index="1" disabled>
        <span><i class="icon icon-smile"></i></span>
        <span>我的订单</span>
      </xo-menu-item>
      <xo-menu-item index="3">
        <span><i class="icon icon-smile"></i></span>
        <span>我的收藏</span>
      </xo-menu-item>
      <xo-menu-item index="4">
        <span><i class="icon icon-smile"></i></span>
        <span>购物车</span>
      </xo-menu-item>
      <xo-menu-item index="10">
        <span><i class="icon icon-smile"></i></span>
        <span>投诉</span>
      </xo-menu-item>
    </xo-menu>
    <xo-input autoSize>
      <!-- <template v-slot:suffix>
        <i class="">123534</i>
      </template> -->
    </xo-input>
    <xo-rate :default-star="1" notice mode="smile" v-model="index"></xo-rate>
    <xo-select
    multiple
    selectall
    :options="options"
    disabled
    width="180">
      <template v-slot:item="scope">
        <span>{{scope.data.value}}</span>
        <span>{{scope.data.label}}</span>
      </template>
    </xo-select>
    <xo-time-picker disabled></xo-time-picker>
    <xo-date-picker clearable disabled></xo-date-picker>
    <xo-tree
    :data="tree"
    :default-expand-node="defaultExpandNode"
    :node-key="nodeKey"
    :default-highligth-node="defaultHighlightNode"
    @node-click="nodeClick"></xo-tree>
    <xo-table :columns="columns" :data="data" :expand="true" :highlight-row="true">
      <!-- <template v-slot="scope">
        <button>{{scope.data.name}}</button>
      </template> -->
      <template v-slot:append="scope">
        <div>
          姓名：{{scope.data.name}}
        </div>
      </template>
    </xo-table>
    <!-- <div v-clickoutside="handleClick">xo</div>ss -->
  </div>
</template>

<script>
// @ is an alias to /src

const columns = [
  {
    label: '姓名', key: 'name', width: 200
  },
  {
    label: '年龄', key: 'age', width: 200, arrowPosition: true
  },
  { label: '详细', key: 'detail', width: 200 },
  { label: 'a', key: 'a', width: 200 },
  { label: 'b', key: 'b', width: 200 },
  { label: 'c', key: 'c', width: 200 },
  {
    label: '地址', key: 'address', width: 200
  },
];

const data = [
  {
    name: '王小明',
    a: 1,
    b: 2,
    c: 3,
    age: 18,
    address: '北京市朝阳区芍药居',
    rowExpand: true,
    detail: '北京市朝阳区芍药居',
    children: [
      {
        name: '张小刚', a: 1, b: 2, c: 3, age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居',
      },
      {
        name: '李小红', a: 1, b: 2, c: 3, age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居',
      },
      {
        name: '周小伟', a: 1, b: 2, c: 3, age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居',
      },
    ],
  },
  {
    name: '张小刚', a: 1, b: 2, c: 3, age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居',
  },
  {
    name: '李小红', a: 1, b: 2, c: 3, age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '周小伟', a: 1, b: 2, c: 3, age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '张小刚', a: 1, b: 2, c: 3, age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居',
  },
  {
    name: '李小红', a: 1, b: 2, c: 3, age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '周小伟', a: 1, b: 2, c: 3, age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '张小刚', a: 1, b: 2, c: 3, age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居',
  },
  {
    name: '李小红', a: 1, b: 2, c: 3, age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '周小伟', a: 1, b: 2, c: 3, age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居',
  },
];

const options = [
  { value: '1', label: '黄金糕', disabled:true },
  { value: '2', label: '双皮奶' },
  { value: '3', label: '蚵仔煎' },
  { value: '4', label: '龙须面' },
  { value: '5', label: '北京烤鸭' },
  { value: '6', label: '黄金糕', disabled:true },
  { value: '7', label: '双皮奶' },
  { value: '8', label: '蚵仔煎' },
  { value: '9', label: '龙须面' },
  { value: '10', label: '北京烤鸭' },
  { value: '11', label: '黄金糕', disabled:true },
  { value: '12', label: '双皮奶' },
  { value: '13', label: '蚵仔煎' },
  { value: '14', label: '龙须面' },
  { value: '15', label: '北京烤鸭' },
];

const tree = [{
  id: 0,
  label: '一级 1',
  children: [{
    id: 4,
    label: '二级 1-1',
    children: [{
      id: 7,
      label: '三级 1-1-1'
    }]
  }]
}, {
  id: 1,
  label: '一级 2',
  children: [{
    id: 3,
    label: '二级 2-1',
    children: [{
      id:5,
      label: '三级 2-1-1'
    }]
  }]
}]

export default {
  name: 'home',
  data() {
    return {
      collapse: false,
      columns,
      data,
      options,
      tree,
      defaultExpandNode: [0,0,0],
      defaultHighlightNode: 7,
      nodeKey: 'id',
      input: '123',
      index: ''
    };
  },
  watch: {
    input() {
      console.log(this.input)
    }
  },
  methods: {
    nodeClick(obj) {
      console.log(obj.id);
    },
    handleClick() {
      console.log('hhhh')
    }
  }
};
</script>

<style lang="less" scoped>
.xo-rate {
  padding: 10px 0;
}
</style>
