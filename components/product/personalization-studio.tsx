"use client";

export default function PersonalizationStudio({ config }: { config: {} }) {

    const switchTab = (tab: string) => {
        const tabUpload = document.getElementById('tab-upload') as HTMLButtonElement;
        const tabDesign = document.getElementById('tab-design') as HTMLButtonElement;
        const contentUpload = document.getElementById('content-upload') as HTMLDivElement;
        const contentDesign = document.getElementById('content-design') as HTMLDivElement;

        tabUpload?.classList.remove('bg-white', 'text-pop-purple');
        tabDesign?.classList.remove('bg-white', 'text-pop-purple');
        contentUpload?.classList.remove('block');
        contentDesign?.classList.remove('block');

        if (tab === 'upload') {
            tabUpload?.classList.add('bg-white', 'text-pop-purple');
            contentUpload?.classList.add('block');
        } else {
            tabDesign?.classList.add('bg-white', 'text-pop-purple');
            contentDesign?.classList.add('block');
        }
    };

    const switchDesign = (design: string) => {
        const designBtns = document.querySelectorAll('.design-btn') as NodeListOf<HTMLButtonElement>;
        designBtns.forEach(btn => btn.classList.remove('border-pop-yellow'));
        const selectedBtn = document.querySelector(`[data-design="${design}"]`) as HTMLButtonElement;
        selectedBtn?.classList.add('border-pop-yellow');
    };

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pop-cyan/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="bg-pop-purple text-white p-1 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>
                </span>
                ¡Personalízalo!
            </h3>

            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-xl mb-6">
                <button id="tab-upload" onClick={() => switchTab('upload')} className="flex-1 py-2 rounded-lg font-bold text-sm transition-all shadow-sm bg-white text-pop-purple">Subir Foto</button>
                <button id="tab-design" onClick={() => switchTab('design')} className="flex-1 py-2 rounded-lg font-bold text-sm transition-all text-gray-500 hover:text-gray-700">Elegir Diseño</button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">

                {/* Inputs Area */}
                <div className="flex-1 space-y-4">

                    {/* Tab Content: Upload */}
                    <div id="content-upload" className="block animate-fade-in">
                        <label className="block text-sm font-bold text-gray-600 mb-2">Sube la foto de tu mascota 📸</label>
                        <input type="file" id="file-input" accept="image/*" className="block w-full text-sm text-gray-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-pop-pink/10 file:text-pop-pink
                                        hover:file:bg-pop-pink/20 cursor-pointer
                                        "/>
                        <p className="text-xs text-gray-400 mt-1">Recomendado: PNG con fondo transparente.</p>
                    </div>

                    {/* Tab Content: Designs */}
                    <div id="content-design" className="hidden animate-fade-in">
                        <label className="block text-sm font-bold text-gray-600 mb-2">Elige un sticker ✨</label>
                        <div className="grid grid-cols-4 gap-2">
                            <button onClick={() => switchDesign('https://cdn-icons-png.flaticon.com/512/616/616408.png')} className="design-btn border-2 border-transparent hover:border-pop-yellow rounded-xl p-1 bg-gray-50 transition"><img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" className="w-full" /></button>
                            <button onClick={() => switchDesign('https://cdn-icons-png.flaticon.com/512/1076/1076928.png')} className="design-btn border-2 border-transparent hover:border-pop-yellow rounded-xl p-1 bg-gray-50 transition"><img src="https://cdn-icons-png.flaticon.com/512/1076/1076928.png" className="w-full" /></button>
                            <button onClick={() => switchDesign('https://cdn-icons-png.flaticon.com/512/1998/1998610.png')} className="design-btn border-2 border-transparent hover:border-pop-yellow rounded-xl p-1 bg-gray-50 transition"><img src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png" className="w-full" /></button>
                            <button onClick={() => switchDesign('https://cdn-icons-png.flaticon.com/512/2395/2395796.png')} className="design-btn border-2 border-transparent hover:border-pop-yellow rounded-xl p-1 bg-gray-50 transition"><img src="https://cdn-icons-png.flaticon.com/512/2395/2395796.png" className="w-full" /></button>
                        </div>
                    </div>

                    {/* Text Input */}
                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-2">Añade Texto (Nombre, frase...)</label>
                        <input type="text" id="text-input" placeholder="e.g. Fluffy" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pop-cyan focus:ring-2 focus:ring-pop-cyan/20 outline-none transition font-bold text-gray-700" />
                    </div>
                </div>

                {/* Preview Area */}
                <div className="w-full md:w-48 shrink-0">
                    <label className="block text-sm font-bold text-gray-600 mb-2 text-center">Vista Previa</label>
                    <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center group">
                        {/* Base Fabric Texture/Color */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-50"></div>

                        {/* User Image / Design Layer */}
                        <img id="preview-image" src="https://cdn-icons-png.flaticon.com/512/616/616408.png" className="w-24 h-24 object-contain z-10 drop-shadow-lg transition-all duration-300" />

                        {/* User Text Layer */}
                        <div id="preview-text" className="absolute bottom-4 left-0 w-full text-center font-bold text-pop-purple text-xl z-20 drop-shadow-md pointer-events-none" style={{ textShadow: "2px 2px 0px #fff" }}>
                            Fluffy
                        </div>

                        {/* Watermark/Instructions */}
                        <span className="absolute top-2 right-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest opacity-50">Preview</span>
                    </div>
                </div>

            </div>
        </div>
    );
}