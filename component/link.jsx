// 在你的 React 组件文件中
import React from 'react';
import style from './link.module.css'
const Link = (props) => {
  return (
    <a
      href={`./${props.link}`}
      className={style.link}
    >
      {props.title}
    </a>
  );
};

export default Link;
