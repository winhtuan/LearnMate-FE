import MainHeader from '@/shared/layout/MainHeader';
import Hero from '@/features/home/components/Hero';
import Features from '@/features/home/components/Features';
import HowItWorksSection from '@/features/home/components/HowItWorksSection';
import TutorList from '@/features/home/components/TutorList';
import CTASection from '@/features/home/components/CTASection';
import Footer from '@/shared/components/layout/Footer';
import SocialLinks from '@/components/ui/social-links';

/**
 * HomePage - Student Dashboard Landing Page
 * 
 * Clean composition of sections following Vercel composition patterns.
 * Each section is a separate, memoized component for optimal performance.
 * 
 * Component Hierarchy:
 * - Header (with Logo, navigation)
 * - Hero (with StudentAvatars)
 * - Features (with FeatureCard)
 * - HowItWorksSection (with StepCard)
 * - TutorList (with TutorCard)
 * - CTASection
 * - Footer (with Logo, SocialLinks)
 */
function HomePage() {
  return (
    <div className="font-display text-slate-900 bg-background-light min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorksSection />
        <TutorList />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
