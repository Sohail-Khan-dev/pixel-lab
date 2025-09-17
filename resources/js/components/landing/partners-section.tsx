export function PartnersSection() {
    const partners = [
        { name: 'GitHub', logo: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' },
        { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
        { name: 'Zoom', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg' },
        { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
        { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    ];

    return (
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gray-950/50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-xl md:text-2xl text-gray-400 mb-12">
                    Our trusted partners and customers:
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
                    {partners.map((partner, index) => (
                        <div 
                            key={partner.name}
                            className="flex items-center justify-center p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                                {/* Use text-based logos for better compatibility */}
                                <div className="text-white font-bold text-sm md:text-base opacity-70 hover:opacity-100 transition-opacity">
                                    {partner.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-sm">
                        As a leader, our solution is available in:
                    </p>
                    <div className="flex justify-center items-center mt-4 space-x-6">
                        <span className="text-white font-semibold">Web</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-white font-semibold">Mobile</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-white font-semibold">Desktop</span>
                    </div>
                </div>
            </div>
        </section>
    );
}