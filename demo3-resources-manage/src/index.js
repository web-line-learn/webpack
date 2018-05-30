//需要 本地安装 npm install --save lodash  参考文档: https://webpack.docschina.org/guides/getting-started/
//显式要求引入的 lodash 必须存在，然后将它绑定为 _
import _ from 'lodash';
import './style.css'

function component(){
	let element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello','webpack'],' ');
	element.classList.add('hello');

	return element;
}

document.body.appendChild(component());