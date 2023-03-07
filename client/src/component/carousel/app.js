import React from 'react';
import Carousel from 'react-material-ui-carousel'
import '../../app.scss';

export default function App(){
    var imgs = ["/img/gallery1.jpeg", "/img/gallery2.jpeg", "/img/gallery3.jpeg"]
    return (
        <div>
        <Carousel>
            {imgs.map((src)=>(
                <img src={src}/>
            ))}
        </Carousel>
        </div>
    )
}