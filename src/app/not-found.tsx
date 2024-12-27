import Button from '@/components/ui/Button/Button'; // Custom Button component
import { FlagIcon } from 'lucide-react'; // Icon library
import Link from 'next/link'; // For navigation

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="mx-auto grid place-items-center px-8 text-center">
          <div>
            <FlagIcon className="mx-auto h-20 w-20 text-black" />

            {/* Error title */}
            <h1 className="md:text-4xl mt-10 text-3xl font-bold leading-snug">
              Error 404 <br /> It looks like something went wrong.
            </h1>

            {/* Error description */}
            <p className="mx-auto mb-14 mt-8 max-w-sm text-lg text-gray-500">
              Don&apos;t worry, our team is already on it. Please try refreshing the page or come back later.
            </p>

            {/* Back home button */}
            <Link href="/">
              <Button
                text="Back Home"
                classCustom="md:w-32 w-full px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-md"
              />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
