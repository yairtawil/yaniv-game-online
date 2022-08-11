import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { UserState } from '../state/user';

export default function Auth({ children }) {
  const [, setUserState] = useRecoilState(UserState);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
      setUserState({
        initialized: true,
        user: user ? JSON.parse(JSON.stringify(user)) : user,
      });
    });
  }, []);

  return children;
}
