import React from 'react';

const Card = ({ personaje }) => {

    const { char_id, name, nickname, status, ocupation, img } = personaje

    return (
        <div className="card my-3 shadow p-3 mb-5 bg-body rounded">
            <img src={img} className="card-img-top" alt={name}/>
                <div className="card-body">

                <span className={`btn btn-sm foat-end ${status.toLowerCase().includes("alive")? "btn-success": "btn-danger"}`}>{status}</span>

                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{nickname}</p>
                    
                <div className='row text-left'>
                    <p className='text-muted'>
                        Occupation
                    </p>
                <hr />    

                {ocupation?.map((item, index)=>{
                    return(
                        <strong key={index}>&bull; {item}</strong>
                    )
                }
                )}

                </div>


                </div>
        </div>
    );
};

export default Card;