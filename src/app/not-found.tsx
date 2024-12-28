import '@/styles/globals.css';
import { FlagIcon } from 'lucide-react';
import Link from 'next/link';
export default function NotFound() {
  return (
    <html>
      <body>
        <div className="mx-auto grid h-screen place-items-center px-8 pb-5 text-center">
          <div>
            <FlagIcon className="mx-auto h-20 w-20" />
            <h1 className="md:!text-4xl mt-10 !text-3xl !leading-snug">
              Error 404 <br /> It looks like something went wrong.
            </h1>
            <p className="md:max-w-sm mx-auto mb-14 mt-8 text-[18px] font-normal text-gray-500">
              Don&apos;t worry, our team is already on it.Please try refreshing the page or come back later.
            </p>
            {/* <Button className="md:w-[8rem] w-full px-4" text="Back Home" /> */}
            <Link
              className="rounded-s bg-primary-default px-3xl py-m text-white no-underline duration-200 body-bold hover:bg-primary-darker"
              href="/"
            >
              Back Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
