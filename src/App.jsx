
import Sidebar from './components/Sidebar';
import './styles/components/app.sass';
import { Outlet } from 'react-router-dom';

import '../src/components/ProjectsContainer'


function App() {
 

  return (
    
    <div id="portifolio">
      <h1>Leonardo Botelho</h1>
      <Sidebar />
     
      <Outlet/>
    </div>
    
   
  )
}

export default App
