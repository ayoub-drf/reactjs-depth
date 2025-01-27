import { useReducer } from "react"

interface StateProp {
    count: number
}

interface ActionProp {
    type: "INCREMENT" | "DECREMENT"
}

const reducerFunction = (state: StateProp, action: ActionProp) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count - 1}
        default:
            return state;
    }
}

const Index = () => {
    const [state, dispatch] = useReducer(reducerFunction, {count: 0})
    return (
        <div>
            <h1>Counter is : {state.count} </h1>
            <br />
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        </div>
    )
}

export default Index