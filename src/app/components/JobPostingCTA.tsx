import Image from 'next/image';
import Link from 'next/link';

const JobPostingCTA = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - CTA Text */}
          <div className="lg:w-1/3">
            <h2 className="text-white text-5xl font-bold mb-4">
              Start posting
              <br />
              jobs today
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Start posting jobs for only $10.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Sign Up For Free
            </Link>
          </div>

          {/* Right side - Dashboard Preview */}
          <div className="lg:w-2/3">
            <Image
              src="/jobby.png"
              alt="JobHuntly Dashboard Preview"
              width={800}
              height={500}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingCTA; 