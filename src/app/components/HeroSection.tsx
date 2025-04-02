import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-4 text-black">
          Discover
          <br />
          more than
          <br />
          <span className="text-blue-600">5000+ Jobs</span>
        </h1>
        <p className="text-black mb-8 text-lg">
          Great platform for the job seeker that searching for new career heights and
          passionate about startups.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-full p-2 outline-none text-black placeholder:text-gray-500"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 outline-none text-black placeholder:text-gray-500"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Search my job
          </button>
        </div>

        <div className="mt-8">
          <p className="text-black mb-3">Popular:</p>
          <div className="flex gap-3 flex-wrap">
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors text-black">
              UI Designer
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors text-black">
              UX Researcher
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors text-black">
              Android
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors text-black">
              Admin
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 hidden lg:block">
        <Image
          src="/hero-img.jpeg"
          alt="Job seeker"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection; 