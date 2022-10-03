import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const interValueRef = useRef<number | undefined>(undefined)

    useEffect(() => {
        interValueRef.current = window.setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)
        return () => {
            window.clearInterval(interValueRef.current)
        }
    }, [])

    return (
        <>
            <div>Timer {timer}</div>
        </>
    )
}