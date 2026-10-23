'use client';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useEffect, useRef, useState } from 'react';

interface Html2PdfComponentProps {
  content: HTMLElement | null;
  filename: string;
  onComplete: () => void;
}

const Html2PdfComponent = ({ content, filename, onComplete }: Html2PdfComponentProps) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Préparation du document...');
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!content) {
      onComplete();
      return;
    }

    if (hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;

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
        element.style.padding = '0';
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
          keywords: 'CV, développeur full-stack, TypeScript, Vue.js, NestJS, DevOps',
          creator: 'Portfolio CV Exporter',
        });

        const canvas = await html2canvas(element, {
          scale: 2,
          windowWidth: 1280,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: '#ffffff',
        });

        const pageWidthMm = 210;
        const pageHeightMm = 297;
        const pageHeightPx = Math.floor((canvas.width * pageHeightMm) / pageWidthMm);
        const totalPages = Math.ceil(canvas.height / pageHeightPx);

        for (let i = 0; i < totalPages; i++) {
          setStatus(`Mise en page (${i + 1}/${totalPages})...`);
          setProgress(50 + Math.floor((i / totalPages) * 40));

          const sourceY = i * pageHeightPx;
          const sliceHeight = Math.min(pageHeightPx, canvas.height - sourceY);
          const pageCanvas = document.createElement('canvas');
          pageCanvas.width = canvas.width;
          pageCanvas.height = sliceHeight;

          const context = pageCanvas.getContext('2d');
          if (!context) {
            throw new Error('Impossible de préparer la page PDF');
          }

          context.fillStyle = '#ffffff';
          context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
          context.drawImage(
            canvas,
            0,
            sourceY,
            canvas.width,
            sliceHeight,
            0,
            0,
            canvas.width,
            sliceHeight
          );

          if (i > 0) {
            pdf.addPage();
          }

          const imageHeightMm = (sliceHeight * pageWidthMm) / canvas.width;
          const imgData = pageCanvas.toDataURL('image/jpeg', 0.95);
          pdf.addImage(imgData, 'JPEG', 0, 0, pageWidthMm, imageHeightMm);
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
