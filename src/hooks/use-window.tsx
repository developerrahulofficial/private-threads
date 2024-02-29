import { useState, useEffect } from "react";

type WindowSize = {
    width: number | undefined;
    height: number | undefined;
};

type WindowDimensions = {
    windowSize: WindowSize;
    isMobile: boolean;
    isDesktop: boolean;
};

export default function useWindow(): WindowDimensions {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: typeof window !== "undefined" ? window.innerWidth : undefined,
        height: typeof window !== "undefined" ? window.innerHeight : undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const isMobile: boolean = typeof windowSize.width === "number" && windowSize.width < 768;
    const isDesktop: boolean = typeof windowSize.width === "number" && windowSize.width >= 768;

    return { windowSize, isMobile, isDesktop };
}
