import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);
  let [따봉수, 따봉수변경] = useState([1, 2, 3]);

  function addLike(i) {
    let new따봉수 = [...따봉수];
    new따봉수[i] += 1;
    따봉수변경(new따봉수);
  }
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>
      {글제목.map((글제목, i) => {
        return (
          <div className='list'>
            <h4>
              {글제목}
              <span onClick={addLike(i)}>👍</span>
              {따봉수[i]}
            </h4>
            <p>7월 2일 발행</p>
          </div>
        );
      })}
      <div>
        <button>성별변경</button>
      </div>
    </div>
  );
}

export default App;
