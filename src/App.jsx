import { useState } from 'react';
import './App.css';
import QueryState from './components/context/query/QueryState';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { BrowserRouter} from 'react-router-dom';


function App() {

  const [nav, setNav] = useState(false);



  return (
    <>
      <QueryState>
        <BrowserRouter>

          <div className='md:grid md:grid-cols-12 bg-fixed'>

            <section className='md:w-40 md:col-span-1'>
              <Sidebar nav={nav} setNav={setNav} />
            </section>

            <section onClick={()=>{setNav(false)}} className='md:col-span-11 mt-10 md:mt-0'>
              <Home/>
            </section>
          </div>
        </BrowserRouter>

      </QueryState>
    </>
  )
}

export default App
