import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css'

function App() {

  const name = 'react';

  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
      <Hello name = "app에서 hello로 넘겨주는 이름" color = "red" isSpecial={true}/>

      <Wrapper>
        <Hello color="pink"/>
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </Wrapper>
    </>
  );
}

export default App;
