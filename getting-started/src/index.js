// webpack

// ES6 문법 
import _ from 'lodash';     

//ES5 문법 ( common.js 문법)
//위와 같은 문법임!!
// var _ = require('lodash');


function component() {
    var element = document.createElement('div');
  
    /* lodash is required for the next line to work */
    // lodash 애플리케이션 이용 예시를 보여주기 위하여 join 문법 사용 
    // _ : lodash , join : lodash의 API 
    element.innerHTML = _.join(['Hello','webpack'], ' ');
  
    return element;
  }
  


  //document API를 이용하여 comp body에 부착
  document.body.appendChild(component());