import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const overlayRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Fade out text and darken overlay as we scroll down from the hero
        gsap.to(textRef.current, {
            opacity: 0,
            y: -50,
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom center",
                scrub: 1,
            }
        });

        gsap.to(overlayRef.current, {
            background: 'rgba(15, 15, 15, 0.8)',
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom center",
                scrub: true,
            }
        });
    }, []);

    return (
        <section id="home" className="hero-section relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/videos/videoplayback - Trim.mp4"
            >
            </video>

            {/* Dark Gradient Overlay */}
            <div
                ref={overlayRef}
                className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black/30 via-transparent to-andalusia-cream/10"
            />

            {/* Hero Text */}
            <div
                ref={textRef}
                className="relative z-20 text-center px-4 max-w-4xl"
            >
                <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-wide drop-shadow-2xl">
                    TAMAGHRABIT
                </h1>
                <p className="text-xl md:text-2xl font-sans text-white/90 font-light tracking-widest uppercase">
                    The Moroccan Way of Life
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce opacity-70">
                <span className="text-xs uppercase tracking-[0.2em] mb-2 font-sans text-white">Scroll</span>
                <div className="w-[1px] h-12 bg-white" />
            </div>
        </section>
    );
};

export default Hero;
