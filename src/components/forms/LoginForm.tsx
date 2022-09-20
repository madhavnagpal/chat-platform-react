import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log({ errors });

  const onSubmit = () => {};
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="login-email">Email</InputLabel>
        <InputField
          type="email"
          id="login-email"
          {...register("email", { required: true })}
        />
      </InputContainer>
      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor="login-password">Password</InputLabel>
        <InputField
          type="password"
          id="login-password"
          {...register("password", { required: true })}
        />
      </InputContainer>
      <Button>Login</Button>
      <div className={styles.footerText}>
        <span>Don't have an account? </span>
        <Link to="/register">
          <span>Sign Up</span>
        </Link>
      </div>
    </form>
  );
};
