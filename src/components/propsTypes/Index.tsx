import User from "./User"
import {UserTypes} from "./types"

const user: UserTypes = {
  name: "Dexter",
  age: 33,
  isAvailable: true
}


const Index = () => {
  return (
    <div>
        {/* <User name="dexter" age={33} isAvailable={true} >
          <p>Hello World</p>
        </User> */}
        <User user={user} >
          <p>Hello World</p>
        </User>
    </div>
  )
}

export default Index