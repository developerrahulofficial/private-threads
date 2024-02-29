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
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Execute only on the client-side
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty dependency array ensures this effect runs only once after component mount

    const isMobile: boolean = typeof windowSize.width === "number" && windowSize.width < 768;
    const isDesktop: boolean = typeof windowSize.width === "number" && windowSize.width >= 768;

    return { windowSize, isMobile, isDesktop };
}
