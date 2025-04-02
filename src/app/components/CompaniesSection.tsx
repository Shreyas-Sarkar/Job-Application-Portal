import Image from 'next/image';

const companies = [
  {
    name: 'Vodafone',
    logo: '/vodafone.png'
  },
  {
    name: 'Intel',
    logo: '/intel.png'
  },
  {
    name: 'Tesla',
    logo: '/tesla.png'
  },
  {
    name: 'AMD',
    logo: '/amd.png'
  },
  {
    name: 'Talkit',
    logo: '/talkit.png'
  }
];

const CompaniesSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-2xl text-gray-400 mb-12">Companies we helped grow</h2>
      
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
        {companies.map((company) => (
          <Image
            key={company.name}
            src={company.logo}
            alt={`${company.name} logo`}
            width={140}
            height={40}
            className="opacity-30 hover:opacity-50 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesSection; 