import { useState, useEffect } from 'react'
import { getGifts } from '../../src/components/helpers/getGifts';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifts( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])



    return state;
}