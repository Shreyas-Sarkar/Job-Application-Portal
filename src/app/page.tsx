import HeroSection from './components/HeroSection';
import CompaniesSection from './components/CompaniesSection';
import CategorySection from './components/CategorySection';
import JobPostingCTA from './components/JobPostingCTA';
import FeaturedJobs from './components/FeaturedJobs';
import LatestJobs from './components/LatestJobs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="font-bold text-xl text-black">JobHuntly</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-black hover:text-gray-900">Find Jobs</a>
          <a href="#" className="text-black hover:text-gray-900">Browse Companies</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-black hover:text-gray-900">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </div>
      </nav>
      
      <HeroSection />
      <CompaniesSection />
      <CategorySection />
      <JobPostingCTA />
      <div className="bg-white">
        <FeaturedJobs />
      </div>
      <div className="bg-gray-50">
        <LatestJobs />
      </div>
      <Footer />
    </main>
  );
}
