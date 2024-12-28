import { HTMLAttributes, ReactNode } from 'react';

interface SectionCardProps {
  title: ReactNode | string;
  children: ReactNode;
  description?: string;
  props?: HTMLAttributes<HTMLElement>;
}

const SectionCard = ({ children, title, description, ...props }: SectionCardProps) => {
  return (
    <section
      className="mobile:py-mobile_section_padding flex flex-col gap-2xl mobile:justify-start mobile:gap-l tablet:items-center tablet:gap-3xl desktop:py-desktop_section_padding"
      {...props}
    >
      <h2 className="uppercase h3-bold tablet:h2-bold laptop:h1-bold">{title}</h2>
      {description && <p className="body-regular mobile:w-full tablet:text-center laptop:w-1/2">{description}</p>}
      {children}
    </section>
  );
};

export default SectionCard;
