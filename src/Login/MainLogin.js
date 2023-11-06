import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
export default function MainLogin() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const Login = () => {
    console.log("로그인시도");
    navigate("/chat");
  };

  return (
    <div>
      <div className="App">
        <div className="logo_box"></div>
        <div className="form_wrap wrap">
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>
        <div className="link_wrap wrap">
          <button className="login_btn" onClick={() => Login()}>
            로그인하고 채팅참여하기
          </button>
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
}
