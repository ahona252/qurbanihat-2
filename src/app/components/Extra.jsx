
const Extra = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 my-16 font-sans">
            {/* Main Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                    Qurbani Tips & Top Breeds Ideas 
                </h2>
                <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
                    Essential tips for verifying health criteria alongside the most popular local breeds in Bangladesh.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Column: Essential Tips */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white border-b pb-3 flex items-center gap-2">
                        💡 Haat Buying Tips
                    </h3>
                    
                    <div className="space-y-4">
                        <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                            <h4 className="font-bold text-gray-800 text-sm md:text-base mb-1">1. Teeth & Age Verification</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                Always check the teeth structure. Sacrificial cows must have at least 2 permanent incisors (indicating they are 2+ years old). Goats and sheep must be at least 1 year old.
                            </p>
                        </div>

                        <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                            <h4 className="font-bold text-gray-800 text-sm md:text-base mb-1">2. Physical Agility & Health</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                Ensure the animal walks normally without limping. Look for bright, clear eyes, a moist muzzle, and an active stance. Avoid animals that appear unusually sluggish or exhausted.
                            </p>
                        </div>

                        <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                            <h4 className="font-bold text-gray-800 text-sm md:text-base mb-1">3. Avoid Artificial Fattening</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                Watch out for animals with an unnaturally bloated appearance or heavy, labored breathing. Organically raised livestock have firm, natural muscle tone and normal movement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Top Market Breeds */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white border-b pb-3 flex items-center gap-2">
                        ✨  Top Demanded Breeds
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Breed 1 */}
                        <div className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-green-50 px-2 py-0.5 rounded">Cow</span>
                                <span className="text-[11px] text-gray-400">Local/Cross</span>
                            </div>
                            <h4 className="font-bold text-gray-800 text-base mb-1">Shahiwal Cross</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Known for its beautiful reddish-brown color, distinct hump, high meat yield, and quiet nature.
                            </p>
                        </div>

                        {/* Breed 2 */}
                        <div className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-green-50 px-2 py-0.5 rounded">Cow</span>
                                <span className="text-[11px] text-gray-400">Munshiganj</span>
                            </div>
                            <h4 className="font-bold text-gray-800 text-base mb-1">Mirkadim</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Highly prized for its white or cream skin coat, premium tender meat texture, and specialized farm feeding.
                            </p>
                        </div>

                        {/* Breed 3 */}
                        <div className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-green-50 px-2 py-0.5 rounded">Goat</span>
                                <span className="text-[11px] text-gray-400">Native BD</span>
                            </div>
                            <h4 className="font-bold text-gray-800 text-base mb-1">Black Bengal</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Native breed famous worldwide for its superior meat taste and fine skin texture. Compact and active.
                            </p>
                        </div>

                        {/* Breed 4 */}
                        <div className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-green-50 px-2 py-0.5 rounded">Goat</span>
                                <span className="text-[11px] text-gray-400">Cross Breed</span>
                            </div>
                            <h4 className="font-bold text-gray-800 text-base mb-1">Jamunapari</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Easily recognized by long, drooping ears, large frame size, and excellent live weight potential.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Extra;