import {useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react';
import { supabase } from '../supabase.ts';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';


const Login = ({ onLogin, setShowAuth }) => {

    const navigate = useNavigate()
    const handleSubmit = () =>{

        navigate('/App')
    }

  const handleSession = (session) => {
    if (session?.user) {
      handleLogin(session);

      
    }
  };
  return (
    
    
    <div className="login">
      <header className="App-Header">

        
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={['google']}
          onClick={handleSubmit}
          handleSession={handleSession}// Call handleLogin when the session is available
        />
      </header>
      <button className="submit--button--login" className="login--btn" onClick={handleSubmit} >You may now go to the podcast</button>
    </div>
    
  );
};
export default Login;