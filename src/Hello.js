import React from 'react';

function Hello( {color, name, isSpecial } ) {
  return (
  <div style = {{color}}> 
    {/* jsx에서 null, false, undefined를 렌더링하게 된다면 아무것도 나타나지 않게 된다. */}
    { isSpecial ? <b>*</b> : null}
    안녕하세요 실습 따라합니다. {name}
  </div>);
}

Hello.defaultProps = {
  name : 'no name'
}

export default Hello;