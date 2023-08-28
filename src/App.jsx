// import { useEffect, useState } from "react"
// import { getRandomFacts } from "./logic/facts"

import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"

function App() {
  // const CATS_URL = "https://cataas.com"
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <>
      <main>
        <h1 className="title">Cats Facts</h1>
        <div className="imageArea">
          {imgUrl && (
            <img
              className="catImg"
              src={imgUrl}
              alt={`An Image take from this side ${imgUrl}`}
            />
          )}
        </div>

        <h2 className="fact">{fact}</h2>
        <button className="newCat" onClick={handleClick}>New fact</button>
      </main>
    </>
  )
}

export default App
