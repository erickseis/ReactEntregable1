import './App.css'
import QuoteBox from './QuoteBox'
import Button from './Button'
import { useState } from 'react'
import quotes from './quotes.json'


function App() {

  const colors = ["#FFA500", "#FFD700"	, "#DA70D6", "#6A5ACD", "#90EE90", 	"#8FBC8B", "#AFEEEE", "#CD853F"]

  const random = Math.floor(Math.random() * quotes.length);
  const[index, setIndex] = useState(random);

 const changeQuotes = () => {
  const random = Math.floor(Math.random()*quotes.length);
  setIndex(random)
}

const randomColorI = Math.floor(Math.random() * colors.length);
const color = colors[randomColorI]
  
document.body.style = `background: ${color}`;
  return (
    <div className='contenedor'>

        <div className='hijo'>
        <QuoteBox color={color}  index={index} />
        <Button color={color} changeQuotes={changeQuotes}/>
        </div>

    </div>

  )
}

export default App
