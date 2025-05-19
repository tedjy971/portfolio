'use client';

import {motion} from 'framer-motion';

const Header = () => {
    const navItems = [
        {name: 'Accueil', path: '#hero'},
        {name: 'Projets', path: '#projects'},
        {name: 'Compétences', path: '#skills'},
        {name: 'À propos', path: '#about'},
        {name: 'Contact', path: '#contact'},
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const headerVariants = {
        hidden: {opacity: 0, y: -50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: -20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5}
        }
    };

    return (
        <motion.header
            className="fixed w-full z-50 py-4 backdrop-blur-sm bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.div
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent cursor-pointer"
                    variants={itemVariants}
                    onClick={() => scrollToSection('#hero')}
                >
                    Teddy Gamiette
                </motion.div>

                <motion.nav className="hidden md:flex space-x-8" variants={itemVariants}>
                    {navItems.map((item) => (
                        <motion.div key={item.name} variants={itemVariants} whileHover={{scale: 1.05}}>
                            <button
                                onClick={() => scrollToSection(item.path)}
                                className="font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                            >
                                {item.name}
                            </button>
                        </motion.div>
                    ))}
                </motion.nav>

                <motion.div
                    className="md:hidden cursor-pointer"
                    variants={itemVariants}
                    whileTap={{scale: 0.95}}
                >
                    <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default Header;