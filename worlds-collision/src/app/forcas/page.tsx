"use client"
import { TipoImagens } from '@/types';
import React, { useEffect, useState } from 'react'
// import Image from 'next/image';

export default function Forcas() {

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
    // Adicionar imagem via API
    <main className="conteudo">
        <h1>Forças Gravitacionais e Eletromagnéticas</h1>
        {/* <Image src={imgAleatoria.hdurl} alt="Imagem"/> */}
        <h3>Velikovsky propôs que as forças eletromagnéticas entre planetas poderiam ter desempenhado um papel significativo nos encontros próximos, algo que contraria o modelo puramente gravitacional aceito na física celeste. Ele sugeriu que os cálculos gravitacionais sozinhos não explicavam adequadamente as interações planetárias propostas em suas teorias.</h3>
    </main>
  )
}
