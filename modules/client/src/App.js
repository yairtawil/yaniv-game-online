import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import Theme from './components/Theme';
import Auth from './components/Auth';
import { Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import { useRecoilState } from 'recoil';
import { UserState } from './state/user';
import BaseStyle from './components/BaseStyle';

const App = () => {
  const [userState] = useRecoilState(UserState);
  const homeElement = userState.user ? <Home /> : !userState.initialized ? <div>...loading</div> :
    <Navigate to={'/welcome'} />;

  return (
    <StyledEngineProvider injectFirst>
      <Theme>
        <BaseStyle>
          <Auth>
            <Routes>
              <Route path='/welcome' element={<Welcome />} />
              <Route path='/' element={homeElement} />
            </Routes>
          </Auth>
        </BaseStyle>
      </Theme>
    </StyledEngineProvider>
  );
};

export default App;
