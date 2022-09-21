import React from "react";
// import hostMap from "../hostMap";
import WujieReact from "wujie-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function RanshuFinanceNode() {
  const navigation = useNavigate();
  const location = useLocation();
  // const path = location.pathname.replace("/react16-sub", "").replace("/react16", "").replace("/", ""); ////
  // const react16Url = hostMap("//localhost:7600/") + path;
  const props = {
    jump: (name) => {
      navigation(`/${name}`);
    },
  };

  console.log('fasssssssssssssss')

  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由
    <WujieReact
      width="100%"
      height="100%"
      name="insight-devops"
      // url={react16Url}
      url={'https://reactjs.org/'}
      // sync={!path}
      props={props}
    ></WujieReact>
  );
}
