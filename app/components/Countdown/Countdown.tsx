"use client";

import { useState, useEffect } from "react";

const Countdown = () => {
    const targetDate = new Date("2026-10-03T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    if (!isClient) return null; // Previene errores de hidratación

    return (
        <div className="flex gap-4 sm:gap-8 justify-center items-center mt-8 text-white">
            <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-serif">{timeLeft.days}</span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-light">Días</span>
            </div>
            <span className="text-2xl sm:text-4xl font-serif">:</span>
            <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-serif">{timeLeft.hours}</span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-light">Hrs</span>
            </div>
            <span className="text-2xl sm:text-4xl font-serif">:</span>
            <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-serif">{timeLeft.minutes}</span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-light">Min</span>
            </div>
            <span className="text-2xl sm:text-4xl font-serif">:</span>
            <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-serif">{timeLeft.seconds}</span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-light">Seg</span>
            </div>
        </div>
    );
};

export default Countdown;
