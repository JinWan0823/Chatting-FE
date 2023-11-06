import { useEffect, useState } from "react";
import "./App.css";
import socket from "./server";

function App() {
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
    <div>
      <div className="App"></div>
    </div>
  );
}

export default App;
