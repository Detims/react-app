import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    // cleanup function
    return () => {
        clearInterval(interval);
    }
  }, []) // Dependency array

  return (
    <>
      <p>{counter} seconds have passed.</p>
      <Link to="/">Go back</Link>
    </>
  );
}