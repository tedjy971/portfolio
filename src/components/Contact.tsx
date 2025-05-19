'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler une soumission de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 20px rgba(37, 99, 235, 0.2)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
    disabled: {
      opacity: 0.7,
      scale: 1,
    },
  };

  const contactDetails = [
    {
      icon: '📧',
      title: 'Email',
      detail: 'gamiette.Teddy@gmail.com',
      link: 'mailto:gamiette.Teddy@gmail.com',
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      detail: 'linkedin.com/in/teddygamiette',
      link: 'https://www.linkedin.com/in/teddy-gamiette-9a1a9613a/',
    },
    {
      icon: '📱',
      title: 'Téléphone',
      detail: '+33 7 81 9X XX XX',
      link: 'tel:+3378195XXXX',
    },
    {
      icon: '💻',
      title: 'GitHub',
      detail: 'github.com',
      link: 'https://github.com/tedjy971',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Me Contacter
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Vous avez un projet en tête ou une question ? N&apos;hésitez pas à me contacter !
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Coordonnées</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Vous pouvez me contacter directement via ces moyens ou en utilisant le formulaire
                ci-contre.
              </p>
            </motion.div>

            {contactDetails.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all"
                variants={itemVariants}
                whileHover={{ y: -5, x: 0 }}
              >
                <div className="text-3xl mr-4">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.detail}</p>
                </div>
              </motion.a>
            ))}

            {/* Animation stylisée inspirée du sport */}
            <motion.div
              className="relative h-40 rounded-lg overflow-hidden mt-8 bg-gradient-to-r from-blue-500 to-green-400"
              variants={itemVariants}
            >
              <motion.div
                className="absolute w-full h-full"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
                <h4 className="font-bold text-xl mb-2">Disponible pour collaborer</h4>
                <p className="text-center">
                  Je suis toujours intéressé par de nouveaux défis et projets passionnants.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Message envoyé !
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium shadow-lg shadow-blue-500/20 flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    animate={isSubmitting ? 'disabled' : 'visible'}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      'Envoyer le message'
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
