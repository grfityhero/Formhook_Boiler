import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        {...register("Name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="text"
        placeholder="Phone"
        {...register("Phone", { required: true, maxLength: 100 })}
      />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />

      <input
        {...register("Developer", { required: true })}
        type="radio"
        value="Yes"
      />
      <input
        {...register("Developer", { required: true })}
        type="radio"
        value="No"
      />

      <input type="submit" />
    </form>
  );
}
