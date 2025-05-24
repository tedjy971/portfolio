'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Types pour les données d'analytics
interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  averageTimeOnSite: string;
  topSections: { section: string; views: number }[];
  topProjects: { project: string; views: number }[];
  interactions: { type: string; count: number }[];
  sportInteractions: { element: string; type: string; count: number }[];
  referrers: { source: string; count: number }[];
  devices: { type: string; count: number }[];
}

// Composant de tableau de bord d'analytics
const AnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month'>('week');

  // Simuler le chargement des données d'analytics
  // Dans un cas réel, vous récupéreriez ces données depuis l'API Vercel Analytics
  useEffect(() => {
    const fetchAnalyticsData = async () => {
      setLoading(true);
      
      // Simuler un délai de chargement
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Données simulées - à remplacer par des données réelles de l'API Vercel
      const mockData: AnalyticsData = {
        pageViews: Math.floor(Math.random() * 1000) + 500,
        uniqueVisitors: Math.floor(Math.random() * 500) + 200,
        averageTimeOnSite: `${Math.floor(Math.random() * 2) + 1}m ${Math.floor(Math.random() * 50) + 10}s`,
        topSections: [
          { section: 'projects', views: Math.floor(Math.random() * 300) + 100 },
          { section: 'skills', views: Math.floor(Math.random() * 250) + 80 },
          { section: 'contact', views: Math.floor(Math.random() * 200) + 50 },
          { section: 'about', views: Math.floor(Math.random() * 180) + 40 },
        ],
        topProjects: [
          { project: 'krankenPhp', views: Math.floor(Math.random() * 100) + 30 },
          { project: 'Portfolio Next.js', views: Math.floor(Math.random() * 90) + 25 },
          { project: 'GoofyChat', views: Math.floor(Math.random() * 80) + 20 },
          { project: 'Raytracing C++', views: Math.floor(Math.random() * 70) + 15 },
        ],
        interactions: [
          { type: 'contact_form_submitted', count: Math.floor(Math.random() * 30) + 5 },
          { type: 'external_link_clicked', count: Math.floor(Math.random() * 80) + 40 },
          { type: 'project_viewed', count: Math.floor(Math.random() * 150) + 70 },
          { type: 'section_viewed', count: Math.floor(Math.random() * 200) + 100 },
        ],
        sportInteractions: [
          { element: 'ball', type: 'click', count: Math.floor(Math.random() * 40) + 10 },
          { element: 'runner', type: 'hover', count: Math.floor(Math.random() * 60) + 20 },
          { element: 'energy', type: 'render', count: Math.floor(Math.random() * 100) + 50 },
        ],
        referrers: [
          { source: 'Direct', count: Math.floor(Math.random() * 200) + 100 },
          { source: 'Google', count: Math.floor(Math.random() * 150) + 80 },
          { source: 'LinkedIn', count: Math.floor(Math.random() * 100) + 40 },
          { source: 'GitHub', count: Math.floor(Math.random() * 80) + 30 },
        ],
        devices: [
          { type: 'Desktop', count: Math.floor(Math.random() * 300) + 200 },
          { type: 'Mobile', count: Math.floor(Math.random() * 200) + 150 },
          { type: 'Tablet', count: Math.floor(Math.random() * 50) + 20 },
        ],
      };
      
      setAnalyticsData(mockData);
      setLoading(false);
    };
    
    fetchAnalyticsData();
  }, [timeRange]);
  
  // Calculer le pourcentage pour les barres de progression
  const calculatePercentage = (value: number, max: number) => {
    return (value / max) * 100;
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }
  
  if (!analyticsData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Erreur de chargement des données
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Impossible de charger les données d'analytics. Veuillez réessayer plus tard.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Tableau de bord Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Visualisez les interactions des utilisateurs avec votre portfolio
        </p>
        
        {/* Sélecteur de période */}
        <div className="mt-4 flex space-x-2">
          <button
            onClick={() => setTimeRange('day')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === 'day'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Aujourd'hui
          </button>
          <button
            onClick={() => setTimeRange('week')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === 'week'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Cette semaine
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === 'month'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Ce mois
          </button>
        </div>
      </motion.div>
      
      {/* Métriques principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Pages vues</h3>
            <span className="text-blue-500 bg-blue-100 dark:bg-blue-900 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.pageViews}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            +{Math.floor(Math.random() * 15) + 5}% par rapport à la période précédente
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Visiteurs uniques</h3>
            <span className="text-green-500 bg-green-100 dark:bg-green-900 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.uniqueVisitors}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            +{Math.floor(Math.random() * 10) + 3}% par rapport à la période précédente
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Temps moyen sur le site</h3>
            <span className="text-purple-500 bg-purple-100 dark:bg-purple-900 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.averageTimeOnSite}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            +{Math.floor(Math.random() * 20) + 5}s par rapport à la période précédente
          </p>
        </motion.div>
      </div>
      
      {/* Sections populaires et projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sections les plus visitées</h3>
          <div className="space-y-4">
            {analyticsData.topSections.map((section, index) => {
              const maxViews = analyticsData.topSections[0].views;
              return (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {section.section.charAt(0).toUpperCase() + section.section.slice(1)}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{section.views}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${calculatePercentage(section.views, maxViews)}%` }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                      className="bg-blue-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Projets les plus consultés</h3>
          <div className="space-y-4">
            {analyticsData.topProjects.map((project, index) => {
              const maxViews = analyticsData.topProjects[0].views;
              return (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.project}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.views}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${calculatePercentage(project.views, maxViews)}%` }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                      className="bg-green-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      
      {/* Interactions et animations sport */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Types d'interactions</h3>
          <div className="space-y-4">
            {analyticsData.interactions.map((interaction, index) => {
              const maxCount = analyticsData.interactions[0].count;
              return (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {interaction.type.replace(/_/g, ' ')}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{interaction.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${calculatePercentage(interaction.count, maxCount)}%` }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                      className="bg-purple-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Interactions avec animations sport</h3>
          <div className="space-y-4">
            {analyticsData.sportInteractions.map((interaction, index) => {
              const maxCount = analyticsData.sportInteractions[0].count;
              return (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {interaction.element} ({interaction.type})
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{interaction.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${calculatePercentage(interaction.count, maxCount)}%` }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                      className="bg-orange-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      
      {/* Sources de trafic et appareils */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sources de trafic</h3>
          <div className="space-y-4">
            {analyticsData.referrers.map((referrer, index) => {
              const maxCount = analyticsData.referrers[0].count;
              return (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{referrer.source}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{referrer.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${calculatePercentage(referrer.count, maxCount)}%` }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                      className="bg-indigo-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Types d'appareils</h3>
          <div className="space-y-4">
            {analyticsData.devices.map((device, index) => {
              const maxCount = analyticsData.devices[0].count;
              return (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{device.type}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{device.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${calculatePercentage(device.count, maxCount)}%` }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                      className="bg-pink-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
