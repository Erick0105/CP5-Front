import { TipoImagens } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
    
        //A Api certa é essa "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=d0YjRyicfDKlGDixyh8BnNMM0r5isSoyx5zBdXN8&count=10');
    
        const dados:TipoImagens[] = await response.json();
        
        const images = dados.map(image => {
    
            return {
                titleImage:image.title,
                urlImage: image.hdurl
            }
        });
    
        return NextResponse.json(images);

}