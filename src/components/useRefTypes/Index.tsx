import { useRef, useState, FormEvent } from "react"

type UserTypes = {
    username: string,
    password: string
}

const Index = () => {
    const [user, setUser] = useState<UserTypes>({
        username: "",
        password: ""
    });

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            username: username.current!.value,
            password: password.current!.value
        }
        setUser(user)
    }


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input ref={username} type="text" placeholder="username" />
                <input ref={password} type="text" placeholder="password" />
                <input type="submit" value="submit" />
            </form>
            <br />
            <hr />
            <h1>User Info</h1>
            <p>username: {user.username} </p>
            <p>password: {user.password} </p>
        </div>
    )
}

export default Index