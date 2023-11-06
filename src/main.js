import socket from "./server";
import { useEffect, useState } from "react";
export default function MainPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt("당신의 이름은?");
    console.log(userName);

    socket.emit("login", userName, (res) => {
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };

  return (
    <>
      <div>
        <div className="App"></div>
      </div>
    </>
  );
}
