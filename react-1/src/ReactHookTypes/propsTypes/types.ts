
type UserTypes = {
    name: string, 
    age: number, 
    isAvailable: boolean
}

type adminTypes = UserTypes & {
    role: string,
    lastLogin: Date,
}

export {type UserTypes, type adminTypes}