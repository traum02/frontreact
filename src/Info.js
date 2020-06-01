import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log(name);
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onChangeName}></input>
      <input type="text" onChange={onChangeNickname.bind(this)}></input>
      <div>
        {name !== "" ? name : ""}
        {nickname !== "" ? ", " + nickname : ""}
      </div>
    </div>
  );
};

export default Info;
