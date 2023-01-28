import React from 'react'


const Testimonial = (props) => {
    return (
        <div className='testimonial'>
            <img src={props.photo} alt={props.name} />
            <img src={props.stars} />
            <div className="content">
                <h4>{props.name}</h4>
                <p>"{props.content}"</p>
            </div>
        </div>

    )
}


export default Testimonial;