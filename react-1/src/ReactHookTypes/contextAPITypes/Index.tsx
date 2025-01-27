/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, ReactNode, FC } from "react"

type ContextProps = {
    count: number,
    increment: () => void,
    decrement: () => void,
}

export const MyContext = createContext<ContextProps>({
    count: 0,
    increment: () => {},
    decrement: () => {},
})

interface IndexProps {
    children: ReactNode
}

const Index: FC<IndexProps> = ({ children }) => {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <MyContext.Provider value={{ count, increment, decrement}}>
            {children}
        </MyContext.Provider>
    )
}

export default Index;