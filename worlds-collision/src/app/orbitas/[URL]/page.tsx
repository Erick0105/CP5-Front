import React from 'react'

export default function Orbita({params}: {params:{url:string}}) {
    return (
      <div>
          <h2>Imagem {params.url}</h2>
      </div>
    )
  }