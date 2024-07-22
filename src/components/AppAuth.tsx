
import SignUp from './SignUp';
import Login from './Login';
import "../styles/AppAuth.css";

const AppAuth: React.FC = () => {
  
  return (
    <div class="main container">
        <Login />
        <SignUp />
    </div>
  );
};

export default AppAuth;
