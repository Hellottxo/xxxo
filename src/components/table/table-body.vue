<template>
  <div class="xo-table_wrap" :style="{maxHeight: `${maxHeight}px`}">
    <table cellpadding="0" cellspacing="0" border="0">
      <colgroup>
        <col v-for="c in columns" :key="c.key" :width="c.width || ''">
      </colgroup>
      <tbody>
        <tr v-for="d in dataSource" :key="d[rowKey]">
          <th v-for="c in columns" :key="c.key">
            <div
              class="xo-table-th"
              :style="{
                textAlign: c.align
              }"
            >{{d[c.key]}}</div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: []
    },
    dataSource: {
      type: Array,
      default: []
    },
    rowKey: {
      type: String,
      default: "key"
    },
    maxHeight: Number,
    showHeader: Boolean,
    bordered: Boolean
  }
};
</script>
