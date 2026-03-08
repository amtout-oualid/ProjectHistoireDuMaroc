import React from 'react';

const imageMap = {
    irt: '/images/rayonnement/Rabat.jpg',
    worldcup: '/images/rayonnement/WorldCup.png',
    solar: '/images/rayonnement/noor.jpg',
    wind: '/images/rayonnement/wind.jpg',
    tangermed: '/images/rayonnement/tangerport.jpg',
    tgv: '/images/rayonnement/TGV.png',
};

const cards = [
    { id: 'irt', title: 'Institut Royal de Technologie (IRT)', desc: 'The new Hassan II Campus in Rabat shaping future innovations.', colSpan: 2, rowSpan: 2 },
    { id: 'worldcup', title: 'World Cup 2030', desc: 'A united vision celebrating Moroccan football on the global stage.', colSpan: 1, rowSpan: 2 },
    { id: 'solar', title: 'Noor Power Station', desc: 'Harnessing the sun in Ouarzazate for a sustainable future.', colSpan: 1, rowSpan: 1 },
    { id: 'wind', title: 'Wind Energy', desc: 'Tetouan\'s wind farms driving clean energy.', colSpan: 1, rowSpan: 1 },
    { id: 'tangermed', title: 'Tanger Med Port', desc: 'The leading gateway connecting Africa to the world.', colSpan: 2, rowSpan: 1 },
    { id: 'tgv', title: 'Al Boraq TGV', desc: 'High-speed rail redefining mobility across the kingdom.', colSpan: 1, rowSpan: 1 },
];


const Rayonnement = () => {
    return (
        <section id="rayonnement" className="relative w-full py-16 md:py-32 px-4 md:px-16 lg:px-32 bg-andalusia-navy text-andalusia-cream z-10">

            {/* Cinematic Opening Block - Split Layout */}
            <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl md:rounded-3xl overflow-hidden mb-12 md:mb-24 bg-andalusia-navy border border-andalusia-gold/20 flex shadow-2xl shadow-andalusia-gold/5">

                {/* Left Side - Hassan II */}
                <div className="absolute top-0 left-0 w-1/2 h-full z-10 flex items-end justify-start">
                    <img
                        src="/images/rayonnement/hassanleft.png"
                        alt="King Hassan II"
                        className="h-[70%] md:h-[90%] w-auto object-contain object-left-bottom opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-andalusia-navy/80 mix-blend-multiply" />
                </div>

                {/* Right Side - Mohammed VI */}
                <div className="absolute top-0 right-0 w-1/2 h-full z-10 flex items-end justify-end">
                    <img
                        src="/images/rayonnement/hassanright.png"
                        alt="King Mohammed VI"
                        className="h-[70%] md:h-[90%] w-auto object-contain object-right-bottom opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-andalusia-navy/80 mix-blend-multiply" />
                </div>

                {/* Center Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
                    <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-serif text-andalusia-cream opacity-90 tracking-tighter mix-blend-overlay font-bold text-center leading-none">
                        MOROCCO<br />TODAY
                    </h2>
                    <div className="mt-4 md:mt-8 px-4 md:px-6 py-2 md:py-3 bg-andalusia-navy/40 backdrop-blur-md rounded-full border border-andalusia-gold/30">
                        <p className="font-sans font-medium text-andalusia-gold tracking-widest text-[10px] sm:text-xs md:text-base uppercase">
                            "Le Maroc d'aujourd'hui n'est pas le Maroc d'hier"
                        </p>
                    </div>
                </div>
            </div>

            {/* Grid Mosaic */}
            <div className="max-w-7xl mx-auto mb-16 md:mb-32">
                <h3 className="text-2xl md:text-5xl font-serif text-andalusia-gold mb-8 md:mb-12 text-center">Le Rayonnement International</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">
                    {cards.map((card, idx) => (
                        <div
                            key={card.id + idx}
                            className={`relative rounded-xl overflow-hidden group border border-andalusia-gold/10 shadow-lg shadow-andalusia-navy/40 bg-andalusia-navy/40 
                ${card.colSpan === 2 ? 'col-span-2 md:col-span-2' : 'col-span-1 md:col-span-1'} 
                ${card.rowSpan === 2 ? 'row-span-2 md:row-span-2' : 'row-span-1 md:row-span-1'}
              `}
                        >
                            {/* Card Background Image */}
                            <img
                                src={imageMap[card.id]}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Default Overlay Filter */}
                            <div className="absolute inset-0 bg-andalusia-navy/50 group-hover:bg-andalusia-navy/20 transition-colors duration-500" />

                            {/* Card Title (always visible) */}
                            <div className="absolute top-3 left-3 md:top-4 md:left-5 z-10">
                                <h3 className="text-sm md:text-lg font-serif text-andalusia-gold drop-shadow-lg">{card.title}</h3>
                            </div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 bg-gradient-to-t from-andalusia-navy/95 via-andalusia-navy/50 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <h3 className="text-lg md:text-2xl font-serif text-andalusia-gold mb-2">{card.title}</h3>
                                <p className="text-xs md:text-sm font-sans font-light text-andalusia-cream/80">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default Rayonnement;
