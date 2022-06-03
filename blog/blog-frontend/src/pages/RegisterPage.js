import AuthForm from '../components/auth/AuthForm';
import AuthTempplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTempplate>
      <RegisterForm />
    </AuthTempplate>
  );
};
export default RegisterPage;
