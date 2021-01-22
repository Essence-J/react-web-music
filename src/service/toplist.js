import request from './request'

export function getTopListInfo() {
  return request({
    url: '/toplist'
  })
}

export function getTopListDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}