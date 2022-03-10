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

      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />

      <select {...register("Title", { required: true })}>
        <option value="Mr">aaa</option>
        <option value="Mrs">bbb</option>
      </select>
      <ul>
        <li>
          <input
            {...register("Developer", { required: true })}
            type="radio"
            id="f-option"
            name="selector"
          />
          <label for="f-option">Pizza</label>

          <div class="check"></div>
        </li>

        <li>
          <input type="radio" id="s-option" name="selector" />
          <label for="s-option">Bacon</label>

          <div class="check">
            <div class="inside"></div>
          </div>
        </li>

        <li>
          <input type="radio" id="t-option" name="selector" />
          <label for="t-option">Cats</label>

          <div class="check">
            <div class="inside"></div>
          </div>
        </li>
      </ul>

      <input type="submit" />
    </form>
  );
}
