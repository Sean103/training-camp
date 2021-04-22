// // 每一个函数是一个状态
// function state(input) //函数参数输入
// {
//   // 在函数中，可以自由地编写代码，处理每个状态逻辑
//   return next; //返回值作为下一个状态
// }
//
// /// 调用 ///
//
// while(input) {
//   // 获取输入
//   state = state(input); //把状态机的返回值作为下一个状态
// }

// console.log(stateMachine('abcabcabx'));
// function stateMachine(string) {
//   let state = start;
//   for(let c of string) {
//        state = state(c);
//   }
//   return state === end;
// }
//
// function start(c) {
//   if(c === 'a') {
//     return foundA;
//   }
//   return start
// }
//
// function foundA(c) {
//   if( c === 'b' ) {
//     return foundB;
//   }
//   return start(c); // reConsume
// }
//
// function foundB(c) {
//   if( c === 'c' ) {
//     return foundC;
//   }
//   return start(c);
// }
//
// function foundC(c) {
//   if( c === 'a' ) {
//     return foundA2;
//   }
//   return start(c);
// }
//
// function foundA2(c) {
//   if( c === 'b' ) {
//     return foundB2;
//   }
//   return start(c);
// }
//
// function foundB2(c) {
//   if( c === 'x' ) {
//     return end;
//   }
//   return foundB(c);
// }
//
// function end(c) {
//   return end;
// }

console.log(match('abababx'));
function match(string) {
  let state = start;
  for(let c of string) {
    state = state(c)
  }
  return state === end
}

function start(c) {
  if(c === 'a') {
    return foundA;
  }
  return start
}

function foundA(c) {
  if( c === 'b' ) {
    return foundB;
  }
  return start(c); // reConsume
}

function foundB(c) {
  if( c === 'a' ) {
    return foundA2;
  }
  return start(c);
}

function foundA2(c) {
  if( c === 'b' ) {
    return foundB2;
  }
  return start(c);
}

function foundB2(c) {
  if( c === 'a' ) {
    return foundA3;
  }
  return start(c);
}

function foundA3(c) {
  if( c === 'b' ) {
    return foundB3;
  }
  return start(c);
}

function foundB3(c) {
  if( c === 'x' ) {
    return end;
  }
  return foundB2(c);
}

function end(c) {
  return end;
}



// 