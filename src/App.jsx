import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Counter from './Counter'
function App() {
  let [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  }
  const minus = () => {
    setCount(count - 1);
  }
  const r = () => {
    setCount(0);
  }
  return (

    <div align="center">
      <Counter
        count={count}
        plus={plus}
        minus={minus}
        r={r}
      />
    </div>

  )
}
export default App;