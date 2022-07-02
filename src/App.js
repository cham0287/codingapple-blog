import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>
      {글제목.map((글제목, i) => {
        return (
          <div className='list'>
            <h4>{글제목}</h4>
            <p>7월 2일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
