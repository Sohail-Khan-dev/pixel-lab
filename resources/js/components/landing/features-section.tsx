import { Button } from '@/components/ui/button';
import { CubeVisualization } from './cube-visualization';

export function FeaturesSection() {
    const features = [
        {
            id: 'mvp',
            title: 'MVP within a week',
            subtitle: 'AI Software Development',
            description: 'Driven by your needs, we provide scalable digital solutions as well as specialized services tailored to every industry. Get a Minimal Viable Product (MVP) within a week!',
            gradient: 'from-purple-600 to-blue-600',
            cubeColor: 'purple'
        },
        {
            id: 'optimized-reach',
            title: 'Optimized Reach',
            subtitle: 'AI Marketing',
            description: 'Optimize your marketing efforts with our AI-targeted perfect match algorithms that connect you with the right audience at the right time.',
            gradient: 'from-pink-600 to-purple-600',
            cubeColor: 'pink'
        },
        {
            id: 'exponential-reach',
            title: 'Exponential Reach',
            subtitle: 'AI Marketing',
            description: 'Get exponential reach via AI Marketing solutions that scale your business beyond traditional boundaries and unlock new growth opportunities.',
            gradient: 'from-blue-600 to-cyan-600',
            cubeColor: 'blue'
        }
    ];

    return (
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
                {features.map((feature, index) => (
                    <div key={feature.id} className="relative">
                        {/* Feature content */}
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                            index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                        }`}>
                            {/* Text content */}
                            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg md:text-xl text-gray-400 mb-2">
                                            {feature.subtitle}
                                        </h3>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                            {feature.title}
                                        </h2>
                                    </div>
                                    
                                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                        {feature.description}
                                    </p>
                                    
                                    <div className="pt-4">
                                        <Button 
                                            size="lg"
                                            className={`bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105`}
                                        >
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Cube visualization */}
                            <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                <CubeVisualization color={feature.cubeColor} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}