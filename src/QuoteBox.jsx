import React from 'react';
import quotes from './quotes.json'




const QuoteBox = ({index, color} ) => {
    


    return (
            <>
        <i style={{color: color}} className="fa-solid fa-quote-left"></i>
          <h1 style={{color: color}} className='titulo'>{quotes[index].quote}</h1>
          <p style={{color: color}} className='subTitulo'>{quotes[index].author}</p>
          </>
       
    );
};

export default QuoteBox;



/*
<div className='hijo'>
<i style={{color: color}} class="fa-solid fa-quote-left"></i>
  <h1 style={{color: color}} className='titulo'>{quotes[index].quote}</h1>
  <p style={{color: color}} className='subTitulo'>{quotes[index].author}</p>
  <button style={{backgrond: color}} onClick={changeQuotes}> <i style={{color: color}} class="fa-solid fa-share"></i> </button>
</div>*/