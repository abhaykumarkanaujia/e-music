import React, {useContext} from 'react';
import QueryContext from './context/query/QueryContext';

const Cards = ({ item }) => {
    const context = useContext(QueryContext);
    const {setTrack} = context;
    const OnClick = ()=>{
        setTrack(item.preview_url);
    }
    return (
        <>
            <div className=''>
                <div title={item.name} onClick={OnClick} className='flex drop-shadow-lg object-center rounded-md h-34 hover:shadow-2xl-lg flex-col hover:bg-yellow-200 hover:cursor-pointer m-2 p-2'>
                    <div className='w-100'>
                        <img className='w-full h-22 md:h-28 rounded-sm' title={item.name} src={item.album.images[0].url} alt="..." />
                    </div>
                    <div className='pt-2 pb-2 mt-2'>
                        <h2 className='text-sm'>{item.name.slice(0, 12)}...</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards