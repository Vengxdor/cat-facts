import {useState, useEffect} from 'react'

export const useCatImage = ({ fact }) => {
    const [imgUrl, setImgUrl] = useState()
    const catPrefix = 'https://cataas.com'
    
    useEffect(() => {
      if (!fact) return
  
      const firstThreeWords = fact.split(" ", 5).join(" ")
      fetch(
        `https://cataas.com/cat/says/${firstThreeWords}?size&color=red&json=true`
      )
        .then((res) => res.json())
        .then((response) => {
          const { url } = response
          setImgUrl(`${catPrefix}${url}`)
        })
    }, [fact])
  
    return { imgUrl}
  }