type StylePropsProps = {
    styles: React.CSSProperties
}

export const StyleProps = (props: StylePropsProps) => {
    return (
        <>
            <div style={props.styles}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias cumque exercitationem sed expedita. Vel dicta, totam doloribus beatae, voluptatum excepturi voluptate molestias mollitia deleniti aperiam eligendi repellendus a error nisi.
            </div>
        </>
    )    
}