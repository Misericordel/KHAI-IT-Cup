import "./LoginPage.css";
import React, { useState } from "react";
import background from "../imgs/bg_khai.png";

const LoginPage = ({ history }) => {
  const [fullName, setFullName] = useState("");
  const [schoolNumber, setSchoolNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorFullName, setErrorFullName] = useState(false);
  const [errorSchoolNumber, setErrorSchoolNumber] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);

  const submit = () => {
    setErrorFullName(false);
    setErrorSchoolNumber(false);
    setErrorPhoneNumber(false);

    if (!Boolean(fullName)) {
      setErrorFullName(true);
    }
    if (!Boolean(schoolNumber)) {
      setErrorSchoolNumber(true);
    }
    if (!Boolean(phoneNumber)) {
      setErrorPhoneNumber(true);
    }
    if (Boolean(fullName) && Boolean(schoolNumber) && Boolean(phoneNumber)) {
      return history.push("/tasks");
    }
  };

  return (
    <div className="login-page">
      <div
        className="bg-login-image"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="ui login-form">
        <div className="ui input">
          <label htmlFor="full-name">Прізвище, Iм'я, По батькові:</label>
          <input
            type="text"
            placeholder="Введіть ПІБ"
            name="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`${errorFullName ? "error" : ""}`}
          ></input>
        </div>
        <div className="ui input">
          <label htmlFor="school-number">Номер школи:</label>
          <input
            type="text"
            placeholder="Введіть номер школи"
            name="school-number"
            value={schoolNumber}
            onChange={(e) => setSchoolNumber(e.target.value)}
            className={`${errorSchoolNumber ? "error" : ""}`}
          ></input>
        </div>
        <div className="ui input">
          <label htmlFor="phone-number">Номер мобільного:</label>
          <input
            type="text"
            placeholder="Введіть номер мобільного"
            name="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`${errorPhoneNumber ? "error" : ""}`}
          ></input>
        </div>
        <div className="ui">
          <button className="ui button primary" onClick={submit}>
            Увійти
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
