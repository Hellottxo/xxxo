<template>
  <div
    class="xo-table"
    :style="{maxHeight: `${maxHeight}px`}"
    :class="{
      'xo-table-stripe': stripe,
      'xo-table-border': bordered
    }"
  >
    <template v-if="showHeader">
      <table-header :columns="columns" ref="thead" :isScroll="isScroll"/>
    </template>
    <table-body
      :maxHeight="bodyMaxHeight"
      :columns="columns"
      :dataSource="dataSource"
      :rowKey="rowKey"
      :showHeader="showHeader"
      ref="tbody"
    />
  </div>
</template>

<script>
import tableHeader from "./table-header";
import tableBody from "./table-body";

export default {
  name: "xoTable",
  data() {
    return {
      bodyMaxHeight: undefined,
      isScroll: false
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: "key"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    maxHeight: Number,
    bordered: Boolean,
    stripe: Boolean
  },
  components: {
    tableHeader,
    tableBody
  },
  mounted() {
    if (this.maxHeight) {
      const { $el } = this.$refs.tbody;
      this.bodyMaxHeight = this.maxHeight - this.$refs.thead.$el.offsetHeight;
      this.$nextTick(() => {
        this.isScroll = $el.scrollHeight > $el.offsetHeight;
      });
    }
  }
};
</script>
