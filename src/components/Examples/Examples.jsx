import "./Examples.scss";

import { useState } from "react";

const Examples = () => {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [delay, setDelay] = useState(1000);

  /*   console.log(
    "this console log will always run when the component is mounted or re-renders"
  ); */
  /* -------------------------------------------------------------------------- */
  /*                       useEffect with no dependencies                       */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    //console.log("useEffect runs on every re-render");
    console.log("here are the instructions to fetch data from somewhere");
  });

  /* -------------------------------------------------------------------------- */
  /*                      useEffect with Empty Dependencies                     */
  /* -------------------------------------------------------------------------- */

  /*   useEffect(() => {
    //console.log("useEffect runs once, when component mounts");
    console.log("data fetched");
  }, []); */

  /* -------------------------------------------------------------------------- */
  /*                         useEffect With Dependencies                        */
  /* -------------------------------------------------------------------------- */

  /*  useEffect(() => {
    console.log("useEffect runs when dependency changes");
  }, [count]);
 */
  /* -------------------------------------------------------------------------- */
  /*                           useEffect With Cleanup                           */
  /* -------------------------------------------------------------------------- */

  /*   useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`${delay} ms elapsed`);
    }, delay);

    return () => clearInterval(intervalId);
  }, [delay]); */

  return (
    <div className="examples">
      <h1>
        <code>useEffect</code> Examples
      </h1>
      <p>
        Below are 4 examples of <code>useEffect</code>.{" "}
        <strong>Comment and uncomment </strong>
        the examples in your Fruit.js to see the differences.
      </p>
      <ol className="ol">
        <div className="ol__code">
          <li>useEffect With No Dependencies</li>
          <pre>
            {`useEffect(() => { 
      console.log("useEffect runs on every re-render");
  });`}
          </pre>
        </div>
        <div className="ol__code">
          <li>useEffect With Empty Dependencies</li>
          <pre>
            {`useEffect(() => {
      console.log('useEffect runs once, when component mounts');
  }, []);`}
          </pre>
        </div>
        <div className="ol__code">
          <li>useEffect With Dependencies</li>
          <pre>
            {`useEffect(() => {
      console.log('useEffect runs when dependency changes');
  }, [fruit]);`}
          </pre>
          <button onClick={() => setFruit("Apple")}>Apple</button>
          <button onClick={() => setFruit("Banana")}>Banana</button>
          <button onClick={() => setFruit("Orange")}>Orange</button>
          <p>{fruit}</p>

          <div>
            <pre>{`useEffect(() => {
      console.log("useEffect runs when dependency changes");
  }, [count]);`}</pre>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
          </div>
        </div>
        <div className="ol__code">
          <li>useEffect With Cleanup</li>
          <pre>
            {`useEffect(() => {
      const intervalID = setInterval(() => {
          console.log(${delay} ms elapsed...);
      }, delay);
      return () => clearInterval(intervalId);
  }, [delay]);`}
          </pre>
          <p>Current Delay: {delay} ms</p>
          <button onClick={() => setDelay(delay + 500)}>Increase Delay</button>
          <button onClick={() => setDelay(delay - 500)}>Decrease Delay</button>
        </div>
      </ol>
    </div>
  );
};

export default Examples;
