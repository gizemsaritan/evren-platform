import React from 'react'

export function Connect() {
  return (
     <button
      disabled
      style={{
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }}
      className='px-4 py-2 rounded'
    >
      Connect Wallet (Yakında)
    </button>
  )
}