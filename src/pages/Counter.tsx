import { useEffect, useState } from "react";
import Button from "../components/Button";
import Count from "../components/Count";
import Title from "../components/Title";

export default function Counter() {
    const [count, setCount] = useState(0)
    const limit = count === 9 ? true : false;

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.code === "Space") {
                const newValue = count + 1
                if (newValue > 69) {
                    return
                }

                setCount(count + 1)
            }

            if (event.code === "Backspace") {
                const newValue = count - 1
                if (newValue < 0 || newValue == 68) {
                    return
                }

                setCount(count - 1)
            }

            if (event.code === "KeyR") {
                setCount(0)
            }
        }

        window.addEventListener("keydown", handleKeydown)

        //react useEffect CLEANUP FUNCTION
        return () => {
            window.removeEventListener("keydown", handleKeydown)
        }
    }, [count])

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

