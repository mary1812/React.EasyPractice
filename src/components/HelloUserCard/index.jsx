import { UserContext } from "contexts";
import { useCallback, useContext, useEffect, useState } from "react";

function HelloUserCard() {
  const [user] = useContext(UserContext);
  const [value, setValue] = useState("hello user");

  const alertValue = useCallback(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    console.log("alert есть");
  }, [alertValue]);


  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <h1>Hello {user.fullName}</h1>
      <img src={user.userImg} alt="img" style={{ width: "100px" }}></img>
      <button onClick={alertValue}>ALERT</button>
    </div>
  );
}

export default HelloUserCard;
