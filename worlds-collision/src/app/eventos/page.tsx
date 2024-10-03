"use client"
import { TipoImagens } from '@/types';
import React, { useEffect, useState } from 'react'
// import Image from 'next/image';

export default function Eventos() {

  const [imagens, setImagens] = useState<TipoImagens[]>([]);

  useEffect(() => {
    const chamadaApi = async () =>{
      const response = await fetch('http://localhost:3000/api/base-images');
      const imgsDados = await response.json();
      setImagens(imgsDados);
    }

    chamadaApi();

  }, [])

  const imgAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

  return (
    // adicionar imagem via API
    <main className="conteudo">
        <h1>Cronologia dos Eventos</h1>
        {/* <Image src={imgAleatoria.hdurl} alt="Imagem"/> */}
        <h3>Ele questionou a cronologia aceita de eventos históricos e astronômicos, propondo que certos eventos catastróficos ocorreram em tempos muito mais recentes do que a ciência convencional sugere. A ideia de que planetas poderiam ter mudado de órbita tão recentemente desafiava as teorias astronômicas da época, que se baseavam em cálculos de órbitas estáveis por milhões de anos.</h3>
    </main>
  )
}
