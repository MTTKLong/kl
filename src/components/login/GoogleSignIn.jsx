
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
  const handleLogin = useGoogleLogin({
    flow:'auth-code',
    onSuccess: (response)=>{
      console.log('check', response.code);
    },
    onError: ()=>{
      console.log('error');
    }
  });

  return (
     <button onClick={() => handleLogin()}>Login with google</button>
  )
}

export default GoogleSignIn;