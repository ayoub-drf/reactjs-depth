import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  username: string
  email: string
  password: string,
}

const Form = () => { 
  const {register, handleSubmit, formState: { errors },} = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }



  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" defaultValue="Your username" {...register("username", {required: true})} />

      <input type="email"  {...register("email", {
        required: "The email field is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          message: "Invalid Email address"
        }
      })} />

      <input type="password" {...register("password", {
        required: "The password field is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters"
        }
      })} />

      <p>{errors.username && <span>The username field is required"</span>}</p>

      <p>{errors.email && <span>{errors.email.message}</span>}</p>

      <p>{errors.password && <span>{errors.password.message}</span>}</p>


      <input type="submit" />
    </form>
  )
}


export default Form