"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tab1 from "./components/tab1";
import Tab2 from "./components/tab2";

const tabs = ["Tab 1", "Tab 2"];

const FootPrintSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !contentRef.current) return;

            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const sectionHeight = sectionRef.current.clientHeight;
            const viewportHeight = window.innerHeight;

            if (sectionTop <= 0 && Math.abs(sectionTop) < sectionHeight - viewportHeight) {
                const progress = Math.abs(sectionTop) / (sectionHeight - viewportHeight);
                const newIndex = Math.min(tabs.length - 1, Math.floor(progress * tabs.length));
                setActiveIndex(newIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[200vh] ">
            <div className="sticky top-0 ">
                {/* <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col gap-4">
                    {tabs.map((tab, index) => (
                        <motion.div
                            key={index}
                            className={`cursor-pointer rounded-full transition-all ${index === activeIndex ? "bg-primary400 text-white w-4 h-10" : "bg-gray400 text-gray-300 w-4 h-4"
                                }`}
                        >

                        </motion.div>
                    ))}
                </div> */}
                <motion.div
                    ref={contentRef}
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {
                        activeIndex === 0 ?
                            <Tab1 />
                            :
                            activeIndex === 1 ?
                                <Tab2 />
                                : null
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default FootPrintSection;
