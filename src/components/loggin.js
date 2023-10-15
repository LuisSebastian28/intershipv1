import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';

function Login(){
    const [user, setUser] = useState({});

    return(
        <div id='login'
          style={{
            display: 'flex',
            flex: 1,
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000032',
          }}
        >
          <GoogleOAuthProvider clientId="214278282169-1kav589ffe2qmn9l3jo6ulshg5blfm6g.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {
                var doceded = jwt_decode(credentialResponse.credential)
                console.log(doceded);
                setUser(doceded)
                window.location.href = '/Hi';

              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />            
          </GoogleOAuthProvider>
        </div>
    )
}

export default Login;
