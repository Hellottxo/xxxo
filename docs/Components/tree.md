# Tree 树形控件

<ClientOnly>
  <doc-tree/>
</ClientOnly>

## API
|参数|说明|类型|默认值|
|---|---|---|---|
|data|tree数据数组|`object[]`| |
|defaultSelected|默认选中树节点|`string` \| `number`|-|
|defaultExpand|默认展开|`array`|-|
|defaultExpandAll|默认展开所有，优先级高于defaultExpand|`boolean`|`false`|
|nodeKey|指定节点的key字段，必传|`string`| |
|childrenKey|指定子节点字段|`string`|`children`|
|nodeClick|点击节点触发事件|`Function(node: {id: '', label: '', nodeKey: ''})`|-|
