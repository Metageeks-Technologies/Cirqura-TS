import { Layout } from '@/components/Layout'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WhyChooseUs from '@/components/WhyChooseUs'
import PlatformFeatures from '@/components/PlatformFeatures'
import LatestProjects from '@/components/LatestProjects'
import Testimonials from '@/components/Testimonials'
import Team from '@/components/Team'
import TrustedPartners from '@/components/TrustedPartners'
import LatestNews from '@/components/LatestNews'
import Newsletter from '@/components/Newsletter'
import { MobileAppsComingSoon } from '@/components/MobileAppsComingSoon'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <WhyChooseUs />
      <PlatformFeatures />
      {/* <Pricing /> */}
      <LatestProjects />
      {/* <CompanyStats /> */}
      <Testimonials />
      <Team />
      <TrustedPartners />
      <LatestNews />
      <MobileAppsComingSoon />
      <Newsletter />
    </Layout>
  );
}
