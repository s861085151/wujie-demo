import React from 'react';
import ReactDOM from 'react-dom/client';
import WujieReact from 'wujie-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import lifecycles from "./lifecycle";


const { bus, setupApp, preloadApp, startApp, destroyApp } = WujieReact;

/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */

setupApp({
  name: "insight-devops",
  url: '//localhost:7070/', //hostMap("//localhost:7600/"),
  // attrs,
  exec: true,
  // fetch: credentialsFetch,
  // plugins,
  prefix: { "prefix-dialog": "/dialog", "prefix-location": "/location" },
  // degrade,
  ...lifecycles,
});

setupApp({
  name: "ranshu-finance-node",
  url: '//local.test.inc:7019//', //hostMap("//localhost:7600/"),
  // attrs,
  exec: true,
  // fetch: credentialsFetch,
  // plugins,
  prefix: { "prefix-dialog": "/dialog", "prefix-location": "/location" },
  // degrade,
  ...lifecycles,
});


// startApp({
//   name: "passport",
//   url: "//passport.test.inc"
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
