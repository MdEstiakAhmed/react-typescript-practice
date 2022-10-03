type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type PositionProps = {
    // position:`${HorizontalPosition}-${VerticalPosition}`    //automatic generation of type
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'  // exclude center-center with center
}

export const Position = ({ position }: PositionProps) => {
    return (
        <div>
            {position}
        </div>
    )
}