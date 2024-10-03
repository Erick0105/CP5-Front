"use client"
import { TipoImagens } from '@/types';
import React, { useEffect, useState } from 'react'
// import Image from 'next/image';

export default function Orbitas() {

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
        <h1>Órbitas Planetárias e Instabilidade</h1>
        {/* <Image src={imgAleatoria.hdurl} alt="Imagem"/> */}
        <h3>Velikovsky sugeriu que Vênus, Marte e outros corpos celestes poderiam ter passado perto da Terra, perturbando as órbitas planetárias de forma significativa. Isso implicava em uma instabilidade no sistema solar que não era compatível com os cálculos newtonianos de órbitas estáveis a longo prazo.</h3>
    </main>
  );
}