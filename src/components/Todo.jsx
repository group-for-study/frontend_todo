import React from "react";

export function Todo ({ todoInfo, buttons }) {
  return (
      <li>
        <div>{todoInfo}</div>
        {
          buttons && <>{buttons}</>
        }
      </li>
  );
};

// default
// - ESM 에서 다루기가 힘들다.
// Next.js Pages 디렉토리 안에 export default 많이 씀
// 일반 컴포넌트는 Named export 를 많이 씀
