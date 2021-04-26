const net = require('net');

class Request {
  constructor(options) {
    this.method = options.method || 'GET';
    this.host = options.host;
    this.port = options.port || 80;
    this.path = options.path || '/';
    this.body = options.body || {};
    this.headers = options.headers || {};
    if(!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    if(this.headers['Content-Type'] === 'application/json')
      this.bodyText = JSON.stringify(this.body);
    else if(this.headers['Content-Type'] === 'application/x-www-form-urlencoded')
      // Object.keys 取对象的键名返回一个数组，如果对象是数组的话，返回index数组
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}` ).join('&');

    this.headers['Content-Length'] = this.bodyText.length;
  }

  send(){
    return new Promise((resolve, reject) => {
      // .....
    })
  }
}

void async function (){
  // 在使用立即执行的函数表达式时，可以利用 void 运算符让 JavaScript 引擎把一个function关键字识别成函数表达式而不是函数声明（语句）
  // （function(){}）是表达式，function(){}不是，所以前面需要用void或者+ ~ - ！或者括号，转为表达式。
  let request = new Request({
    method: 'POST',
    host: '127.0.0.1',
    port: '8088',
    path: '/',
    headers: {
      ['X-Foo2']: 'customed'
    },
    body: {
      name: 'winter'
    }
  });

  let response = await request.send();

  console.log(response);
}