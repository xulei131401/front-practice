import {add,rmDir} from './common'
import {delay} from './common/a'

add(1,2)
rmDir('../aa')


async function xx(){
    await delay(1000);
    console.log(123);
}

xx()