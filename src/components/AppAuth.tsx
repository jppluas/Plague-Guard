import SignUp from './SignUp';
import Login from './Login';
import "../styles/AppAuth.css";

const AppAuth: React.FC = () => {
  
  return (
    <div className='back'>
      <div className="logo-container">
        <img className="logo" src="https://i.ibb.co/2qL65rP/icon.png" height="35px" />
        <h2>PlagueGuard</h2>
      </div>
      <div className="main">
        <Login />
        <SignUp />
    </div>
    </div>
    
  );
};

export default AppAuth;
