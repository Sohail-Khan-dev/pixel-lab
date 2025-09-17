import { Head } from '@inertiajs/react';
import { HeroSection } from '@/components/landing/hero-section';
import { PartnersSection } from '@/components/landing/partners-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { CTASection } from '@/components/landing/cta-section';

export default function Landing() {
    return (
        <>
            <Head title="Your AI Partner in Web Apps">
                <meta name="description" content="Connect with professionals and industry leaders. Share your thoughts and stories online." />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen bg-black text-white overflow-x-hidden">
                <HeroSection />
                <PartnersSection />
                <FeaturesSection />
                <CTASection />
            </div>
        </>
    );
}