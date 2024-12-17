function delayFn(time) {
  return new Promise((resolve) => {
    //promise takes two things,resolve and reject
    setTimeout(resolve, time);
  });
}

console.log("function start");

// delayFn(2000).then(()=>{console.log("delay function execute after 2 sec")})

function divideNumber(num1, num2) {
  return new Promise((resolve, reject) => {
    //promise takes two things,resolve and reject
    if (num2 == 0) {
      reject("dividend can't be 0");
    } else {
      resolve(num1 / num2);             //so basically what we are resolve it give us to then callback in promise
    }
  });
}

divideNumber(6, 0)
  .then((res) => console.log("res", res))
  .catch((err) => {
    console.log("err", err);
  });
