//��Ҫ ���ذ�װ npm install --save lodash  �ο��ĵ�: https://webpack.docschina.org/guides/getting-started/
//��ʽҪ������� lodash ������ڣ�Ȼ������Ϊ _
import _ from 'lodash';
import './style.css'
import Icon from './wechat.jpg';

function component(){
	let element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello','webpack'],' ');
	element.classList.add('hello');

	var myIcon=new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());
