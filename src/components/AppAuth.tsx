import SignUp from './SignUp';
import Login from './Login';
import "../styles/AppAuth.css";

const AppAuth: React.FC = () => {
  
  return (
    <div className="main">
        <Login />
        <SignUp />
    </div>
  );
};

export default AppAuth;
