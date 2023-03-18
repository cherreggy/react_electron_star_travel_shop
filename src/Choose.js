import { useEffect, useState } from "react";

export default function Choose() {
  const [choose, setChoose] = useState(0);
  //   仅在数据发生改变时更新

  return (
    <div className="CheckBox" style={{ display: "flex" }}>
      <div
        style={{
          //   border: "1px solid grey",
          width: "10vw",
          padding: "1vw",
          borderRadius: "1.3vw",
          marginRight: "5vw",
          cursor: "pointer",
          fontSize: "1.5vw",
          color: "white",
          border: choose == 0 ? "2px solid gold" : "none",
          boxSizing: "border-box",
        }}
        onClick={() => {
          setChoose(0);
          window.open(
            "https://imgweb.kejipro.cn/p3037/t1/202104/04b60e1d-9eaa-49ae-b426-54267c7a6ccb.jpg"
          );
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3388/3388092.png"
          style={{ height: "3vw" }}
        />
        <div>星际宝</div>
      </div>

      <div
        style={{
          //   border: "1px solid grey",
          width: "10vw",
          padding: "1vw",
          borderRadius: "1.3vw",
          marginRight: "5vw",
          cursor: "pointer",
          fontSize: "1.5vw",
          color: "white",
          border: choose == 1 ? "2px solid gold" : "none",
          boxSizing: "border-box",
        }}
        onClick={() => {
          setChoose(1);
          window.open(
            "https://imgweb.kejipro.cn/p3037/t1/202104/04b60e1d-9eaa-49ae-b426-54267c7a6ccb.jpg"
          );
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1598/1598431.png"
          style={{ height: "3vw" }}
        />
        <div>星信</div>
      </div>

      <div
        style={{
          //   border: "1px solid grey",
          width: "10vw",
          padding: "1vw",
          borderRadius: "1.3vw",
          marginRight: "5vw",
          cursor: "pointer",
          fontSize: "1.5vw",
          color: "white",
          border: choose == 2 ? "2px solid gold" : "none",
          boxSizing: "border-box",
        }}
        onClick={() => {
          setChoose(2);
          window.open(
            "https://imgweb.kejipro.cn/p3037/t1/202104/04b60e1d-9eaa-49ae-b426-54267c7a6ccb.jpg"
          );
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733740.png"
          style={{ height: "3vw" }}
        />
        <div>太阳巴巴</div>
      </div>
    </div>
  );
}
