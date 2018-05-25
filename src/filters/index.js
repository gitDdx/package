/**
 * Created by Windows10 on 2017/11/28.
 */
import moment from 'moment'
moment.locale('zh-cn')

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(lottery)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:lottery.S")      ==> 2006-7-2 8:9:4.18
/* eslint-disable no-extend-native */
Date.prototype.Format = function (fmt) { // author: meizz
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

// 日期格式化过滤器
export const dateFilter = (date, pattern = 'YYYY-MM-DD HH:mm') => date ? moment(date).format(pattern) : '无'
// 日期多少之前
export const dateFromNow = (date) => {
  if (new Date().getTime() - new Date(date).getTime() > 48 * 3600) {
    return dateFilter(date)
  } else {
    return moment(date).fromNow()
  }
}
// 一周前
export const oneWeek = () => moment().add(-1, 'week').format('YYYY-MM-DD')
// 牵手状态
export const handFilter = (data) => ['待接受', '牵线中', '待确认', '牵手成功', '牵手失败'][data] || '未知'
// 文件大小
export const calcFileSizeFilter = (bytes) => {
  let a = bytes / 1024
  if (a < 1024) {
    return `${a.toFixed(2)}KB`
  } else {
    a /= 1024
    return `${a.toFixed(2)}MB`
  }
}
export default {
  dateFilter,
  dateFromNow,
  oneWeek,
  handFilter,
  calcFileSizeFilter
}
