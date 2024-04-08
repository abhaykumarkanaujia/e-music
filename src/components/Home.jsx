import React, { useEffect, useContext } from 'react';
import QueryContext from './context/query/QueryContext';
import Recommendations from './Recommendations';
import Play from './audioPlayer/Play';
import {Routes, Route} from 'react-router-dom';
import SearchPage from './SearchPage';

const Home = () => {
  const context = useContext(QueryContext);
  const { getKey, auth, token } = context;

  useEffect(() => {
    const fn = async () => {
      await getKey();
    }

    fn();
    if (auth) console.log(token);

  }, [auth])


  return (
    <>
    <div className=''>
    <div className='container'>
        <div className='bg-local container'>
        <Routes>
          <Route exact path='/' element={auth && <Recommendations />}/>
          <Route exact path='/search' element={auth && <SearchPage/>}/>
        </Routes>
        </div>
        <Play />
      </div>

    </div>
      

    </>
  )
}

export default Home