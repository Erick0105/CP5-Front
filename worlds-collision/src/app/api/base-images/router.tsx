import { TipoImagens } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
    
    try {
        //A Api certa é essa "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=d0YjRyicfDKlGDixyh8BnNMM0r5isSoyx5zBdXN8&count=10');
    
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const dados:TipoImagens[] = await response.json();
        
        const images = dados.map(image => {
    
            const datas = image.date.split("-",3)
            return {
                nameImage:image.image,
                dataImage: datas
            }
        });
    
        return NextResponse.json(images);
    } catch (error) {
        console.error("Erro:", error);
        return NextResponse.json({ error: "Erro ao buscar as imagens" }, { status: 500 });
    }
}