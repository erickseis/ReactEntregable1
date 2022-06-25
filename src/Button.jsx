import React from 'react';



const Button = ({color, changeQuotes}) => {

    return (
       
            <button style={{backgrond: color}} onClick={changeQuotes}> <i style={{color: color}} className="fa-solid fa-share"></i> </button>
      
    );
};

export default Button;