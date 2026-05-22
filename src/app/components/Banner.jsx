import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/hero4.jpg')] w-[90%] mx-auto aspect-video bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight">
            Bringing the Haat <br /> to you.
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Your digital gateway to hassle-free Qurbani livestock.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-blue-900  to-blue-950  text-white font-medium">
                Buy Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;