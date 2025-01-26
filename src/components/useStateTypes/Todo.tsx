import { useState, FormEvent } from "react"

type Todo = {
    id: number,
    name: string
}

const Todo = () => {
    const [task, setTodo] = useState<Todo[]>([])

    const addTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const todo: Todo = {
            id: task.length + 1,
            name: e.currentTarget.task.value
        }
        setTodo((prevTodo) => [...prevTodo, todo])
    }
    return (
        <div>
            <div>
                <h1>Add Todo: </h1>
                <form onSubmit={addTodo}>
                    <input type="text" required name="task"  />
                    <input type="submit" value="click" />
                </form>
            </div>
            <br />
            <hr />
            <h1>Todos</h1>
            <ul>
                {
                    task.map((elem: Todo, index: number) => {
                        return <div key={index}>
                            <li>ID: {elem.id} </li>
                            <li>name: {elem.name} </li>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo