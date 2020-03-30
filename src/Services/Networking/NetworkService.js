/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable prefer-promise-reject-errors */
import { Platform } from 'react-native'
import pinch from 'react-native-pinch-new'
import axios from 'axios'
import reactotron from 'reactotron-react-native'


export const GET = (endpoint, token = null, search = false) => {
  if (search) {
    return requestWithAxios('GET', endpoint, null, token)
  }
  return requestWithPinch('GET', endpoint, null, token)
}

export const POST = (endpoint, params, token = {}, headers) => {
  if (params && 'firebase' in params) { return requestWithAxios('POST', endpoint, params, token) }
  return requestWithAxios('POST', endpoint, params || null, token, headers)
}

export const PUT = (endpoint, params, token = null) => {
  if ('firebase' in params) {
    return requestWithAxios('PUT', endpoint, params)
  }
  return requestWithPinch('PUT', endpoint, JSON.stringify(params), token)
}

export const DELETE = (endpoint, params, token = null) => {
  if ('firebase' in params) {
    return requestWithAxios('DELETE', endpoint, params)
  }
  return requestWithPinch('DELETE', endpoint, JSON.stringify(params), token)
}

const requestWithPinch = (method, url, params, { basic_token, bearer_token }) => new Promise((resolve, reject) => {
  const options = {
    method,
    url,
    timeoutInterval: 10000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    sslPinning: Platform.OS === 'android' ? { cert: 'ssl_certificate' } : { certs: ['ssl_certificate'] },
  }
  if (params) {
    options.body = params
  }
  if (bearer_token) {
    options.headers.Authorization = `Bearer ${token}`
  }
  if (basic_token) {
    options.headers.Authorization = `Basic ${token}`
  }

  pinch.fetch(url, options).then((response) => {
    reactotron.log('Pinch resp: ', response)
    resolve({ statusCode: response.status, body: JSON.parse(response.bodyString), statusText: response.statusText })
  }).catch((error) => {
    reactotron.log('Pinch err: ', error)
    if (error.response !== undefined) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({ statusCode: error.response.status, body: JSON.parse(error.response.bodyString), statusText: error.response.statusText })
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({ statusCode: 999, body: { message: 'Cannot connect to server. Please check your internet connection and retry' } })
    }
  })
})

const requestWithAxios = (method, url, params, { basic_token, bearer_token }, headers) => new Promise((resolve, reject) => {
  const options = {
    method,
    url,
  }
  if (params) { options.data = JSON.stringify(params) }
  if (headers) { options.headers = { ...headers } }
  if (bearer_token) { options.headers.Authorization = `Bearer ${bearer_token}` } else if (basic_token) { options.headers.Authorization = `Basic ${basic_token}` }
  reactotron.log('axios params: ', options)

  axios(options)
    .then((response) => {
      resolve({ statusCode: response.status, body: response.data })
    })
    .catch((error) => {
      if (error.response !== undefined) {
        resolve({ statusCode: error.response.status, body: error.response.data })
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ statusCode: 999, body: { message: 'Cannot connect to server. Please check your internet connection and retry' } })
      }
    })
})
