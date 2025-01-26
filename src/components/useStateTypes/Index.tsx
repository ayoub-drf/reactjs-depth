import { useState } from "react"

interface profileState {
    name: string;
    age: number;
}

const Index = () => {
    const [profile, setProfile] = useState<profileState>({
        name: "",
        age: 0,
    });

    const updateName = (name: string) => {
        setProfile((prevValue) => ({...prevValue, name}))
    }

    const updateAge = (age: number) => {
        setProfile((prevValue) => ({...prevValue, age}))
    }

    return (
        <div>
            <input onChange={ e => updateName(e.target.value) } type="text" placeholder="name" value={profile.name} />
            <br />
            <input onChange={ e => updateAge(Number(e.target.value)) } type="text" placeholder="age" value={profile.age > 0 ? profile.age : ""} />
            <br />
            <input type="button" value="submit" />
            <br />

            <ul>
                <h1>Profile info : </h1>
                <li>
                    Name: {profile.name}
                </li>
                <li>
                    Age: {profile.age > 0 ? profile.age : ''}
                </li>
            </ul>
        </div>
    )
}

export default Index