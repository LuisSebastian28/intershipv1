import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

function App() {
  return (
    <div>Hi, Welcome
      <GoogleOAuthProvider clientId="214278282169-1kav589ffe2qmn9l3jo6ulshg5blfm6g.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>;

    </div>

  );
}

export default App;
