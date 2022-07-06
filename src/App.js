import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);
  let [따봉수, 따봉수변경] = useState([0, 0, 0]);
  let [모달창, 모달창변경] = useState(0);
  let [글번호, 글번호변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

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

  function sortList() {
    let new글제목 = [...글제목];
    new글제목.sort();
    글제목변경(new글제목);
  }

  function modalToggle() {
    모달창 === 0 ? 모달창변경(1) : 모달창변경(0);
  }

  function onChange(i) {
    글번호변경(i);
  }

  function onAdd() {
    let new글제목 = [...글제목];
    new글제목.push(입력값);
    글제목변경(new글제목);
    let new따봉수 = [...따봉수];
    new따봉수.push(0);
    따봉수변경(new따봉수);
  }
  function onDelete(i) {
    let new글제목 = [...글제목];
    new글제목.splice(i, 1);
    글제목변경(new글제목);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>
      {글제목.map((글제목, i) => {
        return (
          <div className='list'>
            <h4 onClick={() => onChange(i)}>
              {글제목}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  addLike(i);
                }}
              >
                👍
              </span>
              {따봉수[i]}
              <button onClick={() => onDelete(i)}>삭제</button>
            </h4>
            <p>7월 2일 발행</p>
          </div>
        );
      })}
      <form>
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            onAdd();
          }}
        >
          글추가
        </button>
      </form>
      <div>
        <button onClick={() => genderChange()}>성별변경</button>
      </div>
      <div>
        <button onClick={sortList}>가나다순정렬</button>
      </div>
      <div>
        <button onClick={modalToggle}>모달창여닫기</button>
      </div>
      {모달창 === 0 ? <Modal 글제목={글제목} 글번호={글번호} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.글번호]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
