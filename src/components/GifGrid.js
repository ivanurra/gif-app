import React, {useState, useEffect} from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    },[])

    const getGifs = async() => {

        // API SEARCH ENDPOINT
        // You need a key: developers.giphy.com
        const url = process.env.REACT_APP_API_URL

        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log( gifs );
        setImages( gifs );
    }

    return (
        <div>
            <h3> { category } </h3>
            
                {
                    images.map( img => (
                        <GifGridItem i
                            key={ img.id }
                            {...img}
                        />
                    ))
                }
            
        </div>
    )
}
