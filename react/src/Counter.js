import React from 'react'

function Counter({count,onIcrement}) {
  return (
    <div>
        <p>Contador: {count}</p>
        <button onClick={onIcrement}>Incrementar</button>
    </div>
  )
}

export default Counter