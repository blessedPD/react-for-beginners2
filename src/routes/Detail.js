import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { useEffect } from 'react';
import {useParams} from "react-router-dom";

function Detail(){
    const {id} = useParams(); //url에 있는 정보를 알려줌
    
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        
    };
    useEffect(()=>{
        getMovie();
        
    }
    ,[]);

    return <h1>Detail</h1>;
}

export default Detail;