import React, { useContext, useEffect, useState } from 'react';
import QueryContext from './context/query/QueryContext';

const Search = () => {

    const context = useContext(QueryContext);
    const { getKey, getQuery } = context;
    const [query, setQuery] = useState("");

    const OnChange = (e)=>{
        setQuery(e.target.value);
        getQuery(query);
    }

    useEffect(() => {
        getKey();
    }, []);



    return (
        <>
            <div className='m-1 fixed top-0 left-0 right-0 md:left-36 flex p-2 rounded-md justify-left w-100 mt-14 md:mt-2 md:mx-4 md:mr-6'>
                <input onChange={OnChange}
                className='w-full rounded-xl flex border border-slate-300 px-3 py-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='search'
                id = "query"
                name= "query"
                value={query} />
            </div>
        </>
    )
}

export default Search