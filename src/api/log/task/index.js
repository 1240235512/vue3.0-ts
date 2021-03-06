/*
 * @Description: 定时任务日志
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-28 16:25:18
 * @LastEditors: gumingchen
 * @LastEditTime: 2021-05-28 22:06:57
 */
import service from '@/utils/request'

/**
 * @description: 分页列表
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function pageApi(params) {
  return service({
    url: '/quartz/schedule/log/page',
    method: 'get',
    params: params
  })
}

/**
 * @description: 清表
 * @param {*} params
 * @return {*}
 * @author: gumingchen
 */
export function truncateApi() {
  return service({
    url: '/quartz/schedule/log/truncate',
    method: 'post'
  })
}
