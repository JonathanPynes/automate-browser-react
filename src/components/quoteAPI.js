import { useEffect, useState } from "react";

const QuoteAPI = () => {
  const [pic, setPic] = useState("");
  const [cat, setCat] = useState("");
  
  async function runAPI() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com',
        'X-RapidAPI-Key': '860d733cfemshf57f08c1679cc7ap1d598ajsnf7259d3e4621'
      }
    };
    
    let res = await fetch('https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731', options)
      let data = await res.json()
      setCat(data.cat)
      setPic("http://healthruwords.com/wp-content/uploads/")
      console.log(data)
  }
const handleRunAPI = () => {
  runAPI()
};
console.log("pic",pic)

  
  return (
    <>
    <button onClick={()=> handleRunAPI()}>Quotes</button>
    <p>{cat}</p>
    <img src={pic} alt="I am not loading haa" />
    </>
  )
}

export default QuoteAPI;