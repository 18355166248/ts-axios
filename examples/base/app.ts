import axios from '../../src'

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    bar: 'baz'
  }
})

const date = new Date()
axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, +'
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    name: 'jiang',
    age: null
  }
})

axios({
  method: 'get',
  url: '/base/get#12313',
  params: {
    name: '浪'
  }
})

axios({
  method: 'get',
  url: '/base/get?show=true',
  params: {
    name: '浪'
  }
})

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  },
  data: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  },
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([21, 22])

axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})
