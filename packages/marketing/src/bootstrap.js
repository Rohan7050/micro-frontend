import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const mount = (ele) => {
    ReactDOM.render(
        <App/>,
        ele
    )
}

if(process.env.NODE_ENV === 'development') {
    const rootEle = document.querySelector('#_marketing_main_ele');
    if(rootEle) {
        mount(rootEle);
    }
}