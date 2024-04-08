import React, { useContext } from 'react';
import QueryContext from './context/query/QueryContext';
import Card from './Card';

const Results = () => {
    const context = useContext(QueryContext);
    const { data } = context;

    return (
        <>
            <div className='grid grid-cols-3 md:grid-cols-8 gap-3 md:m-5 p-2 md:p-5 mt-24 md:mt-8'>
                {data ? data?.map((val) => {
                    return <div className='' key={val.id} >
                        <Card item={val} /></div>
                }) : <div className='text-7xl'>Loading....</div>}

            </div>
        </>
    );
}

export default Results