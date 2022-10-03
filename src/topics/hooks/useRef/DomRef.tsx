import { useRef, useEffect } from "react";

export const DomRef = () => {
    // null! is for optional chaining
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <>
            <input type="text" ref={inputRef} />
        </>
    )
}