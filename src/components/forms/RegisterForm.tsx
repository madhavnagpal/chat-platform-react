import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

export const RegisterForm = () => {
  return (
    <form className={styles.form}>
      <InputContainer>
        <InputLabel htmlFor="register-email">Email</InputLabel>
        <InputField type="email" id="register-email" />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="register-first-name">First Name</InputLabel>
          <InputField type="text" id="register-first-name" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="register-last-name">Last Name</InputLabel>
          <InputField type="text" id="register-last-name" />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="register-password">Password</InputLabel>
        <InputField type="password" id="register-password" />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
    </form>
  );
};
