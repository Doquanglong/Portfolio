import javascript from '../assets/javascript.png'
import burpsuite from '../assets/burpsuite.jpg'
import html from '../assets/html.png'
import metasploit from '../assets/metasploit.png'
import react from '../assets/react.png'
import kali from '../assets/kali.png'
import python from '../assets/python.webp'
import typescript from '../assets/typescript.png'

const skills = [
    { name: 'Python', logo: python },
    { name: 'JavaScript', logo: javascript },
    { name: 'TypeScript', logo: typescript },
    { name: 'HTML', logo: html },
    { name: 'React', logo: react },
    { name: 'Burp Suite', logo: burpsuite },
    { name: 'Metasploit', logo: metasploit },
    { name: 'Kali Linux', logo: kali },
]

const Skills = () => {
    return (
        <div className='bg-black border-y border-gray-800 py-14 px-6 md:px-16' id="skills">
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold primary-color'>
                    My Tech Stack
                </h2>
                <p className='text-gray-500 mt-2 mb-10'>
                    Tools and technologies I work with
                </p>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6'>
                    {skills.map(({ name, logo }) => (
                        <div
                            key={name}
                            className='group flex flex-col items-center gap-3 rounded-2xl border border-gray-800
                            bg-gray-900/40 p-5 transition duration-300 hover:-translate-y-1.5 hover:border-orange-500/50
                            hover:bg-gray-900/80 hover:shadow-lg hover:shadow-orange-500/10'
                        >
                            <div className='flex h-14 w-14 md:h-16 md:w-16 items-center justify-center'>
                                <img
                                    src={logo}
                                    alt={`${name} logo`}
                                    className='max-h-full max-w-full object-contain transition duration-300 group-hover:scale-110'
                                />
                            </div>
                            <p className='text-sm md:text-base text-center text-gray-400 transition group-hover:text-white'>
                                {name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Skills
