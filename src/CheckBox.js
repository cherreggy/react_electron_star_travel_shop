import "./App.css";
import { Button } from "antd";
import { useEffect, useState, useRef } from "react";

function transTime(sec) {
  //时间转换函数，将秒数转换为小时和秒并返回三个字符串
  let h = parseInt(sec / 3600);
  let m = parseInt((sec - h * 3600) / 60);
  let s = parseInt(sec - h * 3600 - m * 60);

  let hs = h < 10 ? "0" + h : h;
  let ms = m < 10 ? "0" + m : m;
  let ss = s < 10 ? "0" + s : s;
  // console.log(hs, ms, ss);
  return [hs, ms, ss];
}

export default function CheckBox(props) {
  const [time, setTime] = useState(1800); //倒计时时间
  let h = transTime(time);
  const timeRef = useRef(); //设置延时器
  //倒计时
  useEffect(() => {
    //如果设置倒计时且倒计时不为0
    if (time && time !== 0)
      timeRef.current = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1800);
    //清除延时器
    return () => {
      clearTimeout(timeRef.current);
    };
  }, [time]);

  const handleClick = () => {
    // console.log(props);
    props.setRollUp(!props.roll);
  };
  return (
    <div className="CheckBox">
      {/* 总金额 */}
      <div style={{ textAlign: "left", color: "white" }}>
        旅行订单总额：
        <span style={{ color: "gold", fontSize: "3vw" }}>
          {props.data.money}
        </span>
        G小行星碎片
      </div>
      {/* 收起按钮 */}
      <Button className="roll" size="large" onClick={handleClick}>
        展开详细信息
      </Button>
      {/* 倒计时 */}
      <div
        style={{
          textAlign: "left",
          verticalAlign: "middle",
          marginTop: "1vw",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2784/2784459.png"
          style={{
            width: "2.6vw",
            height: "2.6vw",
            margin: "0.3vw",
            marginBottom: "-0.5vw",
          }}
        />
        <span>
          剩余时间
          <span style={{ color: "#FF5876" }}>
            {h[0] + ":" + h[1] + ":" + h[2]}
          </span>
          , 超时订单可能会被取消或者您因为挑衅罪被关入维达监狱。
        </span>
      </div>
    </div>
  );
}
