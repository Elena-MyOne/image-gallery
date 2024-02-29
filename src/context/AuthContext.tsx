import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import FirebaseAuth from '../handlers/auth';

type User = {
  id: string;
  displayName: string;
  photoURL: string;
};

const { signIn, signOut, getCurrentUser } = FirebaseAuth;

export interface State {
  login: () => Promise<any>;
  logout: () => Promise<void>;
  authenticate: () => Promise<any>;
  currentUser: User | null;
}

export const AuthContext = createContext<State | null>(null);

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = useCallback(() => signIn().then(setCurrentUser), []);
  const logout = useCallback(() => signOut().then(() => setCurrentUser(null)), []);
  const authenticate = useCallback(() => getCurrentUser().then(setCurrentUser), []);

  const value = useMemo(() => {
    return {
      login,
      logout,
      authenticate,
      currentUser,
    };
  }, [login, logout, authenticate, currentUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): State | null => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  return authContext as State;
};

export default AuthProvider;
