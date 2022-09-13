/*
 * @Author      : Mr.bin
 * @Date        : 2022-07-27 10:00:25
 * @LastEditTime: 2022-07-27 10:00:27
 * @Description : 封装axios
 */
import axios from 'axios'

const instance = axios.create({
  // baseURL:
  //   '', // 本地
  baseURL: '', // 云端
  timeout: 10000
})

export { instance }
