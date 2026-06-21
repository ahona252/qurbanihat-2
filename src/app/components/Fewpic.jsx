import PhotoCard from "./PhotoCard";
import photos from '../../../public/data.json'; 

const Fewpic = () => {
    const topPhotos = photos; 

    const topPhoto = topPhotos.slice(0, 4);

    return (
        <div className="px-4 py-6 max-w-7xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold text-center my-6 text-white tracking-tight">
                GET SOME IDEAS
            </h1>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {topPhoto.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default Fewpic;