import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { PlayCircle } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const qeftans = [
    { city: 'Rabat', title: 'Rbati Qeftan', image: '/images/qeftans/rabat.png' },
    { city: 'Fès', title: 'Fassi Qeftan', image: '/images/qeftans/Fes.png' },
    { city: 'Tétouan', title: 'Tetouani Qeftan', image: '/images/qeftans/tetouan.png' },
    { city: 'Meknès', title: 'Meknassi Qeftan', image: '/images/qeftans/meknas.png' },
    { city: 'Salé', title: 'Slawi Qeftan', image: '/images/qeftans/sale.png' },
];

const musicRows = [
    {
        title: "L'Élégance Andalouse (Al-Âla)",
        text: "Héritage direct des cours de Grenade et de Cordoue, la musique andalouse marocaine est une poésie chantée où les notes de l'Oud résonnent comme un écho de l'âge d'or. Une symphonie mêlant nostalgie et spiritualité.",
        modelSrc: '/treeD/Oud/oud.glb',
    },
    {
        title: 'Les Rythmes de l\'Atlas (Ahwash)',
        text: "Célébration collective par excellence, l'Ahwash fait vibrer les montagnes de l'Atlas. Au cœur de cette danse poétique, les percussions comme la Tbila dictent la cadence, unissant les voix de la communauté dans une harmonie terrienne.",
        modelSrc: '/treeD/Tbilat/tbilat_drums.glb',
    },
    {
        title: "L'Âme du Désert et la Transe",
        text: "Des poèmes du Sahara aux chants mystiques des confréries, la musique du Sud est une invitation au voyage intérieur. Les basses profondes du Guembri portent en elles la mémoire des dunes et le souffle spirituel de l'Afrique.",
        modelSrc: '/treeD/Genbri/source/ganbri.glb',
    },
];

const ArtMusic = () => {
    return (
        <div id="arts" className="w-full bg-andalusia-navy">

            {/* ═══ Qeftan Carousel (unchanged) ═══ */}
            <section className="relative w-full py-16 md:py-32 overflow-hidden bg-andalusia-navy/80 border-t border-andalusia-gold/10">
                <div className="text-center mb-8 md:mb-16 px-4">
                    <h2 className="text-3xl md:text-6xl font-serif text-andalusia-gold mb-4 md:mb-6">Moroccan Qeftan</h2>
                    <p className="text-andalusia-cream/60 font-sans tracking-widest uppercase text-xs md:text-sm">Elegance woven through time</p>
                </div>

                <div className="w-full max-w-6xl mx-auto px-4">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        initialSlide={2}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 250,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="w-full py-12"
                    >
                        {qeftans.map((item, index) => (
                            <SwiperSlide key={index} className="w-[240px] h-[360px] md:w-[400px] md:h-[600px] bg-andalusia-cream/5 border border-andalusia-gold/20 rounded-2xl overflow-hidden relative group">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                <div className="absolute bottom-0 w-full p-4 md:p-8 bg-gradient-to-t from-andalusia-navy via-andalusia-navy/60 to-transparent text-center">
                                    <h3 className="text-lg md:text-2xl font-serif text-andalusia-cream mb-1 md:mb-2">{item.title}</h3>
                                    <span className="text-[10px] md:text-xs font-sans tracking-[0.2em] text-andalusia-gold uppercase">{item.city}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* ═══ Music Section — 3D Model Rows ═══ */}
            <section className="w-full bg-andalusia-navy border-t border-andalusia-gold/10">
                {/* Section header */}
                <div className="text-center py-12 md:py-24 px-4">
                    <span className="block text-xs font-sans uppercase tracking-[0.3em] text-andalusia-gold mb-4 md:mb-6">Musique</span>
                    <h2 className="text-3xl md:text-6xl font-serif text-andalusia-cream mb-3 md:mb-4">Les Sons du Maroc</h2>
                    <p className="text-andalusia-cream/50 font-sans text-xs md:text-sm tracking-widest uppercase">Trois traditions, une seule âme</p>
                </div>

                {musicRows.map((row, idx) => (
                    <div
                        key={idx}
                        className={`
                            w-full border-t border-andalusia-gold/10
                            grid grid-cols-1 md:grid-cols-2
                            ${idx % 2 === 1 ? 'md:direction-rtl' : ''}
                        `}
                        style={{ minHeight: window.innerWidth < 768 ? 'auto' : '80vh' }}
                    >
                        {/* ── Left Column: Text Content ── */}
                        <div
                            className={`
                                flex flex-col justify-center px-6 md:px-16 lg:px-24 py-10 md:py-16
                                ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}
                            `}
                            style={{ direction: 'ltr' }}
                        >
                            <span className="block text-[10px] font-sans uppercase tracking-[0.3em] text-andalusia-gold/70 mb-3 md:mb-4">
                                {String(idx + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-andalusia-cream mb-4 md:mb-6 leading-tight">
                                {row.title}
                            </h3>
                            <p className="text-sm md:text-lg font-sans font-light text-andalusia-cream/70 leading-relaxed mb-6 md:mb-10 max-w-lg">
                                {row.text}
                            </p>
                            <button className="flex items-center gap-2 md:gap-3 text-andalusia-gold hover:text-andalusia-cream transition-all duration-300 group w-fit">
                                <PlayCircle size={40} strokeWidth={1} className="md:w-[52px] md:h-[52px] group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em]">Écouter</span>
                            </button>
                        </div>

                        {/* ── Right Column: 3D Model ── */}
                        <div
                            className={`
                                relative flex items-center justify-center
                                ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}
                            `}
                            style={{ direction: 'ltr', minHeight: window.innerWidth < 768 ? '300px' : '400px' }}
                        >
                            {/* Subtle gradient backdrop */}
                            <div className="absolute inset-0 bg-gradient-to-br from-andalusia-navy via-andalusia-charcoal/20 to-andalusia-navy" />

                            {/* model-viewer web component */}
                            <model-viewer
                                src={row.modelSrc}
                                alt={row.title}
                                auto-rotate
                                camera-controls
                                shadow-intensity="1"
                                interaction-prompt="none"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    minHeight: window.innerWidth < 768 ? '300px' : '60vh',
                                    position: 'relative',
                                    zIndex: 1,
                                    '--poster-color': 'transparent',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </section>

        </div>
    );
};

export default ArtMusic;
