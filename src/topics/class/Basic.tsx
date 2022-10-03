import { Component } from "react";

type ClassProps = {
    message: string;
}

type ClassState = {
    count: number;
}


// if props is not passed, then pass a empty object {}
// if state is not passed, then pass nothing
export class Basic extends Component<ClassProps, ClassState> {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prev => ({ count: prev.count + 1 }));
    }

    render() {
        return(
            <>
                <div>
                    <button>+</button>
                    <span>{this.state.count}</span>
                    <button>-</button>
                </div>
                <p>{this.props.message}</p>
            </>
        )
    }
}