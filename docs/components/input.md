# Input 输入框
<ClientOnly>
  <doc-input/>
</ClientOnly>

## API
|参数|说明|类型|默认值|
|---|---|---|---|
|type|input框类型，默认为input，可选 `textarea` `password` |`string`|-|
|clearable|是否可清空|`boolean`|`false`|
|placeholder|默认文字|`string`|`请输入`|
|autoSize|是否自动计算高度，type为`textarea`时有效|`boolean`|`false`|
|wordLimit|动态展示输入长度，默认输入最长为10位|`boolean`|`false`|
|maxLength|输入最大长度|`number`|`10`|
|wordLimit|动态展示输入长度，默认输入最长为10位|`boolean`|`false`|
|focus|焦点集中时的回调函数|`Function()`| |
|blur|焦点取消时的回调函数|`Function()`| |
|change|输入值改变时的回调函数|`Function(val)`| |