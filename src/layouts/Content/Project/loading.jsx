import { motion } from "framer-motion";

export default function Loading() {
    return (
        <>
            (
            <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen z-[999]"
                style={{
                    backgroundImage: "url('/image/bg-papper.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 765 744"
                    width="200"
                    height="200"
                >
                    <defs>
                        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0050A0" />
                            <stop offset="100%" stopColor="#002244" />
                        </linearGradient>

                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <motion.ellipse
                        cx="379.4"
                        cy="364.21"
                        rx="370.66"
                        ry="349.23"
                        fill="none"
                        stroke="url(#gradientStroke)"
                        strokeWidth="6"
                        strokeDasharray="2300 2300"
                        filter="url(#glow)"
                        animate={{
                            strokeDashoffset: [2300, -2300],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    <motion.path
                        d="m206.14,329.12v-1.15l34.24-32.81,184.9.02s26.96,2.69,27.79,26.43c0,0,1.13,28.51-32.49,33.62l-99.37.21,190.36,224.3h-87.99l-217.44-250.63Z"
                        fill="none"
                        stroke="url(#gradientStroke)"
                        strokeWidth="6"
                        strokeDasharray="1140 1140"
                        filter="url(#glow)"
                        animate={{ strokeDashoffset: [1140, -1140] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    <motion.path
                        d="m140.3,171.58l52.36,66.3,273.56-.18s51.94,6.13,57.55,50.04-29.11,73.19-29.11,73.19c0,0-31.06,30.77-86.98,40.28l43.34,49.6s130.45-24.68,143.04-147.91l-.38-16.7s-5.4-103.63-123.53-114.61H140.3Z"
                        fill="none"
                        stroke="url(#gradientStroke)"
                        strokeWidth="6"
                        strokeDasharray="1450 1450"
                        filter="url(#glow)"
                        animate={{ strokeDashoffset: [-1450, 1450] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.svg>

            </div>
            )
        </>
    );
}
