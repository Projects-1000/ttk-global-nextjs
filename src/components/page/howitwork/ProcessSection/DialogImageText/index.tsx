import DialogButton from '@/components/ui/Button/DiaglogButton';
import { DialogButtonProps } from '@/types/button.type';
import Image, { ImageProps } from 'next/image';

interface DialogImageTextProps extends Pick<DialogButtonProps, 'title' | 'className'> {
  image: ImageProps['src'];
}

const DialogImageText = ({ image, title, className }: DialogImageTextProps) => {
  return (
    <DialogButton
      dialogButton={
        <p className="inline text-secondary-label underline subtitle-bold hover:text-yellow-600 laptop:body-bold">
          {title}
        </p>
      }
      className={`normal-case hover:bg-transparent ${className}`}
    >
      <ProcessImage image={image} />
    </DialogButton>
  );
};

const ProcessImage = ({ image }: DialogImageTextProps) => {
  return (
    <div className="flex flex-col items-center bg-blue-10 p-4xl">
      <div className="w-full">
        <Image
          src={image}
          alt="carouselImage"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
};

export default DialogImageText;
