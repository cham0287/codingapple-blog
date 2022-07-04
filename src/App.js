import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);
  let [따봉수, 따봉수변경] = useState([0, 0, 0]);

  function addLike(i) {
    let new따봉수 = [...따봉수];
    new따봉수[i] += 1;
    따봉수변경(new따봉수);
  }
  function genderChange() {
    if (글제목[0][0] === '남') {
      let new글제목 = [...글제목];
      new글제목[0] = '여자코트 추천';
      글제목변경(new글제목);
    } else {
      let new글제목 = [...글제목];
      new글제목[0] = '남자코트 추천';
      글제목변경(new글제목);
    }
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
              <span onClick={() => addLike(i)}>👍</span>
              {따봉수[i]}
            </h4>
            <p>7월 2일 발행</p>
          </div>
        );
      })}
      <div>
        <button onClick={() => genderChange()}>성별변경</button>
      </div>
    </div>
  );
}

export default App;
