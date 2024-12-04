import { useState } from "react";
import Button from "../components/Button";
import Count from "../components/Count";
import Title from "../components/Title";

export default function Counter() {
  const [count, setCount] = useState(0)
  const limit = count === 69 ? true : false;

  return (
    <div className="card">
      <Title limit={limit} />
      <Count count={count} />
      <Button type="reset" className="reset-btn reset-btn-icon" setCount={setCount}>&#x21BB;</Button>
      <div className="button-container">
        <Button type="sub" className="count-btn count-bnt-icon" limit={limit} setCount={setCount}>&ndash;</Button>
        <Button type="add" className="count-btn count-bnt-icon" limit={limit} setCount={setCount}>&#43;</Button>
      </div>
    </div>
  )
}

