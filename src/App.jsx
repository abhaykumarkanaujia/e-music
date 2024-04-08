import './App.css';
// import SearchPage from './components/SearchPage';
import QueryState from './components/context/query/QueryState';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {




  return (
    <>
      <QueryState>
        <BrowserRouter>

          <div className='md:grid md:grid-cols-12 bg-fixed'>

            <section className='md:w-40 md:col-span-1'>
              <Sidebar />
            </section>

            <section className='md:col-span-11'>
              <Home/>
            </section>
          </div>
        </BrowserRouter>

      </QueryState>
    </>
  )
}

export default App
