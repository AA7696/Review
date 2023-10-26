import { useState } from 'react'
import './App.css'
import Review from './component/Review'

function App() {

  const [index, setIndex] = useState(0);


  return (
    <div className="app">
      <Review index={index} setIndex={setIndex} />
    </div>
  )
}

export default App
