//The Array.from() method returns an Array object from any object 
//with a length property or an iterable object.

function arrFrom(value, method, operator, arg){
  let newArr = [];
  if (method === 'undefined' && typeof value === 'string'){
    for(let i = 0; i < value.length; ++i){
      newArr.push(value[i]);
    }
    return newArr;
  }
    for(let j = 0; j < value.length; ++j){
      newArr.push(method(value[j],operator,arg));
    }
    return newArr;
}

function arrMethod(val, ection, operand){
  if(ection === '+'){
    val += operand;
  }else if (ection === '-'){
    val -= operand;
  }else if (ection === '*'){
    val *= operand;
  }else if(ection === '/'){
    val /= operand;
  }
  return val;
}
console.log(arrFrom([1,2,3], arrMethod, '+', 5));
console.log(arrFrom('123', arrMethod, '/', 5));