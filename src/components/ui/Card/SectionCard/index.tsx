import { ReactNode } from 'react';

interface SectionCardProps {
  title: ReactNode | string;
  children: ReactNode;
  description?: string;
  props?: any;
}

const SectionCard = ({ children, title, description, ...props }: SectionCardProps) => {
  return (
    <section className="py-desktop_section_padding flex flex-col items-center gap-3xl" {...props}>
      <h2 className="h1-bold uppercase">{title}</h2>
      {description && <p className="body-regular">{description}</p>}
      {children}
    </section>
  );
};

export default SectionCard;
