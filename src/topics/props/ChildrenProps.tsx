type ChildrenStringPropsProps = {
    children: string
}

export const ChildrenStringProps = (props: ChildrenStringPropsProps) => {
    return (
        <>
            {props.children}
        </>
    )
}

type ChildrenComponentPropsProps = {
    children: React.ReactNode
}

export const ChildrenComponentProps = (props: ChildrenComponentPropsProps) => {
    return (
        <>
            {props.children}
        </>
    )
}