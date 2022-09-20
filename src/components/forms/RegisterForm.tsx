import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors, " errors");

  const onSubmit = console.log;
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="register-email">Email</InputLabel>
        <InputField
          type="email"
          id="register-email"
          {...register("email", { required: "Email is required" })}
        />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="register-first-name">First Name</InputLabel>
          <InputField
            type="text"
            id="register-first-name"
            {...register("firstName", { required: "First Name is Required" })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="register-last-name">Last Name</InputLabel>
          <InputField
            type="text"
            id="register-last-name"
            {...register("lastName", { required: "Last Name is Required" })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="register-password">Password</InputLabel>
        <InputField
          type="password"
          id="register-password"
          {...register("password", { required: "Password is Required" })}
        />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <div className={styles.footerText}>
        <span>Already have and account? </span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};
