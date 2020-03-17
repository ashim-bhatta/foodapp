import React from 'react'


const MoreInfo = (props ) =>{
    return(
        <div id='moreInfo' >
            <div className="content">
                {
                    props.ing
                }
                <img src={props.image} />
                {
                    props.name
                }
            </div>
        </div>
    )
}

export default MoreInfo