import { ReactNode, FC } from "react"

// type UserShape = {
//     name: string, 
//     age: number, 
//     isAvailable: boolean,
//     children: ReactNode
// }

interface UserProps {
    user: {
        name: string;
        age: number;
        isAvailable: boolean
    },
    children: ReactNode;
}


// const User = (props: {name: string, age: number, isAvailable: boolean}) => {
// const User = ({name, age, isAvailable}: {name: string, age: number, isAvailable: boolean}) => {
// const User = ({name, age, isAvailable, children}: UserShape) => {
// const User:FC<UserShape> = ({name, age, isAvailable, children}) => {
const User:FC<UserProps> = ({user, children}) => {
  return (
    // <div>
    //     <h1>
    //         {name}
    //         <br />
    //         {age}
    //         <br />
    //         {isAvailable ? "YES" : "NO"}
    //     </h1>
    //     {children}
    // </div>
    <div>
        {user.name}
        <br />
        {user.age}
        <br />
        {user.isAvailable ? "YES" : "NO"}
        <br />
        {children}
    </div>
  )
}

export default User