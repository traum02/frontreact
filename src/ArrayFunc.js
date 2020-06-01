import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ArrayFunc = () => {
  const [name, setName] = useState("강호동");
  const [addr, setAddr] = useState("서울");
  const [count, setCount] = useState([3, 4]);

  const change = () => {
    setName("이영자");
    setAddr("제주도");
    setCount([1, 2, 3]);
  };

  const incre = () => {
    setCount(count.concat(5));
  };

  const list = count.map((n, i) => (
    <li>
      {i}:{n}
    </li>
  ));
  return (
    <div>
      이름:{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      주소:{" "}
      <input
        type="text"
        value={addr}
        onChange={(e) => setAddr(e.target.value)}
      ></input>
      <hr></hr>
      <b>변경된 이름,주소 출력</b>
      <span style={{ color: "red" }}>
        {name},{addr}
      </span>
      <hr></hr>
      <Button variant="outline-danger" type="button" onClick={change}>
        모두 변경
      </Button>
      <Button variant="success" size="sm" type="button" onClick={incre}>
        숫자 증가
      </Button>
      <h3>숫자 배열 출력</h3>
      {list}
    </div>
  );
};

export default ArrayFunc;
