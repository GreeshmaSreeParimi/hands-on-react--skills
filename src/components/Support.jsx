import { useEffect } from "react";
import { useState } from "react";
const pageTitle = document.title;

const Support = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count > 0){
      document.title = `${pageTitle} -- ${count}`;
    }
  });

  return (
    <button className="outline" onClick= {()=> setCount(count+1)}>
      {count === 0 ? "Click to support" :`Supported ${count} times`}
      </button>
  )
}


export default Support;