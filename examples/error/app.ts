import axios from '../../src'

axios({
  method: 'get',
  url: '/error/get',
  params: {
    foo: ['bar', 'baz']
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

axios({
  method: 'get',
  url: '/error/get1',
  params: {
    foo: ['bar', 'baz']
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000,
  params: {
    a: 1
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/timeout',
    params: {
      a: 1
    }
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}, 5000)
