import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CulturePanel from './CulturePanel';

gsap.registerPlugin(ScrollTrigger);

const cultures = [
    {
        title: "Amazigh",
        city: "Ouarzazate",
        description: "Experience the timeless beauty of the kasbahs. The Amazigh spirit lives through the earth architecture and profound traditions that echo through the High Atlas.",
        imageLeft: true,
        image1: '/images/regions/amazigh1.png',
        image2: '/images/regions/amazigh2.png',
    },
    {
        title: "L'Andaloussia",
        city: "Tetouan",
        description: "The white dove of the north. Tetouan carries the soulful memories of Al-Andalus in its pristine zellige tiles and the enduring melodies of the Oud.",
        imageLeft: false,
        image1: '/images/regions/andaloussia1.png',
    },
    {
        title: "Hassanya",
        city: "Sahara",
        description: "A testament to resilience and grace. The Saharan heritage is carried on the desert winds, rich with nomadic traditions and deep spiritual roots.",
        imageLeft: true,
        image1: '/images/regions/hassanya1.png',
        image2: '/images/regions/hassanya2.png',
    },
    {
        title: "Arab",
        city: "Rabat",
        description: "Imperial majesty intersecting with modern vision. Rabat stands as a proud guardian of Arab contributions to Moroccan identity from historical monuments to the noble art of Tbourida.",
        imageLeft: false,
        image1: '/images/regions/arab1.png',
    }
];

const HorizontalScroll = () => {
    const containerRef = useRef(null);
    const scrollWrapperRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return; // Skip GSAP on mobile

        let panels = gsap.utils.toArray('.culture-panel');

        let scrollTween = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                // The more panels we have, the longer we should scroll to make it smooth
                end: () => "+=" + scrollWrapperRef.current.offsetWidth,
            }
        });

        return () => {
            scrollTween.kill();
        };
    }, [isMobile]);

    // Mobile: vertical stack
    if (isMobile) {
        return (
            <section className="w-full bg-andalusia-cream">
                {cultures.map((culture, index) => (
                    <div key={index} className="w-full">
                        <CulturePanel {...culture} isMobile={true} />
                    </div>
                ))}
            </section>
        );
    }

    // Desktop: original horizontal scroll
    return (
        <section ref={containerRef} className="h-screen w-full overflow-hidden bg-andalusia-cream">
            <div
                ref={scrollWrapperRef}
                className="h-full flex flex-nowrap w-[400vw]" // 4 panels = 400vw
            >
                {cultures.map((culture, index) => (
                    <div key={index} className="culture-panel w-screen h-full flex-shrink-0">
                        <CulturePanel {...culture} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HorizontalScroll;
