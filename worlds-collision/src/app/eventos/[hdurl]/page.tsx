import React from 'react'

export default function Evento({params}: {params:{hdurl:string}}) {
    return (
      <div className="conteudo">
          <h2>Imagem {params.hdurl}</h2>
      </div>
    )
  }