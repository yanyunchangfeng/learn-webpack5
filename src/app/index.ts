import png from 'src/assets/img/yanyunchangfeng.png';
import 'src/app/lesson1';
import('src/app/lesson2');
import 'src/app/lesson3';
import { fn1 } from 'src/app/lesson4'
import 'src/app/lesson6'
import 'src/app/lesson7'
import 'src/app/lesson7/style'
import 'src/app/lesson10'
import 'src/app/lesson12'
import { foo } from 'src/app/lesson11'
console.log('foo', foo)
console.log('fn1', fn1)
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('AUTHOR', AUTHOR)
console.log('yanyunchagnfeng png', png)


// let start: any = null;
// let element: any = document.querySelector('div');
// const step = (timestamp: any) => {
//     if (!start) start = timestamp;
//     console.log(timestamp, 'timestamp')
//     let progress = timestamp - start;
//     console.log(progress, 'progress')
//     let styleLeft = Math.min(progress / 10, 200)
//     element.style.left = styleLeft + 'px';
//     console.log(styleLeft, 'styleLeft')
//     if (progress < 2000) {
//         window.requestAnimationFrame(step);
//     }
// }
// window.requestAnimationFrame(step);

