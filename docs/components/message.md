# Message 消息提示

<ClientOnly>
  <xo-message/>
</ClientOnly>

## API
|参数|说明|类型|默认值|
|---|---|---|---|
|type|按钮类型|`string`:`primary` \| `warning` \| `success` \| `text` \| `info` \| `danger`|-|
|message|提示内容|`string`|-|
|duration|延迟关闭时间(ms)|`number`|`3000`|
|showClose|是否支持手动关闭|`bool`|`false`|
|top|自定义距离窗口顶部的距离|`number`|`20`|
