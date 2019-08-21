<template>
  <div class="xo-table-header">
    <table
      :class="{
        'border-top': border,
        'border-left': border,
        'border-right': border
      }"
    >
      <colgroup>
        <col width="40" v-if="expand">
        <col v-for="config in columns" :key="config.key" :width="config.width ? config.width : ''">
      </colgroup>
      <thead>
        <tr>
          <th :class="{'border-right': verticalLine}" v-if="expand"></th>
          <th v-for="config in columns" :key="config.key" :class="{'border-right': verticalLine}">
            <div
              class="cell"
              :style="{
              'justify-content': config.align,
              'color': config.color
              }"
            >{{ config.label }}</div>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
    props: {
        columns: Array,
        border: {
        type: Boolean,
        default: true,
        },
        expand: {
        type: Boolean,
        default: false,
        },
        columns: Array,
        verticalLine: {
        type: Boolean,
        default: false,
        },
    }
}
</script>
