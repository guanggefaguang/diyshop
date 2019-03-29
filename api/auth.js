const request = require('./request.js')

const auth = {
  getposonal(params) {
    return request.ajax("get", "/q54", params)
  },
  login(parms) {
    return request.ajax("post",'/login',parms)
  }
}


module.exports = auth