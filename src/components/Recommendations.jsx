import React, { useContext, useEffect } from 'react';
import QueryContext from './context/query/QueryContext';
import Card from './Card';

const Recommendations = () => {
    const context = useContext(QueryContext);
    const { getRecms, recommendations } = context;

    useEffect(() => {

        getRecms();

    }, [])


    return (
        <>
            <div className='md:m-5 p-2 md:p-2'>
                <div className='grid grid-cols-3 md:grid-cols-8 gap-3 md:p-3'>
                    {recommendations && recommendations.map((val) => {
                        return <div className='' key={val.id} >
                            <Card item={val} /></div>
                    })}

                </div>
            </div>
        </>
    )
}

export default Recommendations