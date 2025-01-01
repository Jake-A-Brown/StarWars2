import React from 'react'

const Card = (props) => {
    const { title, image, description, homeworld } = props;

    return (
        <React.Fragment>
            <div className='card' style={{border:"solid, white",  display:'flex'}} >
                <div className='card-conatainer' style={{display:'flex', flexDirection:"column", alignItems:'center'}}>
                    <div className='card-header'>
                        <div className='card-title'>{title}</div>
                        <div>{homeworld}</div>
                        <div className='card-image'>
                            <img style={{width:'300px'}} src={image} alt={title}/>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='card-text'>{description}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;