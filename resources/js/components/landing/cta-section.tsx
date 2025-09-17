import { Button } from '@/components/ui/button';

export function CTASection() {
    return (
        <>
            {/* Main CTA Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden">
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Get exponential reach 
                                    <br />
                                    via AI Marketing
                                </h2>
                                
                                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                    Transform your business with cutting-edge AI solutions that deliver results beyond your expectations.
                                </p>
                                
                                <Button 
                                    size="lg"
                                    className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-12 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Start Now
                                </Button>
                            </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
                            <div className="w-full h-full bg-white rounded-full blur-3xl"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
                            <div className="w-full h-full bg-white rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="py-12 px-4 md:px-8 lg:px-12 bg-gray-950 border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    {/* Partner logos repeated */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8 opacity-60">
                        {[
                            'GitHub', 'AWS', 'Google', 'Netflix', 'Slack', 
                            'Zoom', 'PayPal', 'Oracle', 'WordPress', 'Facebook'
                        ].map((partner) => (
                            <div 
                                key={partner}
                                className="text-gray-400 font-medium text-sm hover:text-white transition-colors"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>
                    
                    {/* Footer info */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
                            <span>Powered by WP Engine</span>
                            <span>•</span>
                            <span>Designed by Elementor</span>
                        </div>
                        
                        <div className="text-xs text-gray-600">
                            © 2024 Your AI Partner. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}