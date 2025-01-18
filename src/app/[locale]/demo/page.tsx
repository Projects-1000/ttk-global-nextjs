'use client';

import SubmitButton from '@/components/ui/Button/Button';
import SplitText from '@/components/ui/Typography/SplitText';
import TextHeading from '@/components/ui/Typography/TextHeading';
import CallMadeIcon from '@mui/icons-material/CallMade';
import '@/styles/scss/_helper.scss';
interface TypoGroupProps {
  title: string;
}

const DemoPage = () => {
  return (
    <>
      <section className="phone:bg-red-500 flex flex-col gap-24 overflow-hidden py-20 tablet:bg-blue-500 laptop:bg-yellow-500 desktop:bg-white">
        <div className="flex flex-col items-start">
          <div className="flex gap-4 py-10">
            <SubmitButton
              isDirty={false}
              text="Label"
              // size="medium"
              color="primary"
              isSubmitting={false}
              iconPosition="end"
              icon={<CallMadeIcon />}
              // props={{className: 'custom-class'}}
            />
            <SubmitButton
              isDirty={false}
              text="Label"
              size="small"
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
          <p className="mb-8 h1-bold">Typography</p>
          <div className="flex flex-col gap-12">
            <div className="flex gap-[88px]">
              <div className="flex gap-[88px] capitalize">
                <p className={`heading h1-bold`}>H1 Bold</p>
                <p className={`h1-semibold`}>H1 SemiBold</p>
                <p className={`h1-regular`}>H1 Regular</p>
                <p className={`-ml-[45px] h1-light`}>H1 Light</p>
              </div>
            </div>
            <div className="flex gap-[88px]">
              <div className="flex gap-[88px] capitalize">
                <p className={`h2-bold`}>H2 Bold</p>
                <p className={`h2-semibold`}>H2 SemiBold</p>
                <p className={`h2-regular`}>H2 Regular</p>
                <p className={`-ml-[45px] h2-light`}>H2 Light</p>
              </div>
            </div>
            <div className="flex gap-[88px]">
              <div className="flex gap-[88px] capitalize">
                <p className={`h3-bold`}>H3 Bold</p>
                <p className={`h3-semibold`}>H3 SemiBold</p>
                <p className={`h3-regular`}>H3 Regular</p>
                <p className={`-ml-[45px] h3-light`}>H3 Light</p>
              </div>
            </div>
            <div className="flex gap-[88px]">
              <div className="flex gap-[88px] capitalize">
                <p className={`h4-bold`}>H4 Bold</p>
                <p className={`h4-semibold`}>H4 SemiBold</p>
                <p className={`h4-regular`}>H4 Regular</p>
                <p className={`-ml-[45px] h4-light`}>H4 Light</p>
              </div>
            </div>
            <div className="flex gap-[88px]">
              <div className="flex gap-[88px] capitalize">
                <p className={`headline-bold`}>Headline Bold</p>
                <p className={`headline-semibold`}>Headline SemiBold</p>
                <p className={`headline-regular`}>Headline Regular</p>
                <p className={`-ml-[45px] headline-light`}>Headline Light</p>
              </div>
            </div>
            <div className="flex gap-[88px]">
              <div className="flex gap-[88px] capitalize">
                <p className={`body-bold`}>Body Bold</p>
                <p className={`body-semibold`}>Body SemiBold</p>
                <p className={`body-regular`}>Body Regular</p>
                <p className={`-ml-[45px] body-light`}>Body Light</p>
              </div>
            </div>
            <div className="flex gap-[88px]">
              <div className="flex gap-[88px] capitalize">
                <p className={`subtitle-bold`}>Subtitle Bold</p>
                <p className={`subtitle-semibold`}>Subtitle SemiBold</p>
                <p className={`subtitle-regular`}>Subtitle Regular</p>
                <p className={`-ml-[45px] subtitle-light`}>Subtitle Light</p>
              </div>
            </div>
            <div className="flex gap-[88px]">
              <div className="flex gap-[88px] capitalize">
                <p className={`caption-bold`}>Caption Bold</p>
                <p className={`caption-semibold`}>Caption SemiBold</p>
                <p className={`caption-regular`}>Caption Regular</p>
                <p className={`-ml-[45px] caption-light`}>Caption Light</p>
              </div>
            </div>
            <div className="flex gap-[88px]">
              <div className="flex gap-[88px] capitalize">
                <p className={`footnote-bold`}>Footnote Bold</p>
                <p className={`footnote-semibold`}>Footnote SemiBold</p>
                <p className={`footnote-regular`}>Footnote Regular</p>
                <p className={`-ml-[45px] footnote-light`}>Footnote Light</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-se">
          <p className="mb-8 h1-bold">Colors</p>
          <div className="flex flex-col gap-12">
            {/* Anzac */}
            <div className="flex items-center gap-12">
              <p className="capitalize text-anzac-500 h2-bold">Anzac</p>
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
              <p className="capitalize text-blue-500 h2-bold">blue</p>
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
              <p className="text-grey-500 capitalize h2-bold">grey</p>
              <div className="flex gap-10">
                <div className="bg-greys rounded-md size-16"></div>
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
              <p className="capitalize text-red-500 h2-bold">red</p>
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
              <p className="capitalize text-green-500 h2-bold">green</p>
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
              <p className="capitalize text-yellow-500 h2-bold">yellow</p>
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
              <p className="capitalize text-primary-default h2-bold">primary</p>
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
              <p className="capitalize text-secondary-default h2-bold">secondary</p>
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
              <p className="capitalize text-success-default h2-bold">success</p>
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
              <p className="capitalize text-error-default h2-bold">error</p>
              <div className="flex gap-10">
                <div className="bg-yellow-10 rounded-md size-16"></div>
                <div className="rounded-md size-16 bg-error-default">default</div>
                <div className="rounded-md size-16 bg-error-subtle">subtle</div>
                <div className="rounded-md size-16 bg-error-lighter">lighter</div>
                <div className="rounded-md size-16 bg-error-darker">darker</div>
                <div className="rounded-md size-16 bg-error-label">label</div>
              </div>
            </div>

            {/* Text Heading */}
            <div className="max-w-4xl space-y-8">
              <TextHeading>Default Heading</TextHeading>

              <TextHeading backgroundColor="from-red-100" borderColor="border-red-400" className="text-red-900">
                Red Theme
              </TextHeading>

              <TextHeading
                backgroundColor="from-emerald-100"
                borderColor="border-emerald-400"
                className="text-emerald-900"
              >
                Green Theme
              </TextHeading>

              <TextHeading
                backgroundColor="from-violet-100"
                borderColor="border-violet-400"
                className="text-violet-900"
              >
                Purple Theme
              </TextHeading>

              <TextHeading backgroundColor="from-amber-100" borderColor="border-amber-400" className="text-amber-900">
                Amber Theme
              </TextHeading>

              <TextHeading
                backgroundColor="from-yellow-400"
                borderColor="border-indigo-600"
                className="text-2xl font-black text-indigo-900"
              >
                <h1 className="h3-bold laptop:h1-bold">H1 Text Heading</h1>
              </TextHeading>

              <TextHeading
                backgroundColor="from-yellow-400"
                borderColor="border-indigo-600"
                className="text-2xl font-black text-indigo-900"
              >
                <SplitText
                  text="Each letter animates individually"
                  className="h3-bold laptop:h1-bold"
                  delay={50}
                ></SplitText>
              </TextHeading>
              <SplitText text="Each letter animates individually" className="h3-bold laptop:h1-bold" delay={50} />
              <h2 className="heading headline-bold laptop:h3-bold">Ý tưởng kinh doanh tốt là như thế nào?</h2>
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
        <p className={`${title}-semibold`}>{upperTitle} SemiBold</p>
        <p className={`${title}-regular`}>{upperTitle} Regular</p>
        <p className={`${title}-light -ml-[45px]`}>{upperTitle} Light</p>
      </div>
    </div>
  );
};

export default DemoPage;
