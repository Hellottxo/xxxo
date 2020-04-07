## Card 卡片  


<ClientOnly>
  <xo-card/>
</ClientOnly>

## API
|参数|说明|类型|默认值|
|---|---|---|---|
|shadow|卡片阴影效果|`string`:`always` \| `hover`|-|
|maxHeight|卡片内容的最大高度,超出部分将会隐藏|`Number`|-|
|align|卡片对齐方向|`string`:`left` \| `right` \| `center`|`center`|
|hiddenText|隐藏栏的提示文字|`string`|-|
|visible-change|卡片的收起展开的回调事件|(collapse) => void|-|