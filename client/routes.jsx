//NOTE 패키지 설치. kadira:flow-router
import React from 'react';
import {mount} from 'react-mounter';

import App from '../App.jsx';
//NOTE 에러. warning.js:44 Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).
//NOTE 답. 타입이 안맞아서가 아니라, export를 해주지않고 import 해서 발생하는에러. export NOTE default class App ..

import {MainLayout} from './layouts/MainLayout.jsx';
//NOTE 에러. warning.js:44 Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).
//NOTE 답. 타입이 안맞아서가 아니라, export를 해주지않고 import 해서 발생하는에러. export const ..

//TODO 폴더명으로 호출가능.
//import {MainLayout} from './layouts/MainLayout';

//object 형태의 전달,
FlowRouter.route('/', {
  action() {

    mount(MainLayout, {
      content: (<App />),
    })
  }
});
