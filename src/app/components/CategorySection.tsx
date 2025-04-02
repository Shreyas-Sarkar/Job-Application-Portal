import Link from 'next/link';

const categories = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M17 3L22 7V21H2V3H17ZM16 5H4V19H20V8L16 5ZM13 9V11H11V9H13ZM7 9V11H5V9H7ZM13 13V15H11V13H13ZM7 13V15H5V13H7Z" fill="currentColor"/>
      </svg>
    ),
    title: 'Design',
    jobs: '235 jobs available'
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M3 3H21V21H3V3ZM5 5V19H19V5H5ZM11 11V17H7V11H11ZM17 7V17H13V7H17Z" fill="currentColor"/>
      </svg>
    ),
    title: 'Sales',
    jobs: '756 jobs available'
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4 19V5H20V19H4ZM2 20H22V4H2V20ZM12 15H18V13H12V15ZM6 11H18V9H6V11Z" fill="currentColor"/>
      </svg>
    ),
    title: 'Marketing',
    jobs: '140 jobs available'
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" fill="currentColor"/>
      </svg>
    ),
    title: 'Finance',
    jobs: '325 jobs available'
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4 16V4H2V18H22V16H4ZM7 14H5V12H7V14ZM7 10H5V8H7V10ZM7 6H5V4H7V6ZM21 12H9V10H21V12Z" fill="currentColor"/>
      </svg>
    ),
    title: 'Technology',
    jobs: '436 jobs available'
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M24 12L18.343 17.657L16.929 16.243L21.172 12L16.929 7.757L18.343 6.343L24 12ZM2.828 12L7.071 16.243L5.657 17.657L0 12L5.657 6.343L7.071 7.757L2.828 12ZM9.788 21H7.66L14.212 3H16.34L9.788 21Z" fill="currentColor"/>
      </svg>
    ),
    title: 'Engineering',
    jobs: '542 jobs available'
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M20 20H4V16H20V20ZM4 3H20V7H4V3ZM4 9H20V14H4V9Z" fill="currentColor"/>
      </svg>
    ),
    title: 'Business',
    jobs: '211 jobs available'
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 14V22H4C4 17.6 7.6 14 12 14ZM12 13C9.2 13 7 10.8 7 8C7 5.2 9.2 3 12 3C14.8 3 17 5.2 17 8C17 10.8 14.8 13 12 13ZM18 17L23 22L21.6 23.4L16.6 18.4L18 17Z" fill="currentColor"/>
      </svg>
    ),
    title: 'Human Resource',
    jobs: '346 jobs available'
  }
];

const CategorySection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">
          Explore by <span className="text-blue-600">category</span>
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
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/jobs/${category.title.toLowerCase()}`}
            className={`p-6 border rounded-lg hover:border-blue-600 transition-colors group ${
              category.title === 'Marketing' ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            <div className={`${
              category.title === 'Marketing' ? 'text-white' : 'text-blue-600 group-hover:text-blue-600'
            }`}>
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">{category.title}</h3>
            <p className={`${
              category.title === 'Marketing' ? 'text-blue-100' : 'text-gray-500'
            }`}>
              {category.jobs}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection; 