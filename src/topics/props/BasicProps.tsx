type BasicPropsProps = {
    name: string,
    age: number,
    isCompleteGraduation: boolean,
    address: {
        city: string,
        area: string,
    },
    hobby: string[],
    favoriteSuperHero: {
        name: string,
    }[],
    religion: "Islam" | "Hinduism" | "Christianity",
    messageCount?: number,
}

// one can destructuring the props as well like {name, age, isCompleteGraduation, address, hobby, favoriteSuperHero, religion, messageCount}
const BasicProps = (props: BasicPropsProps) => {
    const { messageCount = 0 } = props;
    return (
        <>
            <p>pending messages: {messageCount}</p>
            <p>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
            <p>My religion is {props.religion}</p>
            {
                props.isCompleteGraduation ? <p>I have completed my graduation</p> : <p>I have not completed my graduation</p>
            }
            <p>I live in {props.address.area}, {props.address.city}</p>
            <p>My hobbies are:</p>
            <ul>
                {
                    props.hobby.map((hobby, index) => {
                        return <li key={index}>{hobby}</li>
                    })
                }
            </ul>
            <p>My favorite super heroes are:</p>
            <ul>
                {
                    props.favoriteSuperHero.map((superHero, index) => {
                        return <li key={index}>{superHero.name}</li>
                    })
                }
            </ul>
        </>
    )
}

export default BasicProps;

