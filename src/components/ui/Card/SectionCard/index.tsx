import { HTMLAttributes, ReactNode } from 'react';

interface SectionCardProps {
  title: ReactNode | string;
  children: ReactNode;
  description?: string;
  props?: HTMLAttributes<HTMLElement>;
}

const SectionCard = ({ children, title, description, ...props }: SectionCardProps) => {
  return (
    <section className="flex flex-col items-center gap-2xl py-desktop_section_padding tablet:gap-3xl" {...props}>
      <h2 className="uppercase h3-bold tablet:h2-bold laptop:h1-bold">{title}</h2>
      {description && <p className="w-1/2 text-center body-regular">{description}</p>}
      {children}
    </section>
  );
};

export default SectionCard;