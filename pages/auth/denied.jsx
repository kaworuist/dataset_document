import React from "react";
import style from "./error.module.css";
import { useRouter } from 'next/router';

function NotFound() {
    const router = useRouter()
  return (
    <div className={style['error-container']}>
      <div className={style.error}>
        <h1>permission denied</h1>
        <a onClick={() => router.back()}>return</a>
        {/* <img src="lost.png" alt="Lost" /> */}
      </div>
    </div>
  );
}

export default NotFound;
