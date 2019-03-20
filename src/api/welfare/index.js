/**
 * 接口hahahaaha
 *
 */
import fetch from '@/utils/fetch'
// 获取列表
export const getListApi = (data) => {return fetch('POST', '/fwh/love/activity/find/myActivity', data)}
