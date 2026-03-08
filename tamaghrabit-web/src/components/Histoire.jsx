import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Mobile-friendly image+text card ─── */
const HistoireCard = ({ label, title, text, images }) => (
    <div className="py-8 px-4 space-y-4">
        {label && (
            <span className="block text-[10px] font-sans uppercase tracking-[0.25em] text-andalusia-gold">
                {label}
            </span>
        )}
        {title && (
            <h3 className="text-2xl font-serif text-andalusia-navy leading-snug">{title}</h3>
        )}
        {text && (
            <p className="text-sm font-sans font-light text-andalusia-charcoal/70 leading-relaxed">
                {text}
            </p>
        )}
        {images && images.map((img, i) => (
            <div key={i} className="w-full rounded-lg border border-andalusia-gold/25 overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                {img.caption && (
                    <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 p-2">
                        {img.caption}
                    </span>
                )}
            </div>
        ))}
    </div>
);

const Histoire = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return; // Skip GSAP on mobile

        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const ctx = gsap.context(() => {
            // Horizontal scrolljacking: pin the section, translate the track left
            const totalScroll = track.scrollWidth - window.innerWidth;

            gsap.to(track, {
                x: -totalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 1,
                    end: () => '+=' + totalScroll,
                    invalidateOnRefresh: true,
                },
            });

            // Animate scattered items as they enter the horizontal viewport
            const items = track.querySelectorAll('.histoire-item');
            items.forEach((item) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: item,
                            containerAnimation: gsap.getById?.('histoire-scroll') || undefined,
                            start: 'left 90%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            });
        }, section);

        return () => ctx.revert();
    }, [isMobile]);

    /* ════════════════════════════════════════════ */
    /*  MOBILE: Vertical scrolling timeline        */
    /* ════════════════════════════════════════════ */
    if (isMobile) {
        return (
            <section id="histoire" className="relative w-full bg-andalusia-cream py-16 px-2">
                {/* Section Title */}
                <div className="text-center mb-8 px-4">
                    <span className="block text-[10px] font-sans uppercase tracking-[0.3em] text-andalusia-gold mb-3">
                        L'Histoire de Tamaghrabit
                    </span>
                    <h2 className="text-3xl font-serif text-andalusia-navy leading-snug mb-4">
                        Le Carrefour <br />
                        <em className="text-andalusia-gold">des Civilisations</em>
                    </h2>
                    <p className="text-sm font-sans font-light text-andalusia-charcoal/70 leading-relaxed">
                        Depuis des millénaires, le Maroc tisse son identité au fil des rencontres,
                        donnant naissance à l'âme de la <span className="font-medium text-andalusia-gold">Tamaghrabit</span>.
                    </p>
                </div>

                {/* Vertical timeline-style cards */}
                <div className="space-y-2 max-w-lg mx-auto">

                    {/* Amazigh Origins */}
                    <HistoireCard
                        label="Les Origines"
                        title="L'Aube de la Terre"
                        text="Les Imazighen, premiers bâtisseurs de cette terre, ont inscrit dans la roche, le tissu et la parole une mémoire millénaire. Des sommets de l'Atlas aux oasis du Sud, ils sont l'âme première du Maroc."
                        images={[
                            { src: '/images/histoire/imazighen_atlas.png', alt: 'Imazighen — Atlas', caption: 'Imazighen — Atlas' },
                            { src: '/images/histoire/kasbah_ait_ben_haddou.png', alt: 'Kasbah Aït-Ben-Haddou', caption: "L'Aube Amazighe" },
                            { src: '/images/histoire/village_amazigh.png', alt: 'Village Amazigh', caption: 'Haut Atlas' },
                        ]}
                    />

                    <div className="w-12 h-[1px] bg-andalusia-gold/30 mx-auto" />

                    {/* Islam & Arab */}
                    <HistoireCard
                        label="L'Islam & Les Arabes"
                        title="La Lumière de l'Orient"
                        text="L'arrivée de l'Islam au 7e siècle a apporté la calligraphie, les sciences, et une spiritualité profonde. Mosquées, médersas et riads témoignent encore de cet héritage lumineux."
                        images={[
                            { src: '/images/histoire/calligraphie_arabe.png', alt: 'Calligraphie Arabe', caption: 'Arabo-Musulman, 7e Siècle' },
                            { src: '/images/histoire/mosquee_hassan_ii.png', alt: 'Mosquée Hassan II', caption: 'La Lumière de l\'Orient' },
                            { src: '/images/histoire/medersa_bou_inania.png', alt: 'Médersa Bou Inania' },
                        ]}
                    />

                    <div className="w-12 h-[1px] bg-andalusia-gold/30 mx-auto" />

                    {/* Al-Andalus */}
                    <HistoireCard
                        label="Al-Andalus"
                        title="L'Exil Élégant"
                        text="Après 1492, les exilés d'Al-Andalus ont enrichi le Maroc de leur art raffiné — zellige ciselé, fontaines murmurantes, mélodies du oud. Fès et Tétouan en sont les joyaux vivants."
                        images={[
                            { src: '/images/histoire/zellige_fassi.png', alt: 'Zellige Fassi', caption: 'Al-Andalus, 1492' },
                            { src: '/images/histoire/riad_andalou.png', alt: 'Riad Andalou', caption: 'Tétouan' },
                        ]}
                    />

                    <div className="w-12 h-[1px] bg-andalusia-gold/30 mx-auto" />

                    {/* Sahara / Hassani */}
                    <HistoireCard
                        label="Le Sahara"
                        title="Le Pont Saharien"
                        text="Les tribus du Sud tissent des liens séculaires entre l'Afrique subsaharienne et la Méditerranée. Poésie hassanie, thé sous les étoiles, et caravanes — un pont doré à travers les dunes."
                        images={[
                            { src: '/images/histoire/caravane_saharienne.png', alt: 'Caravane Saharienne', caption: 'Le Sahara' },
                            { src: '/images/histoire/the_sahara.png', alt: 'Thé du Sahara' },
                        ]}
                    />

                    <div className="w-12 h-[1px] bg-andalusia-gold/30 mx-auto" />

                    {/* Closing */}
                    <HistoireCard
                        label="Le Maroc Moderne"
                        title="Une identité tissée par le temps"
                        text="Chaque civilisation a déposé un fil dans le grand tapis de la Tamaghrabit. L'Amazigh, l'Arabe, l'Andalou, le Hassani — ensemble, ils forment un patrimoine unique au monde, vivant et en perpétuel mouvement."
                        images={[
                            { src: '/images/histoire/rabat_moderne.jpg', alt: 'Rabat Moderne', caption: 'Le Maroc Moderne' },
                            { src: '/images/histoire/drapeau_maroc.png', alt: 'Drapeau du Maroc' },
                        ]}
                    />
                </div>
            </section>
        );
    }

    /* ════════════════════════════════════════════ */
    /*  DESKTOP: Original horizontal scroll layout  */
    /* ════════════════════════════════════════════ */
    return (
        <section
            id="histoire"
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden bg-andalusia-cream"
        >
            {/* Decorative SVG swirling lines (background) */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.08]"
                viewBox="0 0 1440 900"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    d="M-50 200 C200 50, 400 350, 700 180 S1100 400, 1500 100"
                    stroke="#C59B65"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M-50 500 C250 350, 500 650, 800 450 S1200 700, 1500 400"
                    stroke="#C59B65"
                    strokeWidth="1"
                    fill="none"
                />
                <path
                    d="M-50 750 C300 600, 600 850, 900 650 S1300 800, 1500 700"
                    stroke="#C59B65"
                    strokeWidth="1.2"
                    fill="none"
                />
            </svg>

            {/* Horizontal scrolling track */}
            <div
                ref={trackRef}
                className="relative h-full flex-nowrap z-10"
                style={{ display: 'flex', width: 'max-content' }}
            >

                {/* ═══════════════════════════════════════════ */}
                {/* PANEL 1: Opening — Central Quote + First scattered images */}
                {/* ═══════════════════════════════════════════ */}
                <div className="relative h-full flex-shrink-0" style={{ width: '100vw' }}>
                    {/* Title label */}
                    <div className="histoire-item absolute top-[15%] left-[6%]">
                        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-andalusia-gold">
                            L'Histoire de Tamaghrabit
                        </span>
                    </div>

                    {/* Image top-left: Imazighen — Atlas */}
                    <div className="histoire-item absolute top-[12%] left-[5%] mt-8">
                        <div className="w-[220px] h-[300px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/imazighen_atlas.png" alt="Imazighen — Atlas" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Central quote */}
                    <div className="histoire-item absolute top-[10%] left-[32%] max-w-md">
                        <h2 className="text-3xl md:text-4xl font-serif text-andalusia-navy leading-snug mb-4">
                            Le Carrefour
                            <br />
                            <em className="text-andalusia-gold">des Civilisations</em>
                        </h2>
                        <p className="text-sm font-sans font-light text-andalusia-charcoal/70 leading-relaxed">
                            Depuis des millénaires, le Maroc tisse son identité au fil des rencontres,
                            donnant naissance à l'âme de la <span className="font-medium text-andalusia-gold">Tamaghrabit</span>.
                        </p>
                    </div>

                    {/* Image top-right: Gravures rupestres */}
                    <div className="histoire-item absolute top-[8%] right-[8%]">
                        <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 mb-2">Les Origines</span>
                        <div className="w-[200px] h-[160px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/gravures_rupestres.png" alt="Gravures rupestres" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Large image center: Kasbah Aït-Ben-Haddou */}
                    <div className="histoire-item absolute top-[38%] left-[38%]">
                        <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 mb-2">L'Aube Amazighe</span>
                        <div className="w-[420px] h-[380px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/kasbah_ait_ben_haddou.png" alt="Kasbah Aït-Ben-Haddou" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Small image bottom-left: Village Amazigh */}
                    <div className="histoire-item absolute bottom-[12%] left-[8%]">
                        <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 mb-2">Haut Atlas</span>
                        <div className="w-[240px] h-[200px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/village_amazigh.png" alt="Village Amazigh" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════ */}
                {/* PANEL 2: Amazigh + Arab */}
                {/* ═══════════════════════════════════════════ */}
                <div className="relative h-full flex-shrink-0" style={{ width: '110vw' }}>
                    {/* Amazigh text block top-left */}
                    <div className="histoire-item absolute top-[10%] left-[5%] max-w-sm">
                        <span className="block text-[10px] font-sans uppercase tracking-[0.25em] text-andalusia-gold mb-3">Les Imazighen</span>
                        <h3 className="text-2xl font-serif text-andalusia-navy mb-3">L'Aube de la Terre</h3>
                        <p className="text-sm font-sans font-light text-andalusia-charcoal/70 leading-relaxed">
                            Les Imazighen, premiers bâtisseurs de cette terre, ont inscrit dans la roche,
                            le tissu et la parole une mémoire millénaire. Des sommets de l'Atlas aux oasis
                            du Sud, ils sont l'âme première du Maroc.
                        </p>
                    </div>

                    {/* Portrait image: Femme Amazighe */}
                    <div className="histoire-item absolute top-[8%] right-[25%]">
                        <div className="w-[180px] h-[260px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/femme_amazighe.png" alt="Femme Amazighe" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Wide image right side: Calligraphie Arabe */}
                    <div className="histoire-item absolute top-[6%] right-[3%]">
                        <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 mb-2">Arabo-Musulman, 7e Siècle</span>
                        <div className="w-[200px] h-[180px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/calligraphie_arabe.png" alt="Calligraphie Arabe" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Large image center: Mosquée Hassan II */}
                    <div className="histoire-item absolute top-[42%] left-[20%]">
                        <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 mb-2">La Lumière de l'Orient</span>
                        <div className="w-[380px] h-[340px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/mosquee_hassan_ii.png" alt="Mosquée Hassan II" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Arab text block right */}
                    <div className="histoire-item absolute top-[45%] right-[6%] max-w-sm">
                        <span className="block text-[10px] font-sans uppercase tracking-[0.25em] text-andalusia-gold mb-3">L'Islam & Les Arabes</span>
                        <h3 className="text-2xl font-serif text-andalusia-navy mb-3">La Lumière de l'Orient</h3>
                        <p className="text-sm font-sans font-light text-andalusia-charcoal/70 leading-relaxed">
                            L'arrivée de l'Islam au 7e siècle a apporté la calligraphie, les sciences,
                            et une spiritualité profonde. Mosquées, médersas et riads témoignent encore
                            de cet héritage lumineux.
                        </p>
                    </div>

                    {/* Small image bottom: Médersa Bou Inania */}
                    <div className="histoire-item absolute bottom-[8%] right-[30%]">
                        <div className="w-[250px] h-[180px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/medersa_bou_inania.png" alt="Médersa Bou Inania" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════ */}
                {/* PANEL 3: Andalous + Hassani */}
                {/* ═══════════════════════════════════════════ */}
                <div className="relative h-full flex-shrink-0" style={{ width: '110vw' }}>
                    {/* Andalous section: Zellige Fassi */}
                    <div className="histoire-item absolute top-[6%] left-[4%]">
                        <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 mb-2">Al-Andalus, 1492</span>
                        <div className="w-[240px] h-[240px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/zellige_fassi.png" alt="Zellige Fassi" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Andalous text */}
                    <div className="histoire-item absolute top-[12%] left-[28%] max-w-sm">
                        <span className="block text-[10px] font-sans uppercase tracking-[0.25em] text-andalusia-gold mb-3">Al-Andalus</span>
                        <h3 className="text-2xl font-serif text-andalusia-navy mb-3">L'Exil Élégant</h3>
                        <p className="text-sm font-sans font-light text-andalusia-charcoal/70 leading-relaxed">
                            Après 1492, les exilés d'Al-Andalus ont enrichi le Maroc de leur art raffiné
                            — zellige ciselé, fontaines murmurantes, mélodies du oud. Fès et Tétouan en
                            sont les joyaux vivants.
                        </p>
                    </div>

                    {/* Tall portrait right: Riad Andalou */}
                    <div className="histoire-item absolute top-[5%] right-[8%]">
                        <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 mb-2">Tétouan</span>
                        <div className="w-[200px] h-[320px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/riad_andalou.png" alt="Riad Andalou" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Hassani large wide image: Caravane Saharienne */}
                    <div className="histoire-item absolute top-[48%] left-[8%]">
                        <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 mb-2">Le Sahara</span>
                        <div className="w-[480px] h-[260px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/caravane_saharienne.png" alt="Caravane Saharienne" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Hassani text */}
                    <div className="histoire-item absolute top-[50%] right-[5%] max-w-sm">
                        <span className="block text-[10px] font-sans uppercase tracking-[0.25em] text-andalusia-gold mb-3">Le Sahara</span>
                        <h3 className="text-2xl font-serif text-andalusia-navy mb-3">Le Pont Saharien</h3>
                        <p className="text-sm font-sans font-light text-andalusia-charcoal/70 leading-relaxed">
                            Les tribus du Sud tissent des liens séculaires entre l'Afrique subsaharienne
                            et la Méditerranée. Poésie hassanie, thé sous les étoiles, et caravanes
                            — un pont doré à travers les dunes.
                        </p>
                    </div>

                    {/* Small image bottom-right: Thé du Sahara */}
                    <div className="histoire-item absolute bottom-[8%] right-[25%]">
                        <div className="w-[180px] h-[160px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/the_sahara.png" alt="Thé du Sahara" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════ */}
                {/* PANEL 4: Closing — Tamaghrabit synthesis */}
                {/* ═══════════════════════════════════════════ */}
                <div className="relative h-full flex-shrink-0" style={{ width: '80vw' }}>
                    {/* Image top-left: Rabat Moderne */}
                    <div className="histoire-item absolute top-[10%] left-[8%]">
                        <span className="block text-[9px] font-sans uppercase tracking-[0.2em] text-andalusia-gold/70 mb-2">Le Maroc Moderne</span>
                        <div className="w-[220px] h-[200px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/rabat_moderne.jpg" alt="Rabat Moderne" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Central closing text */}
                    <div className="histoire-item absolute top-[35%] left-[30%] max-w-lg text-center">
                        <h2 className="text-3xl md:text-5xl font-serif text-andalusia-navy leading-tight mb-6">
                            Une identité
                            <br />
                            <em className="text-andalusia-gold">tissée par le temps</em>
                        </h2>
                        <p className="text-sm font-sans font-light text-andalusia-charcoal/70 leading-relaxed">
                            Chaque civilisation a déposé un fil dans le grand tapis de la Tamaghrabit.
                            L'Amazigh, l'Arabe, l'Andalou, le Hassani — ensemble, ils forment un patrimoine
                            unique au monde, vivant et en perpétuel mouvement.
                        </p>
                    </div>

                    {/* Image bottom-right: Drapeau du Maroc */}
                    <div className="histoire-item absolute bottom-[12%] right-[10%]">
                        <div className="w-[260px] h-[220px] rounded-lg border border-andalusia-gold/25 overflow-hidden">
                            <img src="/images/histoire/drapeau_maroc.png" alt="Drapeau du Maroc" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Histoire;
