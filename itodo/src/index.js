import _ from 'lodash'
import printMe from "./print"
import {cube} from "./math"
import Vue from 'vue'
import App from './app.vue'


new Vue({
  el: '#app',
  render: (h) => h(App),
  components: {
    App
  }
})

// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');

//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;
//   element.appendChild(btn);

//   return element;
// }

// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);


// function component2(){
//   var element = document.createElement('pre');

//   element.innerHTML = [
//          'Hello webpack!',
//         '5 cubed is equal to ' + cube(5)
//        ].join('\n\n');
    
//        return element;
// }
// document.body.appendChild(component2());


// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//       console.log('Accepting the updated printMe module!');
//       document.body.removeChild(element);
//       element = component(); // 重新渲染页面后，component 更新 click 事件处理
//       document.body.appendChild(element);
      
//     })
//   }