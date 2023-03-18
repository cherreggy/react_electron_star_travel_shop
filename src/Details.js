import "./App.css";

export default function Details(props) {
  return (
    <div className="Details">
      {/* 费用明细 */}
      <div className="pannel">
        <div style={{ width: "9vw", color: "gold" }}>费用明细</div>
        <div>
          <div>
            超时空传送（按最高铀燃料消耗量计算） {props.data.money}G小行星碎片
          </div>
          <div>量子加速（慢） 0 * 1份</div>
        </div>
        <div></div>
      </div>
      {/* 乘车人 */}
      <div className="pannel">
        <div style={{ width: "9vw", color: "gold" }}>乘车人</div>
        <div>
          <div>性别：{props.data.gender}</div>
          <div>姓名：{props.data.name}</div>
          <div>星际居民证：{props.data.id}</div>
        </div>
      </div>
      {/* 联系手机 */}
      <div className="pannel" style={{ borderBottom: "none" }}>
        <div style={{ width: "9vw", color: "gold" }}>联系手机</div>
        <div>86-{props.data.phone}</div>
      </div>
    </div>
  );
}
