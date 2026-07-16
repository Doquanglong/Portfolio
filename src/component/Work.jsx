import React from "react";
import blog from '../assets/blog.jpg'
import profolio from '../assets/profolio.png'
import fileIdentifier from '../assets/file-type-identifier.jpg'
import hololive from '../assets/hololive.png'
import darklib from '../assets/dark library.png'
import dos from '../assets/DOSdetector.png'

// image: null renders a gradient fallback card. To use a real screenshot,
// import it above and set it here — nothing else needs to change.
const projects = [
    {
        title: 'Hololive Card Collector',
        blurb: 'React Native · Expo · TypeScript',
        image: hololive,
        href: 'https://github.com/Doquanglong/Hololive-OCG-collector',
        cta: 'Github',
    },
    {
        title: 'Dark Library',
        blurb: 'React 19 · Vite · AWS',
        image: darklib,
        href: 'https://github.com/Doquanglong/dark-library',
        cta: 'Github',
    },
    {
        title: 'DOS Attack Detector',
        blurb: 'Python · sliding-window detection',
        image: dos,
        href: 'https://github.com/Doquanglong/DOS-detecor',
        cta: 'Github',
    },
    {
        title: 'File Type Identifier',
        blurb: 'Python · magic-number parsing',
        image: fileIdentifier,
        href: 'https://github.com/Doquanglong/magic-number-file-identifier',
        cta: 'Github',
    },
    {
        title: 'Personal Cybersecurity notes',
        blurb: 'security and coding notes',
        image: blog,
        href: 'https://github.com/Doquanglong/Cybersecurity-notes',
        cta: 'Github',
    },
    {
        title: 'Profolio',
        blurb: 'React · Tailwind',
        image: profolio,
        href: 'https://github.com/Doquanglong/Profolio',
        cta: 'Github',
    },
]

const Work = () => {
    return (
        <div className="mx-auto p-5 bg-black" id="work">
            <div className="pb-8">
                <p className="text-4xl mb-3 font-bold primary-color">Work</p>
                <p className="text-lg text-gray-400">Check out some of my past work</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map(({ title, blurb, image, href, cta }) => (
                    <div
                        key={title}
                        className="transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg
                        shadow-lg shadow-gray-600 group container flex justify-center items-center mx-auto content-div
                        h-[200px] bg-cover relative"
                    >
                        {image ? (
                            <img src={image} alt={title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-orange-500/80 to-pink-600/80 flex flex-col
                            justify-center items-center px-4 text-center">
                                <span className="text-xl font-bold text-white tracking-wide">{title}</span>
                                <span className="mt-2 text-xs text-white/80">{blurb}</span>
                            </div>
                        )}
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider text-center px-4">{title}</span>
                            <div className="pt-8 text-center">
                                {href ? (
                                    <a href={href} target="_blank" rel="noopener noreferrer">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            {cta}
                                        </button>
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white/50 text-gray-700 font-bold text-lg cursor-not-allowed"
                                    >
                                        Link coming soon
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Work
