import React, { FC, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from './firebase';

interface AuthProviderProps {
  children: React.ReactNode; 
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return <>{children}</>;
};

export default AuthProvider;
