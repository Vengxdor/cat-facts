import { useEffect, useState } from "react"
function App() {
  const CATS_FACTS = "https://catfact.ninja/fact"
  const CATS_URL = 'https://cataas.com'
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  // get the cat facts
  useEffect(() =>{
    fetch(CATS_FACTS)
      .then(res => res.json())
      .then(data => setFact(data.fact))
      
  },[])


  //get the cat images
  useEffect(() =>{
    if(!fact) return
   
    const firstThreeWords = fact.split(' ', 5).join(' ')
    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size&color=red&json=true`)
      .then(res => res.json())
      .then(response => { 
        const { url } = response 
        setImgUrl(`${CATS_URL}${url}`)
      })
  },[fact])



  return(
    <>
      <main>
        <h1 className="title">Cats Facts</h1>
        {imgUrl && <img className="catImg" src={imgUrl} alt={`An Image take from this side ${imgUrl}`} />}

        <h2 className="fact">{fact}</h2>
      </main>
    </>
  )

}

export default App
