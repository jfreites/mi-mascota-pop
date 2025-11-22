"use client";

import { useState } from "react";

export default function CartoonUploader() {
    const [previewOriginal, setPreviewOriginal] = useState<string | null>(null);
    const [previewCartoon, setPreviewCartoon] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Preview de la imagen original
        const localUrl = URL.createObjectURL(file);
        setPreviewOriginal(localUrl);

        const formData = new FormData();
        formData.append("image", file);

        setLoading(true);
        try {
            const res = await fetch("/api/process-image", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.processedImageBase64) {
                setPreviewCartoon(`data:image/png;base64,${data.processedImageBase64}`);
            } else if (data.processedImageUrl) {
                setPreviewCartoon(data.processedImageUrl);
            } else {
                console.error("No image returned from API");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4 rounded-lg bg-amber-500 p-4">
            <input type="file" accept="image/*" onChange={handleChange} />

            {previewOriginal && (
                <div>
                    <p>Original:</p>
                    <img
                        src={previewOriginal}
                        alt="Original"
                        className="max-w-xs border rounded"
                    />
                </div>
            )}

            {loading && <p>Generando caricatura...</p>}

            {previewCartoon && (
                <div>
                    <p>Caricatura:</p>
                    <img
                        src={previewCartoon}
                        alt="Caricatura"
                        className="max-w-xs border rounded"
                    />
                </div>
            )}
        </div>
    );
}