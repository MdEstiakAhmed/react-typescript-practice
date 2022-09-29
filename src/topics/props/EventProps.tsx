import React from "react"

type VoidEventPropsProps = {
    handleClick: () => void
}
type ArgEventPropsProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement> , id: number) => void
}

type InputEventPropsProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export const VoidEventProps = (props: VoidEventPropsProps) => {
    return (
        <>
        <button onClick={props.handleClick}>Click</button>
        </>
    )
}

export const ArgEventProps = (props: ArgEventPropsProps) => {
    return (
        <>
        <button onClick={(event) => props.handleClick(event, 5)}>Click</button>
        </>
    )
}

export const InputEventProps = (props: InputEventPropsProps) => {
    return (
        <input type="text" value={props.value} onChange={(event) => props.handleChange(event)} />
    )
}
