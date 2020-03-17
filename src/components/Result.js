import React from 'react'
import Image from './Image'


const Result = (props) =>{
    return(
        <div className='image-container'>
        {
            props.images.map((image) =>(
               
               <Image 
                    key={image.recipe.label}
                    image={image.recipe.image}
                    name ={image.recipe.label}
                    ingredients ={image.recipe.ingredients.length}
                    allRecipe = {image.recipe}
                    
                />
            ))
        }
        
        </div>
    )
}

export default Result