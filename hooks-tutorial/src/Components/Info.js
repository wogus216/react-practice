import { useEffect, useState } from "react";

const Info = () => {
  const [state, setState] = useState({
    fullname: "",
    nickname: "",
  });

  const { fullname, nickname } = state;
  //   const [name, setName] = useState("");
  //   const [nickname, setNickname] = useState("");

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickname = (e) => {
  //     setNickname(e.target.value);
  //   };

  useEffect(() => {
    console.log("effect");
    console.log(fullname);
    return () => {
      console.log("clean up");
      console.log(fullname);
    };
  }, [fullname]);

  const onChange = (e) => {
    //비구조화 할당은 중괄호
    const { name, value } = e.target;

    const elements = {
      ...state,
      [name]: value,
    };
    setState(elements);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="fullname"
          value={fullname}
          onChange={onChange}
        />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름:</b>
        {fullname}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};
export default Info;
