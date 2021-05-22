import { useState, useEffect } from 'react'

export const useData = (props) => {
  const [modalData, setModalData] = useState({
    state: "loading"
  })

  useEffect(() => {
    setModalData({
      state: "loading"
    })
    
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.spacexdata.com/v4/${props.type}`)
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()
        setModalData({
          state: "success",
          data
        })
      } catch {
        setModalData({
          state: "error"
        })
      }
    }

    setTimeout(fetchData, 1000)
  }, [props.type])

  return modalData
}