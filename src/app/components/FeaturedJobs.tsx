import Image from 'next/image';
import Link from 'next/link';

type TagType = 'Marketing' | 'Design' | 'Business' | 'Technology';

interface Company {
  name: string;
  logo: string;
  location: string;
}

interface Job {
  company: Company;
  title: string;
  description: string;
  type: string;
  tags: TagType[];
}

const jobs: Job[] = [
  {
    company: {
      name: 'Revolut',
      logo: '/company-logos/revolut.png',
      location: 'Madrid, Spain'
    },
    title: 'Email Marketing',
    description: 'Revolut is looking for Email Marketing to help team ma...',
    type: 'Full Time',
    tags: ['Marketing', 'Design']
  },
  {
    company: {
      name: 'Dropbox',
      logo: '/company-logos/dropbox.png',
      location: 'San Fransisco, US'
    },
    title: 'Brand Designer',
    description: 'Dropbox is looking for Brand Designer to help the team t...',
    type: 'Full Time',
    tags: ['Design', 'Business']
  },
  {
    company: {
      name: 'Pitch',
      logo: '/company-logos/pitch.png',
      location: 'Berlin, Germany'
    },
    title: 'Pitch Marketing',
    description: 'Pitch is looking for Customer Manager to join marketing t...',
    type: 'Full Time',
    tags: ['Marketing']
  },
  {
    company: {
      name: 'Blinklist',
      logo: '/company-logos/blinklist.png',
      location: 'Granada, Spain'
    },
    title: 'Visual Designer',
    description: 'Blinklist is looking for Visual Designer to help team desi...',
    type: 'Full Time',
    tags: ['Design']
  },
  {
    company: {
      name: 'ClassPass',
      logo: '/company-logos/classpass.png',
      location: 'Manchester, UK'
    },
    title: 'Product Designer',
    description: 'ClassPass is looking for Product Designer to help us...',
    type: 'Full Time',
    tags: ['Marketing', 'Design']
  },
  {
    company: {
      name: 'Canva',
      logo: '/company-logos/canva.png',
      location: 'Ontario, Canada'
    },
    title: 'Lead Designer',
    description: 'Canva is looking for Lead Engineer to help develop n...',
    type: 'Full Time',
    tags: ['Design', 'Business']
  },
  {
    company: {
      name: 'GoDaddy',
      logo: '/company-logos/godaddy.png',
      location: 'Marseille, France'
    },
    title: 'Brand Strategist',
    description: 'GoDaddy is looking for Brand Strategist to join the team...',
    type: 'Full Time',
    tags: ['Marketing']
  },
  {
    company: {
      name: 'Twitter',
      logo: '/company-logos/twitter.png',
      location: 'San Diego, US'
    },
    title: 'Data Analyst',
    description: 'Twitter is looking for Data Analyst to help team desi...',
    type: 'Full Time',
    tags: ['Technology']
  }
];

const tagColors: Record<TagType, string> = {
  Marketing: 'bg-orange-50 text-orange-500',
  Design: 'bg-emerald-50 text-emerald-500',
  Business: 'bg-blue-50 text-blue-500',
  Technology: 'bg-red-50 text-red-500'
};

const FeaturedJobs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-black">
          Featured <span className="text-blue-600">jobs</span>
        </h2>
        <Link 
          href="/jobs"
          className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          Show all jobs
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <Link
            key={index}
            href={`/jobs/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="p-6 bg-white border rounded-lg hover:border-blue-600 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <Image
                src={job.company.logo}
                alt={`${job.company.name} logo`}
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="text-sm text-blue-600 border border-blue-100 rounded-lg px-3 py-1">
                {job.type}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-1 text-black">{job.title}</h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
              <span>{job.company.name}</span>
              <span>•</span>
              <span>{job.company.location}</span>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              {job.description}
            </p>

            <div className="flex gap-2">
              {job.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`px-3 py-1 rounded-lg text-sm ${tagColors[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs; 