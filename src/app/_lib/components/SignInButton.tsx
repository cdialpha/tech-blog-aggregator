
import { signIn } from '../actions/auth';

export default function SignInButton() {
  return (
    <form action={signIn}>
      <button type="submit">Sign in</button>
    </form>
  );
}


// Future Work 
// By binding signIn to Keycloak, we maintain flexibility for future integrations with multiple providers.
// 'use server'; 
// import { signIn as rawSignIn } from './auth'; 
// export const signIn = rawSignIn.bind(null, 'keycloak')
