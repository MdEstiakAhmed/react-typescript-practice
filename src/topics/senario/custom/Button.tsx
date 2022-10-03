type ButtonType = {
    variant: 'primary' | 'secondary' | 'tertiary'
} & React.ComponentProps<'button'>


// if want children type only as string
// type ButtonType = {
//     variant: 'primary' | 'secondary' | 'tertiary'
//     children: string
// } & Omit<React.ComponentProps<'button'>, 'children'>

export const Button = ({ variant, children, ...rest }: ButtonType) => {
    return(
        <button className={`${variant}`} {...rest}>
            {children}
        </button>
    )
}