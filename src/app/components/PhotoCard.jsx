import { Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FaLocationDot, FaScaleBalanced, FaHourglassHalf, FaPaw } from "react-icons/fa6";

export default function PhotoCard({ photo }) {
  if (!photo) return null;

  return (
    // We added 'group' here so that children components (like the image) 
    // can listen to when the entire Card is hovered.
    <Card className="group border rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      
      {/* 1. Image Container Layer */}
      <div className="relative w-full aspect-square bg-slate-50 rounded-xl overflow-hidden">
        <Image
          src={photo.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.name}
          // Fix applied here: changed 'hover:scale-105' to 'group-hover:scale-105'.
          // This makes the smooth zoom trigger when the *card* is hovered, preventing jitter.
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Chip 
          size="sm" 
          variant="flat"
          className="absolute right-2 top-2 font-bold backdrop-blur-md bg-white/70 text-slate-800"
        >
          {photo.category}
        </Chip>
      </div>

      {/* 2. Breed & Title Labels */}
      <div className="space-y-1">
        <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase">
          {photo.breed}
        </span>
        <h2 className="font-bold text-lg text-slate-900 leading-snug">
          {photo.name}
        </h2>
      </div>

      {/* 3. Main Characteristics Grid (2x2 Layout) */}
      <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100/50">
        <div className="flex items-center gap-1.5">
          <FaScaleBalanced className="text-slate-400 shrink-0" />
          <span className="truncate">Weight: <strong className="text-slate-800">{photo.weight} kg</strong></span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaHourglassHalf className="text-slate-400 shrink-0" />
          <span className="truncate">Age: <strong className="text-slate-800">{photo.age} Yrs</strong></span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaPaw className="text-slate-400 shrink-0" />
          <span className="truncate">Type: <strong className="text-slate-800">{photo.type}</strong></span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaLocationDot className="text-red-500 shrink-0" />
          <span className="truncate font-semibold text-slate-800">{photo.location}</span>
        </div>
      </div>

      {/* 4. Description Field */}
      <div className="pt-1">
        <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">Overview</h4>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
          {photo.description}
        </p>
      </div>
      
    </Card>
  );
}