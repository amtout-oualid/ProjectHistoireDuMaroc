import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Menu, X } from 'lucide-react';

// Helper for tailwind classes
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [activeSegment, setActiveSegment] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Accueil' },
        { id: 'definition', label: 'Définition' },
        { id: 'rayonnement', label: 'Rayonnement' },
        { id: 'arts', label: 'Arts' },
        { id: 'histoire', label: 'Histoire' },
    ];

    useEffect(() => {
        const sectionIds = navItems.map(item => item.id);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);

            // Detect which section is currently in view
            let currentSection = 'home';
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3) {
                        currentSection = id;
                    }
                }
            }
            setActiveSegment(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const scrollToSection = (id) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center",
                isScrolled ? "bg-andalusia-navy/95 backdrop-blur-md border-b border-andalusia-gold/20 shadow-lg" : "bg-transparent text-white"
            )}>
                <div className={cn(
                    "font-serif text-xl md:text-2xl tracking-wider font-bold transition-colors duration-300",
                    isScrolled ? "text-andalusia-gold" : "text-andalusia-gold"
                )}>
                    TAMAGHRABIT
                </div>

                {/* Desktop nav links — hidden on mobile */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <span
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={cn(
                                "text-sm font-sans uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer",
                                activeSegment === item.id
                                    ? "text-andalusia-gold"
                                    : (isScrolled ? "text-andalusia-cream/70 hover:text-andalusia-cream" : "text-white/80 hover:text-white")
                            )}
                        >
                            {item.label}
                        </span>
                    ))}
                </div>

                {/* Hamburger button — visible only on mobile */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-andalusia-gold p-1 z-[60]"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile fullscreen overlay menu */}
            <div
                className={cn(
                    "fixed inset-0 z-[55] bg-andalusia-navy/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
                    mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                {navItems.map((item) => (
                    <span
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                            "text-lg font-sans uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer",
                            activeSegment === item.id
                                ? "text-andalusia-gold scale-110"
                                : "text-andalusia-cream/70 hover:text-andalusia-cream"
                        )}
                    >
                        {item.label}
                    </span>
                ))}
            </div>
        </>
    );
};

export default Navbar;
