// file1.js
export default function func1() { }
export function func2() { }
export const variable1 = 123;
export let variable2 = 'hello';

// file2.js
import myFunc1, { func2, variable1, variable2 } from './file1.js';      //default로 내보낸거 {}없이, 나머지는 {}이용해서 가져옴

// file3.js
import { func2 as myFunc2 } from './file1.js';                          //as 이용해서 이름 변경도 가능

