import React from 'react';
import Imagen from './Imagen';

function Comentario(props) {
    return (
        <div className="media">
            <Imagen imgUrl={props.imgUrl}/>
            <div className="media-body">
                <h5 className="mt-0">{props.name}</h5>
                {props.comment}
            </div>
        </div>
    )
}

export default Comentario

