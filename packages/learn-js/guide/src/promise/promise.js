/**
 * promise
 */
export const tPromise = async () => {
    // p()
    tConcurrency()
}


const p = async () => {
  /**
   * 1. 默认情况下被async修饰的方法内部执行顺序从上到下，没有await修饰就是异步执行，有的话
   * 就是同步执行
   * 2. await 相当于有了先后顺序，必须等上一个执行完才向下执行
   */
  console.log("p start");
  // p2()
  // p3()
  // p1()
  await p2();
  await p3();
  await p1();
  console.log("p end");
}

const p1 = async () => {
    await delay(2000);
    console.log("1111");
}

const p2 = async () => {
    await delay(4000);
    console.log("2222");
}
const p3 = async () => {
   await delay(6000);
   console.log("3333");
}

const delay = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('tttttt')
            resolve()
        }, time)
    })
}


const tConcurrency = async() => {
  /**
   * Promise.all
   * 1. 并发执行Promise
   * 2. 其中一个出错直接返回，不会等待其他promise执行完毕，其他promise照样执行
   * 3. 无论是否await，代码执行到all这里的时候，后边的promise都会执行
   */

  await delay(3000)
  const res =  Promise.all([c1(), c2()]).catch((e) => {
    console.log("e:", e);
  });
  console.log("res:", res);
}

const c1 = async () => {
    console.log("并发1 start");
    await delay(2000)
    console.log('并发1 end')
}

const c2 = async () => {
  console.log("并发2 start");
  throw new Error('2 出错了')
  await delay(4000);
  console.log("并发2 end");
};