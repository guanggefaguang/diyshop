const mode = 1; //0 生产  1 测试

const prod = {
  api: "http://120.24.175.12:8389/localdata",
  uploadUrl: "http://120.24.175.12:8389/localdata"
}

const test = {
  api: "http://baidu.com",
  uploadUrl: "http://baidu.com"
}

const dev = {
  api: "http://baidu.com",
  uploadUrl: "http://baidu.com"
}

const dir = {
  ...(mode == 0 ? prod : (mode == 1 ? test : dev))
}

module.exports = dir