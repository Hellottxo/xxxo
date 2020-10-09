<template>
  <div class="xo-table_wrap">
    <table cellpadding="0" cellspacing="0" border="0">
      <colgroup>
        <col v-for="c in columns" :key="c.key" :width="c.width || ''">
        <col v-if="isScroll" width="15">
      </colgroup>
      <thead>
        <tr>
          <th v-for="c in columns" :key="c.key">
            <div
              class="xo-table-th"
              :style="{
                textAlign: c.align
              }"
            >{{c.label}}</div>
          </th>
          <th v-if="isScroll"/>
        </tr>
      </thead>
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
    isScroll: Boolean,
  }
};
</script>
