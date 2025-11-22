import OpenAI from "openai";
import { toFile } from "openai/uploads";

// export const runtime = "nodejs";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
        return Response.json(
            { error: "No se envió ninguna imagen" },
            { status: 400 }
        );
    }

    try {
        // Convierte a buffer o base64 según necesite tu API
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Moderation
        const moderation = await openai.moderations.create({
            model: "omni-moderation-latest",
            input: buffer.toString("base64"),
        });

        if (moderation.results[0].flagged) {
            return Response.json(
                { error: "La imagen contiene contenido no permitido." },
                { status: 400 }
            );
        }

        // MUY IMPORTANTE: usar toFile y pasar mimetype
        const openaiFile = await toFile(buffer, file.name || "image.png", {
            type: file.type || "image/png",
        });

        // Crear un objeto Blob de Node (si estás en Node 18+ ya existe Blob globalmente)
        const blob = new Blob([buffer], { type: file.type || "image/png" });

        // Llamada a OpenAI para generar una versión caricatura
        // ⚠️ Ajusta el endpoint según la versión del SDK / modelo de imágenes que uses
        // const imageResult = await openai.images.generate({
        //     model: "gpt-image-1", // o el modelo de imágenes que estés utilizando
        //     prompt: "Convierte esta foto en una versión estilo caricatura, colorida y divertida. Fondo blanco.",
        //     size: "1024x1024",
        //     // En algunos SDKs se usa 'image' o 'input_image' o 'prompt + image' como parámetro
        //     // Aquí simulamos que se puede pasar la imagen como "image"
        //     // Revisa la firma exacta en la doc de tu versión del SDK
        //     input_image: blob as any,
        //     n: 1, // solo quiero una imagen
        // } as any);

        const imageResult = await openai.images.edit({
            model: "gpt-image-1",
            prompt: `Convierte esta imagen en una ilustración tipo cartoon, pero mantén completamente las proporciones, anatomía y rasgos originales del sujeto (persona o mascota). 
No exageres rasgos faciales, no agrandes ojos, no distorsiones la forma de la cabeza, hocico, nariz o orejas. 
El estilo debe ser suave, limpio y ligeramente estilizado, similar a un “digital art cartoon” profesional, sin rasgos caricaturescos ni exageración de facciones.
Mantén el fondo blanco y conserva el color y la textura natural del sujeto, pero con acabado ilustrado y bordes suaves.`,
            size: "1024x1024",
            image: openaiFile,
            quality: "low",
            background: "transparent",
            //response_format: "b64_json", // "url",
            n: 1,
        });

        console.log(imageResult.usage);

        if (!imageResult.data) {
            return Response.json(
                { error: "Failed to generate caricature from image." },
                { status: 500 }
            );
        }

        // Normalmente la respuesta trae base64 o URL
        // Ejemplo si regresa base64:
        // const base64Image = imageResult.data[0].b64_json as string | undefined;
        // const urlImage = imageResult.data[0].url as string | undefined;
        const base64Image = imageResult.data[0].b64_json;

        return Response.json({
            processedImageBase64: base64Image || null,
        });
    } catch (error) {
        console.error("Error processing image with OpenAI:", error);
        return Response.json(
            { error: "Failed to process image" },
            { status: 500 }
        );
    }
}