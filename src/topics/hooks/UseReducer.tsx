import { useReducer } from "react"

type CountState = {count: number}

type updateAction = {type: 'increment' | 'decrement',payload: number}

type resetAction = {type: 'reset',}

type counterAction = updateAction | resetAction;

const initialState = {count: 0,}

const reducer = (state: CountState, action: counterAction) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </>
    )
}

export default UseReducer