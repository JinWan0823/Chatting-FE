import socket from "../server";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

export default function MainLogin() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const Login = () => {
    socket.emit("login", { id, pwd }, (res) => {
      if (res?.ok && res.data) {
        console.log(res);
        setUser(res.data);
      } else {
        alert("회원정보 실패");
      }
    });
  };

  return (
    <div>
      <div className="App">
        <div className="logo_box"></div>
        <div className="form_wrap wrap">
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>
        <div className="link_wrap wrap">
          <button className="login_btn" onClick={() => Login()}>
            저장하고 채팅참여하기
          </button>
        </div>
      </div>
    </div>
  );
}
