import { Button } from '@/components/ui/button';
import { GlobeVisualization } from './globe-visualization';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-90"></div>
            
            {/* Content container */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Your AI partner
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            in Web apps
                        </span>
                        <span className="text-gray-400 text-lg ml-2">{'{scroll}'}</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Connect with professionals and industry leaders. Share your thoughts and stories online.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button 
                            size="lg" 
                            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Learn More
                        </Button>
                        <Button 
                            variant="outline" 
                            size="lg"
                            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                        >
                            Start Now
                        </Button>
                    </div>
                </div>
                
                {/* Right content - Globe visualization */}
                <div className="flex justify-center lg:justify-end">
                    <GlobeVisualization />
                </div>
            </div>
        </section>
    );
}