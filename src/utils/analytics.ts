export type AnalyticsEvent =
  | 'contact_form_submitted'
  | 'project_viewed'
  | 'skill_clicked'
  | 'section_viewed'
  | 'resume_downloaded'
  | 'external_link_clicked'
  | 'theme_switched'
  | 'animation_interaction'
  | 'sport_animation_interaction';

export type AnalyticsProperties = Record<string, string | number | boolean>;

/**
 * Analytics are deliberately disabled on the self-hosted version.
 * Keeping this adapter preserves the component API without loading a
 * third-party script or sending visitor data.
 */
export const trackEvent = (eventName: AnalyticsEvent, properties?: AnalyticsProperties) => {
  void eventName;
  void properties;
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_viewed', { section: sectionName });
};

export const trackProjectView = (projectName: string) => {
  trackEvent('project_viewed', { project: projectName });
};

export const trackContactFormSubmission = () => {
  trackEvent('contact_form_submitted');
};

export const trackExternalLinkClick = (linkType: string, destination: string) => {
  trackEvent('external_link_clicked', { type: linkType, destination });
};

export const trackResumeDownload = () => {
  trackEvent('resume_downloaded');
};

export const trackAnimationInteraction = (animationName: string, interactionType: string) => {
  trackEvent('animation_interaction', { animation: animationName, interaction: interactionType });
};

export const trackSportInteraction = (sportElement: string, interactionType: string) => {
  trackEvent('sport_animation_interaction', {
    element: sportElement,
    interaction: interactionType,
  });
};
