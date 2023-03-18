import "./App.css";
import { useState } from "react";
import CheckBox from "./CheckBox";
import Details from "./Details";
import Rec from "./Rec";
import Choose from "./Choose";
import { ConfigProvider } from "antd";

// 主题颜色设置
const defaultData = {
  borderRadius: 6,
  colorPrimary: "gold",
};

function App() {
  // 订单数据存放处
  const [data, setData] = useState({
    money: 3725,
    gender: "女",
    name: "宣正吉",
    id: "230108**********28",
    phone: "176****4973",
  });
  // 细节呈展开还是折叠状态，false为折叠
  const [rollup, setRollUp] = useState(false);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: defaultData.colorPrimary,
        },
      }}
    >
      <div className="App">
        {/* 欢迎标语 */}
        <div className="Welcome">E.T. 星际旅行公司 🚀</div>
        {/* 订单结算栏 */}
        <CheckBox data={data} roll={rollup} setRollUp={setRollUp}></CheckBox>
        {/* 细节展示栏 */}
        {rollup ? <Details data={data}></Details> : null}
        {/* 支付方式推荐 */}
        <Rec data={data}></Rec>
        {/* 选择支付方式 */}
        <Choose></Choose>
        {/* 版权 */}
        <div style={{ color: "white", marginBottom: "2vw" }}>
          版权所有：宣正吉 ECUST
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
