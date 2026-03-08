import React from 'react';

const Definition = () => {
    return (
        <section id="definition" className="relative w-full py-32 px-6 md:px-16 lg:px-32 bg-andalusia-cream flex flex-col items-center text-center z-10">

            <div className="max-w-4xl mx-auto space-y-16">

                {/* Title & Main Definition */}
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-serif text-andalusia-navy mb-8">
                        Tamaghrabit
                    </h2>
                    <p className="text-lg md:text-2xl font-sans font-light leading-relaxed text-andalusia-charcoal">
                        Tamaghrabit is the Moroccan way of life — a harmonious, living fusion of multiple rich civilizations that have shaped Morocco across centuries: the <span className="text-andalusia-gold font-medium">Amazigh</span>, the <span className="text-andalusia-gold font-medium">Arab</span>, the <span className="text-andalusia-gold font-medium">Andalusian</span>, and the <span className="text-andalusia-gold font-medium">Hassani (Saharan)</span>. It is not a single identity, but a beautifully layered one.
                    </p>
                </div>

                {/* City Teasers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-andalusia-gold/20 text-left">

                    <div className="space-y-4 group">
                        <h3 className="text-2xl font-serif text-andalusia-navy group-hover:text-andalusia-gold transition-colors duration-300">Amazigh</h3>
                        <h4 className="text-sm font-sans uppercase tracking-widest text-andalusia-gold/80 hover:text-andalusia-charcoal">Ouarzazate</h4>
                        <p className="text-andalusia-charcoal/80 font-light leading-relaxed">
                            Journey into the deep roots of North Africa. The Amazigh spirit lives in the vibrant clay kasbahs, the warmth of the hospitality, and the timeless rhythms of the High Atlas and deep south.
                        </p>
                    </div>

                    <div className="space-y-4 group">
                        <h3 className="text-2xl font-serif text-andalusia-navy group-hover:text-andalusia-gold transition-colors duration-300">L'Andaloussia</h3>
                        <h4 className="text-sm font-sans uppercase tracking-widest text-andalusia-gold/80 hover:text-andalusia-charcoal">Tetouan</h4>
                        <p className="text-andalusia-charcoal/80 font-light leading-relaxed">
                            Where the refined legacy of Al-Andalus continues to breathe. Experience the intricate zellige, the soulful melodies of the Oud, and the flourishing courtyards of the northern pearl.
                        </p>
                    </div>

                    <div className="space-y-4 group">
                        <h3 className="text-2xl font-serif text-andalusia-navy group-hover:text-andalusia-gold transition-colors duration-300">Hassanya</h3>
                        <h4 className="text-sm font-sans uppercase tracking-widest text-andalusia-gold/80 hover:text-andalusia-charcoal">Sahara</h4>
                        <p className="text-andalusia-charcoal/80 font-light leading-relaxed">
                            The vastness of the sands echoes with poetry and nomadic grace. The Saharan heritage brings the spiritual depth of the desert skies, woven into the very fabric of Tamaghrabit.
                        </p>
                    </div>

                    <div className="space-y-4 group">
                        <h3 className="text-2xl font-serif text-andalusia-navy group-hover:text-andalusia-gold transition-colors duration-300">Arab</h3>
                        <h4 className="text-sm font-sans uppercase tracking-widest text-andalusia-gold/80 hover:text-andalusia-charcoal">Rabat</h4>
                        <p className="text-andalusia-charcoal/80 font-light leading-relaxed">
                            Majesty, imperial history, and spiritual devotion. The Arab influence anchors Morocco with its stunning architecture, profound linguistic heritage, and the noble traditions of Tbourida.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Definition;
