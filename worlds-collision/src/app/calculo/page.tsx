"use client"
import { TipoImagens } from '@/types';
import React, { useEffect, useState } from 'react'
// import Image from 'next/image';

export default function Calculo() {

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
        <h1>Velocidade e Trajetória de Vênus</h1>
        {/* <Image src={imgAleatoria.hdurl} alt="Imagem"/> */}
        <h3>Velikovsky propôs que Vênus teria sido expulsa de Júpiter como um cometa e, em seguida, passou perto da Terra antes de se estabelecer na sua órbita atual. Isso teria ocorrido num curto período de tempo, algo que desafiava as equações de mecânica orbital clássica, que sugerem que as mudanças de órbita de planetas e corpos celestes são lentas e estáveis.</h3>
    </main>
  )
}
