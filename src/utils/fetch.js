//依赖于axios对私有ajax进行修改
import Vue from 'vue'
import axios from 'axios'
// axios 配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default (method = 'POST', url, query = {}) => { // get方法---params  post方法---data
  const options = {method, url}
  if (method.toLocaleUpperCase() === 'POST') {
    options.data = query
  } else {
    options.params = query
  }
  return new Promise((resolve,reject)=>{
    const _instance = axios.create({
      timeout: 2000
    })
    _instance(options).then(response=>{
      // Vue.$vux.toast.show({
      //   text: response,
      //   type: 'warn',
      //   width: '10em'
      // })
      resolve(response.data);
    }).catch(err=>{
      // Vue.$vux.toast.show({
      //   text: err.code,
      //   type: 'warn',
      //   width: '10em'
      // })
      reject(err);
    })
  })
}
