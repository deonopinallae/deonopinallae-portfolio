import { Header } from '@/shared/ui/layout/header/header'
import { Footer } from '@/shared/ui/layout/footer/footer'
import { Section } from '@/shared/ui/layout/section'
import HeroSection from '@/features/portfolio/ui/hero-section'
import AboutSection from '@/features/portfolio/ui/about-section'
import WorkSection from '@/features/portfolio/ui/work-section'
import ContactSection from '@/features/portfolio/ui/contact-section'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<WorkSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	)
}
