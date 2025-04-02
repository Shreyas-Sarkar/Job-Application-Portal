import Image from 'next/image';

const CompaniesSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-2xl text-gray-400 mb-12">Companies we helped grow</h2>
      
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
        <Image
          src="/vodafone.svg"
          alt="Vodafone"
          width={140}
          height={40}
          className="opacity-30 hover:opacity-50 transition-opacity"
        />
        <Image
          src="/intel.svg"
          alt="Intel"
          width={140}
          height={40}
          className="opacity-30 hover:opacity-50 transition-opacity"
        />
        <Image
          src="/tesla.svg"
          alt="Tesla"
          width={140}
          height={40}
          className="opacity-30 hover:opacity-50 transition-opacity"
        />
        <Image
          src="/amd.svg"
          alt="AMD"
          width={140}
          height={40}
          className="opacity-30 hover:opacity-50 transition-opacity"
        />
        <Image
          src="/talkit.svg"
          alt="Talkit"
          width={140}
          height={40}
          className="opacity-30 hover:opacity-50 transition-opacity"
        />
      </div>
    </div>
  );
};

export default CompaniesSection; 