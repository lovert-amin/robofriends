import React, { Component } from 'react'

const card = (props) => {
    const {name, email, id} = props;
    return(
        <div className="bg-light-green dib b3r pa3 ma2 grow bw2 shadow-5 tc">
        <img alt="robots" src={`https://robohash.org/${id}test?200*200`}/>
         <div>
             <h2>{name}</h2>
             <p>{email}</p>
         </div>  
     </div>
    );
}

export default card;