import React from 'react';
import { Sidebar } from './components/sidebar';
import { Summary } from './components/summary';
import { Division, GlobalStyle  } from './styles/global';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Division><Summary/></Division>
      <GlobalStyle />
      
    </div>
  );
}

export default App;
