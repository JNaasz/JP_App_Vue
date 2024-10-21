import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Box from '@mui/material/Box';

import LandingPage from './layouts/LandingPage';

function App() {
  const landingMsg: String = "Well hello there";
  return (
    <div className="App">
      <div className="main">
        <Box>
          {/* Tab component */}
          <LandingPage msg={landingMsg} />
        </Box>
      </div>
    </div>
  );
}

export default App;
