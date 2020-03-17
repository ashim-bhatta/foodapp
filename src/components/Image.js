import React from 'react'
// import MoreInfo from './MoreInfo'

class Image extends React.Component {
    // showMoreInfo =() =>{
    //     document.querySelectorAll('.steps').style.display='flex'
    // }
    render(){
        return(
                <div className='image'>
                <img src={this.props.image} />
                <div className='empty'>
    
                </div>
                <div className="steps" id='steps'>
                    <h1> close</h1>
                    <ul>
                    {this.props.allRecipe.ingredientLines.map((line)=>(
                       
                    
                            <li key={this.props.allRecipe}>
                                {line}
                            </li>
                        
                    ))}
                    {console.log(this.props)}
                    </ul>
                </div>
                <div className='image-content' >
                    <div className='text'>
                        <h1>
                            {this.props.name}
                    
                        </h1>
                        <p>Total Ingredients : {this.props.ingredients}</p>
    
                        <span> Know To Make It &#8594;</span>
                    </div>
                </div>
            </div>
               
        )
    }
}
export default Image