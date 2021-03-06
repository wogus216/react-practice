import { useEffect } from "react";
import useInputs from "../useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    fullname: "",
    nickname: "",
  });
  // const [state, setState] = useState({
  //   fullname: "",
  //   nickname: "",
  // });

  const { fullname, nickname } = state;

  useEffect(() => {
    console.log("effect");
    console.log(fullname);
    return () => {
      console.log("clean up");
      console.log(fullname);
    };
  }, [fullname]);

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
