import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.sass'
import { data, MasonryLayout } from './MasonryLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MasonryLayout data={data} />
    </div>
  )
}

export default App
