import Image from 'next/image';
import Link from 'next/link';

type TagType = 'Full-Time' | 'Marketing' | 'Design' | 'Business' | 'Technology';

interface Company {
  name: string;
  logo: string;
  location: string;
}

interface Job {
  company: Company;
  title: string;
  tags: TagType[];
}

const jobs: Job[] = [
  {
    company: {
      name: 'Nomad',
      logo: '/company-logos/nomad.svg',
      location: 'Paris, France'
    },
    title: 'Social Media Assistant',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Netlify',
      logo: '/company-logos/netlify.svg',
      location: 'Paris, France'
    },
    title: 'Social Media Assistant',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Dropbox',
      logo: '/company-logos/dropbox.svg',
      location: 'San Fransisco, USA'
    },
    title: 'Brand Designer',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Maze',
      logo: '/company-logos/maze.svg',
      location: 'San Fransisco, USA'
    },
    title: 'Brand Designer',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Terraform',
      logo: '/company-logos/terraform.svg',
      location: 'Hamburg, Germany'
    },
    title: 'Interactive Developer',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Udacity',
      logo: '/company-logos/udacity.svg',
      location: 'Hamburg, Germany'
    },
    title: 'Interactive Developer',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Packer',
      logo: '/company-logos/packer.svg',
      location: 'Lucern, Switzerland'
    },
    title: 'HR Manager',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Webflow',
      logo: '/company-logos/webflow.svg',
      location: 'Lucern, Switzerland'
    },
    title: 'HR Manager',
    tags: ['Full-Time', 'Marketing', 'Design']
  }
];

const tagColors: Record<TagType, string> = {
  'Full-Time': 'bg-blue-50 text-blue-500',
  'Marketing': 'bg-orange-50 text-orange-500',
  'Design': 'bg-emerald-50 text-emerald-500',
  'Business': 'bg-blue-50 text-blue-500',
  'Technology': 'bg-red-50 text-red-500'
};

const LatestJobs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-black">
          Latest <span className="text-blue-600">jobs open</span>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <Link
            key={index}
            href={`/jobs/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex gap-4 p-6 bg-white rounded-lg border hover:border-blue-600 transition-all"
          >
            <Image
              src={job.company.logo}
              alt={`${job.company.name} logo`}
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold text-black mb-1">{job.title}</h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <span>{job.company.name}</span>
                <span>•</span>
                <span>{job.company.location}</span>
              </div>
              <div className="flex gap-2">
                {job.tags.map((tag: TagType, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-lg text-sm ${tagColors[tag]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs; 