import { useRecoilValue } from "recoil";
import { UserState } from "./state/UserState";
import { useEffect, useState } from "react";
import InputField from "./components/InputField/InputField";
import socket from "./server";
import MessageContainer from "./components/MessageContainer/MessageContainer";

export default function ChatPage() {
  const userState = useRecoilValue(UserState);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  console.log(messageList);
  useEffect(() => {
    console.log(userState);
    socket.on("message", (res) => {
      setMessageList((prevState) => prevState.concat(res));
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("sendMessage", message, (res) => {
      console.log("sendMessage res", res);
    });
  };

  return (
    <>
      <div>
        <div className="App">
          <MessageContainer messageList={messageList} user={userState} />
          <InputField
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </>
  );
}
