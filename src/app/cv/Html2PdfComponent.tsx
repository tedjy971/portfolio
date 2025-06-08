'use client';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useEffect, useState } from 'react';

interface Html2PdfComponentProps {
  content: HTMLElement | null;
  filename: string;
  onComplete: () => void;
}

const Html2PdfComponent = ({ content, filename, onComplete }: Html2PdfComponentProps) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Préparation du document...');

  useEffect(() => {
    if (!content) {
      onComplete();
      return;
    }

    // Fonction pour exporter le CV en PDF
    const generatePdf = async () => {
      try {
        // Préparation du contenu
        setStatus('Préparation du document...');
        setProgress(10);

        // Clone le contenu pour éviter de modifier le DOM original
        const element = content.cloneNode(true) as HTMLElement;
        document.body.appendChild(element);

        // Masquer les boutons et éléments non désirés
        const buttonsToRemove = element.querySelectorAll(
          'button, .printButton, [class*="printButton"], .actionButton, [class*="actionButton"]'
        );
        buttonsToRemove.forEach(button => {
          if (button.parentNode) {
            button.parentNode.removeChild(button);
          }
        });

        // Appliquer des styles pour optimiser le rendu
        element.style.position = 'absolute';
        element.style.top = '-9999px';
        element.style.left = '-9999px';
        element.style.width = '210mm'; // Largeur A4
        element.style.padding = '10mm';
        element.style.margin = '0';
        element.style.backgroundColor = 'white';
        element.style.boxSizing = 'border-box';

        // Attendre que les styles soient appliqués
        await new Promise(resolve => setTimeout(resolve, 500));

        setStatus('Création du document PDF...');
        setProgress(40);

        // Créer un document PDF au format A4
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });

        // Ajouter les métadonnées
        pdf.setProperties({
          title: filename,
          subject: 'CV Professionnel',
          author: 'Teddy Gamiette',
          keywords: 'CV, développeur web, backend, frontend, Symfony, Next.js',
          creator: 'Portfolio CV Exporter',
        });

        // Mesurer la hauteur totale du contenu
        const contentHeight = element.offsetHeight;
        const contentWidth = element.offsetWidth;

        // Hauteur d'une page A4 en pixels (en tenant compte de l'échelle)
        const pageHeight = 297 * 3.78; // 297mm * 3.78 pixels/mm (à l'échelle 1)

        // Calculer le nombre de pages nécessaires
        const totalPages = Math.ceil(contentHeight / pageHeight);

        setStatus(`Capture du contenu (1/${totalPages} pages)...`);
        setProgress(50);

        // Pour chaque page
        for (let i = 0; i < totalPages; i++) {
          // Positionner l'élément pour capturer la partie visible dans cette page
          element.style.top = `-${i * pageHeight}px`;

          // Attendre un peu pour que le rendu soit appliqué
          await new Promise(resolve => setTimeout(resolve, 200));

          // Capturer cette partie du CV
          setStatus(`Capture du contenu (${i + 1}/${totalPages} pages)...`);
          setProgress(50 + Math.floor((i / totalPages) * 40));

          const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: false,
            backgroundColor: '#ffffff',
            height: Math.min(pageHeight, contentHeight - i * pageHeight), // Hauteur de la partie visible
            y: i * pageHeight, // Position de départ pour la capture
          });

          // Calculer les dimensions pour ajuster à la page A4
          const imgWidth = 210; // A4 width in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          // Ajouter une nouvelle page si ce n'est pas la première
          if (i > 0) {
            pdf.addPage();
          }

          // Ajouter l'image au PDF
          const imgData = canvas.toDataURL('image/jpeg', 1.0);
          pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        }

        // Nettoyer le DOM
        document.body.removeChild(element);

        setStatus('Finalisation et téléchargement...');
        setProgress(95);

        // Sauvegarder le PDF
        pdf.save(filename);

        setProgress(100);
        setStatus('PDF généré avec succès!');

        // Attendre un peu avant de fermer la modal
        setTimeout(() => {
          onComplete();
        }, 500);
      } catch (error) {
        console.error('Erreur lors de la génération du PDF:', error);
        setStatus('Erreur lors de la génération du PDF');
        setTimeout(() => onComplete(), 1500);
      }
    };

    // Lancer la génération
    generatePdf();
  }, [content, filename, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          width: '300px',
        }}
      >
        <h3 style={{ marginBottom: '15px', textAlign: 'center' }}>{status}</h3>
        <div
          style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#eee',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#2563eb',
              transition: 'width 0.3s ease-in-out',
            }}
          />
        </div>
        <div style={{ textAlign: 'center', fontSize: '14px' }}>{progress}%</div>
      </div>
    </div>
  );
};

export default Html2PdfComponent;
