import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
console.log('hi')
const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [text, setText] = useState('')

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get('https://monorepo-actions.herokuapp.com/')
      setText(result.data.text)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div>
      <p style={{color:'red'}}>{isLoading ? 'Loading...' : text}</p>
    </div>
  );
}

export default App
