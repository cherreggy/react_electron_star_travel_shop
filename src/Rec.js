import "./App.css";
import { useState, useRef } from "react";
import { Button, Checkbox } from "antd";

export default function Rec(props) {
  // 创建ref
  const ref = useRef();
  // 点击添加新卡支付会出现不同的界面
  const onChange = (e) => {
    setCheck(!check);
    if (!check) ref.current.classList.add("booo");
    else ref.current.classList.remove("booo");
  };
  const [check, setCheck] = useState(false);
  return (
    <div className="CheckBox" ref={ref}>
      <div className="rec">
        铀燃料储量不够了？试试白矮星碎片支付！
        <Button className="pay">白矮星碎片支付</Button>
      </div>
      <div className="addNewCard">
        <Checkbox onChange={onChange} style={{ fontSize: "1.5vw" }}>
          添加新宇宙飞船
        </Checkbox>
        {check ? (
          <div style={{ display: "flex" }}>
            <Tag title="超光年" detail="立减100G小行星碎片"></Tag>
            <Tag title="超兆光" detail="立减200G小行星碎片"></Tag>
          </div>
        ) : null}
      </div>
      {check ? (
        <Button
          className="pay"
          style={{
            marginTop: "2vw",
            height: "5vw",
            fontSize: "1.8vw",
          }}
        >
          使用新宇宙飞船支付{props.data.money}G 小行星碎片
        </Button>
      ) : null}
    </div>
  );
}

function Tag(props) {
  return (
    <div className="tags">
      <span>{props.title}</span>
      <span>{props.detail}</span>
    </div>
  );
}
