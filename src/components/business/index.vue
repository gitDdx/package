<template>
  <div>
    <form action="" class="form">
      <input type="text" placeholder="机构名称(必填)">
      <input type="text" placeholder="负责人姓名(必填)">
      <input type="text" placeholder="三证合一代码(必填)">
      <cube-upload
        ref="upload"
        v-model="files"
        :action="action"
        @files-added="addedHandler"
        @file-error="errHandler"
        @file-success="successHandler"
        @file-removed="removeHandler">
        <div class="clear-fix">
          <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
          <cube-upload-btn :multiple="false">
            <div v-show="uploadIcon">
              <img class="upload_icon" src="./images/upload_icon.png" alt="上传">
              <p>点击上传营业执照</p>
            </div>
          </cube-upload-btn>
        </div>
      </cube-upload>
      <textarea placeholder="经营范围(必填)"></textarea>
      <button class="submit">提交</button>
    </form>
  </div>
</template>
<script>
import { toast } from '@/utils/actions'
export default {
  data () {
    return {
      uploadIcon: true,
      action: '//jsonplaceholder.typicode.com/photos/',
      files: []
    }
  },
  created () {
    let str = '<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=c07984ct1kl" allowFullScreen="true"></iframe>'
    let s = str.split('src="')[1]
    let t = s.split('" allowFullScreen')[0]
    // console.log(t)
  },
  methods: {
    addedHandler () {  // 过滤图片类型、大小
      let file = this.files
      file && this.$refs.upload.removeFile(file)
      this.uploadIcon = false
    },
    errHandler (file) {
      // toast('error', '图片不能超过10M')
      // toast('warn', '请上传福利券配图')
      // toast('success', '提交成功，请等待审核', '5.5rem')
      // const msg = file.response.message
      this.$createToast({
        type: '提示',
        txt: '上传失败',
        time: 1000
      }).show()
    },
    removeHandler () {
      // toast('error', '图片不能超过10M')
      this.uploadIcon = true
    },
    successHandler () {
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../common/less/base.less";
  .form{
    padding:@59px @30px @100px;
    background-color: #fff;
    box-sizing: border-box;
    input{
      width:100%;
      height:@72px;
      font-size:@26px;
      color:#aaaaaa;
      background:#f8f8f8;
      border-radius:@6px;
      padding-left: @24px;
      margin-bottom: @26px;
    }
    textarea{
      width:100%;
      height:@140px;
      background:#f8f8f8;
      border-radius:@6px;
      padding-left: @24px;
      margin-bottom: @26px;
      border:none;
      outline: none;
      &::-webkit-input-placeholder{
        font-size:@26px;
        color:#aaa;
        padding-top: @23px;
      }
    }
    button{
      width:100%;
      height:@80px;
      text-align: center;
      background:#f95644;
      border-radius:@6px;
      font-size:@30px;
      color:#ffffff;
      border: 1px solid #f95644;
    }
    .submit{
      margin-top: @34px;
    }
  }
  // 上传图片
.cube-upload{
  display: flex;
  background:#f8f8f8;
  border-radius:@6px;
  width:100%;
  height:@320px;
  margin-bottom: @26px;
  .clear-fix{
    width:100%;
    height:100%;
    .cube-upload-btn{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      width:100%;
      height:100%;
      div{
        .upload_icon{
          width:@80px;
          height:@80px;
          margin-bottom: @30px;
        }
      }
    }
  }
}
/deep/ .cube-upload-file{width:100%;height:100%;}
/deep/ .cube-upload-file-def{width:100%;height:100%;}
</style>
