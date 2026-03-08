import React from 'react';

const CulturePanel = ({ title, city, description, image1, image2, imageLeft, isMobile }) => {

    // Mobile: simple vertical card layout
    if (isMobile) {
        return (
            <div className="w-full px-4 py-12">
                <div className="w-full flex flex-col gap-6 bg-white/50 backdrop-blur-sm border border-andalusia-gold/30 rounded-2xl p-6 shadow-xl shadow-andalusia-navy/5">
                    {/* Images */}
                    <div className="space-y-4">
                        {image1 && (
                            <div className="w-full h-[200px] rounded-xl overflow-hidden border border-andalusia-gold/20">
                                <img src={image1} alt={title} className="w-full h-full object-cover" />
                            </div>
                        )}
                        {image2 && (
                            <div className="w-full h-[180px] rounded-xl overflow-hidden border border-andalusia-gold/20">
                                <img src={image2} alt={title} className="w-full h-full object-cover" />
                            </div>
                        )}
                    </div>
                    {/* Text */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-serif text-andalusia-navy">{title}</h2>
                        <div className="w-12 h-[1px] bg-andalusia-gold/50" />
                        <h3 className="text-base font-sans uppercase tracking-[0.3em] text-andalusia-gold mb-4">{city}</h3>
                        <p className="text-base font-light text-andalusia-charcoal/80 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Desktop: original layout (unchanged)
    return (
        <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-8 md:p-24 overflow-hidden relative">
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 bg-white/50 backdrop-blur-sm border border-andalusia-gold/30 rounded-3xl p-8 md:p-12 mt-16 md:mt-24 shadow-2xl shadow-andalusia-navy/5">

                {/* Left Side */}
                <div className={`w-full md:w-1/2 h-full flex flex-col justify-center space-y-8 order-2 md:order-none ${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                    {imageLeft ? (
                        <div className="space-y-6 h-full flex flex-col justify-center">
                            <div className="w-full h-[40%] bg-andalusia-navy/5 border border-andalusia-gold/20 rounded-xl overflow-hidden relative group">
                                {image1 ? (
                                    <img src={image1} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-andalusia-navy/30 text-sm font-sans">[IMAGE 1 PLACEHOLDER]</div>
                                )}
                            </div>
                            <div className="w-full h-[50%] bg-andalusia-navy/5 border border-andalusia-gold/20 rounded-xl overflow-hidden relative group">
                                {image2 ? (
                                    <img src={image2} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-andalusia-navy/30 text-sm font-sans">[IMAGE 2 PLACEHOLDER]</div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6 max-w-xl mx-auto md:mx-0">
                            <h2 className="text-5xl md:text-7xl font-serif text-andalusia-navy">{title}</h2>
                            <div className="w-16 h-[1px] bg-andalusia-gold/50" />
                            <h3 className="text-xl font-sans uppercase tracking-[0.3em] text-andalusia-gold mb-6">{city}</h3>
                            <p className="text-lg md:text-xl font-light text-andalusia-charcoal/80 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    )}
                </div>

                {/* Right Side */}
                <div className={`w-full md:w-1/2 h-full flex flex-col justify-center order-1 md:order-none ${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                    {!imageLeft ? (
                        <div className="space-y-6 h-full flex flex-col justify-center">
                            <div className="w-full h-full bg-andalusia-navy/5 border border-andalusia-gold/20 rounded-xl overflow-hidden relative group">
                                {image1 ? (
                                    <img src={image1} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-andalusia-navy/30 text-sm font-sans">[IMAGE 1 PLACEHOLDER]</div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6 max-w-xl mx-auto md:ml-auto">
                            <h2 className="text-5xl md:text-7xl font-serif text-andalusia-navy">{title}</h2>
                            <div className="w-16 h-[1px] bg-andalusia-gold/50" />
                            <h3 className="text-xl font-sans uppercase tracking-[0.3em] text-andalusia-gold mb-6">{city}</h3>
                            <p className="text-lg md:text-xl font-light text-andalusia-charcoal/80 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default CulturePanel;
