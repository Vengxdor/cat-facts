import { useEffect, useState } from "react"
import { getRandomFacts } from "../logic/facts"

export const useCatFact = () => {
    //! REMIND:  always try to never export the changer
    const [fact, setFact] = useState()
    
    const refreshFact = () => {
      getRandomFacts().then((newFact) => setFact(newFact))
    }
  
    useEffect(() =>  refreshFact,[])
    return { fact, refreshFact }
  }