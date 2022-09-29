// can be reuse this props anywhere in the project
export type NameProps = {
    first: string,
    last: string
}

// just import it in the file where you want to use it
export type TextProps = {
    age: number,
    name: NameProps
}