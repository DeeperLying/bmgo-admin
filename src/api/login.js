import request from '@/utils/request/'
// import { ConstConfig } from '@/utils/'

export function loginByUsername(username, password, remember) {
  const data = {
    username,
    password,
    remember
  }
  return request({
    // url: ConstConfig.apiPath + '/Login.json',
    url: '/api/Login.json',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

