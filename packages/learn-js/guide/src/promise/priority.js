/**
 * 宏任务，微任务
 */
export const tPriority = () => {
  console.log("tPromise start");
  tSetTimeout();
  macroTask();
  microTask();
  console.log("script end"); // 宏任务
  Promise.resolve().then(() => console.log("promise 4"));
  setTimeout(function () {
    console.log("setTimeout2");
  }, 0);
  Promise.resolve().then(() => console.log("promise 5"));
  Promise.resolve().then(() => console.log("promise 6"));
};

const macroTask = () => {
  console.log("script start"); // 宏任务
}

const tSetTimeout = () => {
  /**
   * setTimeout(() => {}, 0); 本身属于宏任务队列，用来清空微任务队列，并在下一次事件循环先执行
   */
  setTimeout(function () {
    console.log("setTimeout1");
  }, 0);


  setTimeout(function () {
    console.log("setTimeout3");
  }, 0);
}

const microTask = () => {
    /**
     * 微任务先执行
     */
    new Promise((resolve) => {
      console.log("promise 1"); // 微任务
      resolve();
    }).then(() => {
      console.log("promise 2"); // 微任务
    });
}