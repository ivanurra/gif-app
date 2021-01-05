import React, {useState, useEffect} from 'react';

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs();
    },[])

    const getGifs = async() => {

        // API SEARCH ENDPOINT
        // You need a key: developers.giphy.com
        // URL = api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=YOUR_KEY
        const url = process.env.URL;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs);
    }

    return (
        <div>
            <h3> { category } </h3>
            <h3> { count } </h3>
            <button onClick={ ()=> setCount( count + 1 ) }></button>
        </div>
    )
}
