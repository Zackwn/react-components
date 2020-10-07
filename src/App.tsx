import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Other1 from './pages/Other1';
import Other2 from './pages/Other2';

function App() {
  return (
    <BrowserRouter>
      <Route path='/other1' exact component={Other1} />
      <Route path='/other2' exact component={Other2} />
    </BrowserRouter>
  )
}

export default App;
