import { track } from '@vercel/analytics';

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

export type AnalyticsProperties = {
  [key: string]: string | number | boolean;
};

/**
 * Track a custom event with Vercel Analytics
 * @param eventName The name of the event to track
 * @param properties Additional properties to track with the event
 */
export const trackEvent = (eventName: AnalyticsEvent, properties?: AnalyticsProperties) => {
  track(eventName, properties);
};

/**
 * Track when a user views a specific section of the portfolio
 * @param sectionName The name of the section being viewed
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_viewed', { section: sectionName });
};

/**
 * Track when a user clicks on a project to view more details
 * @param projectName The name of the project being viewed
 */
export const trackProjectView = (projectName: string) => {
  trackEvent('project_viewed', { project: projectName });
};

/**
 * Track when a user submits the contact form
 */
export const trackContactFormSubmission = () => {
  trackEvent('contact_form_submitted');
};

/**
 * Track when a user clicks on an external link
 * @param linkType The type of external link (e.g., 'github', 'linkedin', 'email')
 * @param destination The URL or destination of the link
 */
export const trackExternalLinkClick = (linkType: string, destination: string) => {
  trackEvent('external_link_clicked', { type: linkType, destination });
};

/**
 * Track when a user downloads the resume
 */
export const trackResumeDownload = () => {
  trackEvent('resume_downloaded');
};

/**
 * Track when a user interacts with an animation
 * @param animationName The name of the animation being interacted with
 * @param interactionType The type of interaction (e.g., 'click', 'hover')
 */
export const trackAnimationInteraction = (animationName: string, interactionType: string) => {
  trackEvent('animation_interaction', { animation: animationName, interaction: interactionType });
};

/**
 * Track when a user interacts with sport-themed animations
 * @param sportElement The sport element being interacted with
 * @param interactionType The type of interaction
 */
export const trackSportInteraction = (sportElement: string, interactionType: string) => {
  trackEvent('sport_animation_interaction', { element: sportElement, interaction: interactionType });
};
