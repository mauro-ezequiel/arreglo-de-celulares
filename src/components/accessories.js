import React from "react";
import Card from "./products";
import csc from '../img/csc.jpg';
import '../style/accessories.css';
import air from '../img/air.webp';
import fundas9 from '../img/fundas9.jpg';

const Accessories = () => {
    return( 

        <>
        <div className="row" >
            <div className="col-md-6">
            <div className="container" >
       
            <img className="image1"
             src={air}
             alt= 'etc'/>

        
            </div>
            </div>

            <div className="col-md-3">
          
               <Card
               image={csc}
                title= "type c charger"
               price= '5.000'
               paragraph= 'type c charger'
               />
            </div>

            
            <div className="col-md-3">
        <Card

           image={fundas9}
           title= " cover samsung s9"
           price= '5.000'
           paragraph= 'latex cover'
        />

            </div>
            
        </div>
        
        </>

    );
}


export default Accessories;