import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Gif']);

    return (
        <div>
            <h2 id="title">GIFAPP</h2>
            <h3 id="subtitle">a GIF search engine</h3>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category } 
                        />
                    ))
                }
            </ol>
            <h5>Made by Iván Urra &copy; 2021</h5>
        </div>
    )
}
