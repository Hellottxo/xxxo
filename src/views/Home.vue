<template>
  <div class="home">
    <xo-input autoSize>
      <!-- <template v-slot:suffix>
        <i class="">123534</i>
      </template> -->
    </xo-input>
    <xo-select multiple tagline :options="options" width="180">
      <template v-slot="scope">
        <span>{{scope.data.value}}</span>
        <span>{{scope.data.label}}</span>
      </template>
    </xo-select>
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
  { value: '选项1', label: '黄金糕', disabled:true },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' },
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
      columns,
      data,
      options,
      tree,
      defaultExpandNode: [0,0,0],
      defaultHighlightNode: 7,
      nodeKey: 'id',
      input: '123'
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
    }
  }
};
</script>
