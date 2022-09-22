import { httpGet } from './request';

// 获取聊天记录
export function getChattingRecords() {
  return httpGet('/api/informationInfo',{})
}

// 获取聊天列表
export function getList() {
  return httpGet('/api/informationList',{})
}

// 获取通讯列表
export function getAddressBook() {
  return httpGet('/api/addressBook',{})
}