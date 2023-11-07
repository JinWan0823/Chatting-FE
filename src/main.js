import { useRecoilValue } from "recoil";
import { UserState } from "./state/UserState";
import { useEffect } from "react";

export default function MainPage() {
  const userState = useRecoilValue(UserState);

  useEffect(() => {
    console.log(userState);
  }, []);

  return (
    <>
      <div>
        <div className="App"></div>
      </div>
    </>
  );
}
