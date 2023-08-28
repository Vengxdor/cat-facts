const CATS_FACTS = "https://catfact.ninja/fact"

export const getRandomFacts = async ()  => { 
    const res = await fetch(CATS_FACTS)
    const data = await res.json()

    const { fact } = data 
    return fact
}