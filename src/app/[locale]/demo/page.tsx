'use client';
interface TypoGroupProps {
  title: string;
}

const DemoPage = () => {
  return (
    <section className="container flex flex-col gap-24 px-[120px]">
      <div className="">
        <p className="h1-bold mb-8">Typography</p>
        <div className="flex flex-col gap-12">
          <TypoGroup title="h1" />
          <TypoGroup title="h2" />
          <TypoGroup title="h3" />
          <TypoGroup title="h4" />
          <TypoGroup title="headline" />
          <TypoGroup title="body" />
          <TypoGroup title="subtitle" />
          <TypoGroup title="caption" />
          <TypoGroup title="footnote" />
        </div>
      </div>

      <div className="">
        <p className="h1-bold mb-8">Colors</p>
        <div className="flex flex-col gap-12">
          {/* Anzac */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-anzac-500">Anzac</p>
            <div className="flex gap-10">
              <div className="size-16 rounded-md bg-anzac-50">50</div>
              <div className="size-16 rounded-md bg-anzac-100">100</div>
              <div className="size-16 rounded-md bg-anzac-200">200</div>
              <div className="size-16 rounded-md bg-anzac-300">300</div>
              <div className="size-16 rounded-md bg-anzac-400">400</div>
              <div className="size-16 rounded-md bg-anzac-500">500</div>
              <div className="size-16 rounded-md bg-anzac-600">600</div>
              <div className="size-16 rounded-md bg-anzac-700">700</div>
              <div className="size-16 rounded-md bg-anzac-800">800</div>
              <div className="size-16 rounded-md bg-anzac-900">900</div>
              <div className="bg-anzac-950 size-16 rounded-md">950</div>
            </div>
          </div>

          {/* Blue */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-blue-500">blue</p>
            <div className="flex gap-10">
              <div className="size-16 rounded-md bg-blue-10"></div>
              <div className="size-16 rounded-md bg-blue-50">50</div>
              <div className="size-16 rounded-md bg-blue-100">100</div>
              <div className="size-16 rounded-md bg-blue-200">200</div>
              <div className="size-16 rounded-md bg-blue-300">300</div>
              <div className="size-16 rounded-md bg-blue-400">400</div>
              <div className="size-16 rounded-md bg-blue-500">500</div>
              <div className="size-16 rounded-md bg-blue-600">600</div>
              <div className="size-16 rounded-md bg-blue-700">700</div>
              <div className="size-16 rounded-md bg-blue-800">800</div>
              <div className="size-16 rounded-md bg-blue-900">900</div>
              <div className="size-16 rounded-md bg-blue-950">950</div>
            </div>
          </div>

          {/* Grey */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-grey-500">grey</p>
            <div className="flex gap-10">
              <div className="bg-grey-10 size-16 rounded-md"></div>
              <div className="size-16 rounded-md bg-grey-50">50</div>
              <div className="size-16 rounded-md bg-grey-100">100</div>
              <div className="size-16 rounded-md bg-grey-200">200</div>
              <div className="size-16 rounded-md bg-grey-300">300</div>
              <div className="size-16 rounded-md bg-grey-400">400</div>
              <div className="size-16 rounded-md bg-grey-500">500</div>
              <div className="size-16 rounded-md bg-grey-600">600</div>
              <div className="size-16 rounded-md bg-grey-700">700</div>
              <div className="size-16 rounded-md bg-grey-800">800</div>
              <div className="size-16 rounded-md bg-grey-900">900</div>
              <div className="size-16 rounded-md bg-grey-950">950</div>
            </div>
          </div>

          {/* Red */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-red-500">red</p>
            <div className="flex gap-10">
              <div className="bg-red-10 size-16 rounded-md"></div>
              <div className="size-16 rounded-md bg-red-50">50</div>
              <div className="size-16 rounded-md bg-red-100">100</div>
              <div className="size-16 rounded-md bg-red-200">200</div>
              <div className="size-16 rounded-md bg-red-300">300</div>
              <div className="size-16 rounded-md bg-red-400">400</div>
              <div className="size-16 rounded-md bg-red-500">500</div>
              <div className="size-16 rounded-md bg-red-600">600</div>
              <div className="size-16 rounded-md bg-red-700">700</div>
              <div className="size-16 rounded-md bg-red-800">800</div>
              <div className="size-16 rounded-md bg-red-900">900</div>
              <div className="size-16 rounded-md bg-red-950">950</div>
            </div>
          </div>

          {/* Green */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-green-500">green</p>
            <div className="flex gap-10">
              <div className="bg-green-10 size-16 rounded-md"></div>
              <div className="size-16 rounded-md bg-green-50">50</div>
              <div className="size-16 rounded-md bg-green-100">100</div>
              <div className="size-16 rounded-md bg-green-200">200</div>
              <div className="size-16 rounded-md bg-green-300">300</div>
              <div className="size-16 rounded-md bg-green-400">400</div>
              <div className="size-16 rounded-md bg-green-500">500</div>
              <div className="size-16 rounded-md bg-green-600">600</div>
              <div className="size-16 rounded-md bg-green-700">700</div>
              <div className="size-16 rounded-md bg-green-800">800</div>
              <div className="size-16 rounded-md bg-green-900">900</div>
              <div className="size-16 rounded-md bg-green-950">950</div>
            </div>
          </div>

          {/* Yellow */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-yellow-500">yellow</p>
            <div className="flex gap-10">
              <div className="bg-yellow-10 size-16 rounded-md"></div>
              <div className="size-16 rounded-md bg-yellow-50">50</div>
              <div className="size-16 rounded-md bg-yellow-100">100</div>
              <div className="size-16 rounded-md bg-yellow-200">200</div>
              <div className="size-16 rounded-md bg-yellow-300">300</div>
              <div className="size-16 rounded-md bg-yellow-400">400</div>
              <div className="size-16 rounded-md bg-yellow-500">500</div>
              <div className="size-16 rounded-md bg-yellow-600">600</div>
              <div className="size-16 rounded-md bg-yellow-700">700</div>
              <div className="size-16 rounded-md bg-yellow-800">800</div>
              <div className="size-16 rounded-md bg-yellow-900">900</div>
              <div className="size-16 rounded-md bg-yellow-950">950</div>
            </div>
          </div>

          {/* Primary */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-primary-default">primary</p>
            <div className="flex gap-10">
              <div className="bg-yellow-10 size-16 rounded-md"></div>
              <div className="size-16 rounded-md bg-primary-default">default</div>
              <div className="size-16 rounded-md bg-primary-subtle">subtle</div>
              <div className="size-16 rounded-md bg-primary-lighter">lighter</div>
              <div className="size-16 rounded-md bg-primary-darker">darker</div>
              <div className="size-16 rounded-md bg-primary-label">label</div>
            </div>
          </div>

          {/* secondary */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-secondary-default">secondary</p>
            <div className="flex gap-10">
              <div className="bg-yellow-10 size-16 rounded-md"></div>
              <div className="size-16 rounded-md bg-secondary-default">default</div>
              <div className="size-16 rounded-md bg-secondary-subtle">subtle</div>
              <div className="size-16 rounded-md bg-secondary-lighter">lighter</div>
              <div className="size-16 rounded-md bg-secondary-darker">darker</div>
              <div className="size-16 rounded-md bg-secondary-label">label</div>
            </div>
          </div>

          {/* success */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-success-default">success</p>
            <div className="flex gap-10">
              <div className="bg-yellow-10 size-16 rounded-md"></div>
              <div className="size-16 rounded-md bg-success-default">default</div>
              <div className="size-16 rounded-md bg-success-subtle">subtle</div>
              <div className="size-16 rounded-md bg-success-lighter">lighter</div>
              <div className="size-16 rounded-md bg-success-darker">darker</div>
              <div className="size-16 rounded-md bg-success-label">label</div>
            </div>
          </div>

          {/* error */}
          <div className="flex items-center gap-12">
            <p className="h2-bold capitalize text-error-default">error</p>
            <div className="flex gap-10">
              <div className="bg-yellow-10 size-16 rounded-md"></div>
              <div className="size-16 rounded-md bg-error-default">default</div>
              <div className="size-16 rounded-md bg-error-subtle">subtle</div>
              <div className="size-16 rounded-md bg-error-lighter">lighter</div>
              <div className="size-16 rounded-md bg-error-darker">darker</div>
              <div className="size-16 rounded-md bg-error-label">label</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TypoGroup = ({ title }: TypoGroupProps) => {
  const upperTitle = title.toUpperCase();
  return (
    <div className="flex gap-[88px]">
      <div className="flex gap-[88px]">
        <p className={`${title}-bold`}>{upperTitle} Bold</p>
        <p className={`${title}-regular`}>{upperTitle} Regular</p>
        <p className={`${title}-light -ml-[45px]`}>{upperTitle} Light</p>
      </div>
    </div>
  );
};

export default DemoPage;
