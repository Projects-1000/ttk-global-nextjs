'use client';

import SubmitButton from '@/components/ui/Button/Button';
import LocaleSwitcher from '@/components/ui/LocalSwitcher';
import CallMadeIcon from '@mui/icons-material/CallMade';

interface TypoGroupProps {
  title: string;
}

const DemoPage = () => {
  return (
    <>
      <section className="overflow-hidden phone:bg-red-500 flex flex-col gap-24 py-20 tablet:bg-blue-500 laptop:bg-yellow-500 desktop:bg-white">
        <div className="flex flex-col items-start">
          <LocaleSwitcher />
          <div className="flex gap-4 py-10">
            <SubmitButton
              isDirty={false}
              text="Label"
              size="medium"
              color="primary"
              isSubmitting={false}
              iconPosition="end"
              icon={<CallMadeIcon />}
              // props={{className: 'custom-class'}}
            />
            <SubmitButton
              isDirty={true}
              text="Click"
              size="medium"
              color="primary"
              isSubmitting={true}
              iconPosition="start"
              icon={<CallMadeIcon />}
            />
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="primary"
              isSubmitting={true}
              iconPosition="only"
              isPill={true}
              icon={<CallMadeIcon />}
            />
            <SubmitButton isDirty={true} text="Label" size="medium" color="primary" isSubmitting={true} />
            <SubmitButton isDirty={true} text="Label" size="medium" color="primary" isSubmitting={true} isPill={true} />
          </div>

          <div className="flex gap-4 py-10">
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="primary"
              isSubmitting={false}
              iconPosition="end"
              icon={<CallMadeIcon />}
              classCustom="!bg-red-500 !text-primary-default"
              props={{}}
            />
            <SubmitButton
              isDirty={true}
              text="Click"
              size="medium"
              color="primary"
              isSubmitting={false}
              iconPosition="start"
              icon={<CallMadeIcon />}
            />
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="primary"
              isSubmitting={false}
              iconPosition="only"
              isPill={true}
              icon={<CallMadeIcon />}
            />
            <SubmitButton isDirty={true} text="Label" size="medium" color="primary" isSubmitting={false} />
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="primary"
              isSubmitting={false}
              isPill={true}
            />
          </div>

          <div className="flex gap-4 py-10">
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="secondary"
              isSubmitting={true}
              iconPosition="end"
              icon={<CallMadeIcon />}
            />
            <SubmitButton
              isDirty={true}
              text="Click"
              size="medium"
              color="secondary"
              isSubmitting={true}
              iconPosition="start"
              icon={<CallMadeIcon />}
            />
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="secondary"
              isSubmitting={true}
              iconPosition="only"
              isPill={true}
              icon={<CallMadeIcon />}
            />
            <SubmitButton isDirty={true} text="Label" size="medium" color="secondary" isSubmitting={true} />
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="secondary"
              isSubmitting={true}
              isPill={true}
            />
          </div>

          <div className="flex gap-4 py-10">
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="secondary"
              isSubmitting={false}
              iconPosition="end"
              icon={<CallMadeIcon />}
            />
            <SubmitButton
              isDirty={true}
              text="Click"
              size="medium"
              color="secondary"
              isSubmitting={false}
              iconPosition="start"
              icon={<CallMadeIcon />}
            />
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="secondary"
              isSubmitting={false}
              iconPosition="only"
              isPill={true}
              icon={<CallMadeIcon />}
            />
            <SubmitButton isDirty={true} text="Label" size="medium" color="secondary" isSubmitting={false} />
            <SubmitButton
              isDirty={true}
              text="Label"
              size="medium"
              color="secondary"
              isSubmitting={false}
              isPill={true}
            />
          </div>
        </div>

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

        <div className="text-se">
          <p className="h1-bold mb-8">Colors</p>
          <div className="flex flex-col gap-12">
            {/* Anzac */}
            <div className="flex items-center gap-12">
              <p className="h2-bold capitalize text-anzac-500">Anzac</p>
              <div className="flex gap-10">
                <div className="rounded-md size-16 bg-anzac-50">50</div>
                <div className="rounded-md size-16 bg-anzac-100">100</div>
                <div className="rounded-md size-16 bg-anzac-200">200</div>
                <div className="rounded-md size-16 bg-anzac-300">300</div>
                <div className="rounded-md size-16 bg-anzac-400">400</div>
                <div className="rounded-md size-16 bg-anzac-500">500</div>
                <div className="rounded-md size-16 bg-anzac-600">600</div>
                <div className="rounded-md size-16 bg-anzac-700">700</div>
                <div className="rounded-md size-16 bg-anzac-800">800</div>
                <div className="rounded-md size-16 bg-anzac-900">900</div>
                <div className="bg-anzac-950 rounded-md size-16">950</div>
              </div>
            </div>

            {/* Blue */}
            <div className="flex items-center gap-12">
              <p className="h2-bold capitalize text-blue-500">blue</p>
              <div className="flex gap-10">
                <div className="rounded-md size-16 bg-blue-10"></div>
                <div className="rounded-md size-16 bg-blue-50">50</div>
                <div className="rounded-md size-16 bg-blue-100">100</div>
                <div className="rounded-md size-16 bg-blue-200">200</div>
                <div className="rounded-md size-16 bg-blue-300">300</div>
                <div className="rounded-md size-16 bg-blue-400">400</div>
                <div className="rounded-md size-16 bg-blue-500">500</div>
                <div className="rounded-md size-16 bg-blue-600">600</div>
                <div className="rounded-md size-16 bg-blue-700">700</div>
                <div className="rounded-md size-16 bg-blue-800">800</div>
                <div className="rounded-md size-16 bg-blue-900">900</div>
                <div className="rounded-md size-16 bg-blue-950">950</div>
              </div>
            </div>

            {/* Grey */}
            <div className="flex items-center gap-12">
              <p className="h2-bold text-grey-500 capitalize">grey</p>
              <div className="flex gap-10">
                <div className="bg-grey-10 rounded-md size-16"></div>
                <div className="rounded-md bg-grey-50 size-16">50</div>
                <div className="rounded-md bg-grey-100 size-16">100</div>
                <div className="rounded-md bg-grey-200 size-16">200</div>
                <div className="rounded-md bg-grey-300 size-16">300</div>
                <div className="rounded-md bg-grey-400 size-16">400</div>
                <div className="rounded-md bg-grey-500 size-16">500</div>
                <div className="rounded-md bg-grey-600 size-16">600</div>
                <div className="rounded-md bg-grey-700 size-16">700</div>
                <div className="rounded-md bg-grey-800 size-16">800</div>
                <div className="rounded-md bg-grey-900 size-16">900</div>
                <div className="rounded-md bg-grey-950 size-16">950</div>
              </div>
            </div>

            {/* Red */}
            <div className="flex items-center gap-12">
              <p className="h2-bold capitalize text-red-500">red</p>
              <div className="flex gap-10">
                <div className="bg-red-10 rounded-md size-16"></div>
                <div className="rounded-md size-16 bg-red-50">50</div>
                <div className="rounded-md size-16 bg-red-100">100</div>
                <div className="rounded-md size-16 bg-red-200">200</div>
                <div className="rounded-md size-16 bg-red-300">300</div>
                <div className="rounded-md size-16 bg-red-400">400</div>
                <div className="rounded-md size-16 bg-red-500">500</div>
                <div className="rounded-md size-16 bg-red-600">600</div>
                <div className="rounded-md size-16 bg-red-700">700</div>
                <div className="rounded-md size-16 bg-red-800">800</div>
                <div className="rounded-md size-16 bg-red-900">900</div>
                <div className="rounded-md size-16 bg-red-950">950</div>
              </div>
            </div>

            {/* Green */}
            <div className="flex items-center gap-12">
              <p className="h2-bold capitalize text-green-500">green</p>
              <div className="flex gap-10">
                <div className="bg-green-10 rounded-md size-16"></div>
                <div className="rounded-md size-16 bg-green-50">50</div>
                <div className="rounded-md size-16 bg-green-100">100</div>
                <div className="rounded-md size-16 bg-green-200">200</div>
                <div className="rounded-md size-16 bg-green-300">300</div>
                <div className="rounded-md size-16 bg-green-400">400</div>
                <div className="rounded-md size-16 bg-green-500">500</div>
                <div className="rounded-md size-16 bg-green-600">600</div>
                <div className="rounded-md size-16 bg-green-700">700</div>
                <div className="rounded-md size-16 bg-green-800">800</div>
                <div className="rounded-md size-16 bg-green-900">900</div>
                <div className="rounded-md size-16 bg-green-950">950</div>
              </div>
            </div>

            {/* Yellow */}
            <div className="flex items-center gap-12">
              <p className="h2-bold capitalize text-yellow-500">yellow</p>
              <div className="flex gap-10">
                <div className="bg-yellow-10 rounded-md size-16"></div>
                <div className="rounded-md size-16 bg-yellow-50">50</div>
                <div className="rounded-md size-16 bg-yellow-100">100</div>
                <div className="rounded-md size-16 bg-yellow-200">200</div>
                <div className="rounded-md size-16 bg-yellow-300">300</div>
                <div className="rounded-md size-16 bg-yellow-400">400</div>
                <div className="rounded-md size-16 bg-yellow-500">500</div>
                <div className="rounded-md size-16 bg-yellow-600">600</div>
                <div className="rounded-md size-16 bg-yellow-700">700</div>
                <div className="rounded-md size-16 bg-yellow-800">800</div>
                <div className="rounded-md size-16 bg-yellow-900">900</div>
                <div className="rounded-md size-16 bg-yellow-950">950</div>
              </div>
            </div>

            {/* Primary */}
            <div className="flex items-center gap-12">
              <p className="h2-bold capitalize text-primary-default">primary</p>
              <div className="flex gap-10">
                <div className="bg-yellow-10 rounded-md size-16"></div>
                <div className="rounded-md size-16 bg-primary-default">default</div>
                <div className="rounded-md size-16 bg-primary-subtle">subtle</div>
                <div className="rounded-md size-16 bg-primary-lighter">lighter</div>
                <div className="rounded-md size-16 bg-primary-darker">darker</div>
                <div className="rounded-md size-16 bg-primary-label">label</div>
              </div>
            </div>

            {/* secondary */}
            <div className="flex items-center gap-12">
              <p className="h2-bold capitalize text-secondary-default">secondary</p>
              <div className="flex gap-10">
                <div className="bg-yellow-10 rounded-md size-16"></div>
                <div className="rounded-md size-16 bg-secondary-default">default</div>
                <div className="rounded-md size-16 bg-secondary-subtle">subtle</div>
                <div className="rounded-md size-16 bg-secondary-lighter">lighter</div>
                <div className="rounded-md size-16 bg-secondary-darker">darker</div>
                <div className="rounded-md size-16 bg-secondary-label">label</div>
              </div>
            </div>

            {/* success */}
            <div className="flex items-center gap-12">
              <p className="h2-bold capitalize text-success-default">success</p>
              <div className="flex gap-10">
                <div className="bg-yellow-10 rounded-md size-16"></div>
                <div className="rounded-md size-16 bg-success-default">default</div>
                <div className="rounded-md size-16 bg-success-subtle">subtle</div>
                <div className="rounded-md size-16 bg-success-lighter">lighter</div>
                <div className="rounded-md size-16 bg-success-darker">darker</div>
                <div className="rounded-md size-16 bg-success-label">label</div>
              </div>
            </div>

            {/* error */}
            <div className="flex items-center gap-12">
              <p className="h2-bold capitalize text-error-default">error</p>
              <div className="flex gap-10">
                <div className="bg-yellow-10 rounded-md size-16"></div>
                <div className="rounded-md size-16 bg-error-default">default</div>
                <div className="rounded-md size-16 bg-error-subtle">subtle</div>
                <div className="rounded-md size-16 bg-error-lighter">lighter</div>
                <div className="rounded-md size-16 bg-error-darker">darker</div>
                <div className="rounded-md size-16 bg-error-label">label</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const TypoGroup = ({ title }: TypoGroupProps) => {
  const upperTitle = title;
  return (
    <div className="flex gap-[88px]">
      <div className="flex gap-[88px] capitalize">
        <p className={`${title}-bold`}>{upperTitle} Bold</p>
        <p className={`${title}-bold`}>{upperTitle} Bold</p>
        <p className={`${title}-regular`}>{upperTitle} Regular</p>
        <p className={`${title}-light -ml-[45px]`}>{upperTitle} Light</p>
      </div>
    </div>
  );
};

export default DemoPage;
