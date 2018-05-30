<template>
  <div>
    <mt-button @click="geteditor()" type="danger">获取</mt-button>
    <!--<script id="editor" type="text/plain" style="width:1024px;height:500px;"></script>-->
  </div>
</template>
<script>
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'
const UE = require('UE');// eslint-disable-line
export default {
  name: 'editorView',
  data: () => (
    {
      editor: null
    }
  ),
  methods: {
    geteditor () {
      console.log(this.editor.getContent())
    }
  },
  mounted () {
    this.editor = UE.getEditor('editor')
  },
  destroyed () {
    this.editor.destroy()
  }
}
</script>
<style scoped>
 </style>
