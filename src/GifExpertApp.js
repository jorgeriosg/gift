import React  from 'react';
import {useState} from 'react';
import {AddCategory} from '../src/components/AddCategory';
import {GifGrid} from '../src/components/GifGrid';
 const  GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);
    
// const handleAdd = () => {

    //setCategories([...categories, 'radma']);
    //}

        return (
            <>
                <h1>GifExpertApp</h1>
                <AddCategory setCategories={setCategories}/>
                <hr/>



                <ol>
                    {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category}/>
        ))
                    }
                </ol>
            </>
        )
                
};

export default GifExpertApp;