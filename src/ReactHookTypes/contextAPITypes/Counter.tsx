import { useContext } from "react"
import { MyContext } from "./Index"

type ContextProps = {
    count: number,
    increment: () => void,
    decrement: () => void,
};

const Counter = () => {
    const {count, increment, decrement} = useContext<ContextProps>(MyContext)
    return (
        <div>
            Counter is: {count}
            <br />
            <button onClick={() => increment()}>
            increment
            </button>
            <br />
            <button onClick={() => decrement()}>
            decrement
            </button>
            
        
        </div>
    )
}

export default Counter