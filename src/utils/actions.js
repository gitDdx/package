import Vue from 'vue'
// toast
export const toast = (type = 'success', text = '成功', width = '4rem') => {
  Vue.$vux.toast.show({
    width: width,
    text: text,
    type: type
  })
}
// alert
export const alert = (title = '成功', content, onShow, onHide) => {
  Vue.$vux.alert.show({
    title,
    content,
    onShow,
    onHide
  })
}

// confirm
export const confirm = (title = '成功', content, onConfirm, confirmText = '确定', cancelText = '取消') => {
  Vue.$vux.confirm.show({
    title,
    content,
    onConfirm,
    confirmText,
    cancelText
  })
}

export const cubeAlert = (_this, tip) => {
  _this.$createDialog({
    type: 'alert',
    title: '提示',
    content: tip
    // icon: 'cubeic-alert'
  }).show()
}
