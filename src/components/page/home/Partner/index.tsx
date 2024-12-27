import { LogoCard } from '@/components/ui/Card/LogoCard';
import SectionCard from '@/components/ui/Card/SectionCard';

const partners = [
  {
    id: 0,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 1,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 2,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 3,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 4,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  }
];

const Partner = () => {
  function splitIconsIntoChunks<T>(icons: Array<T>, chunkSize = 4) {
    const arrayParent = [];
    for (let i = 0; i < icons.length; i += chunkSize) {
      const arrayChild = icons.slice(i, i + chunkSize);
      arrayParent.push(arrayChild);
    }
    return arrayParent;
  }
  const rows = splitIconsIntoChunks(partners, 4);

  return (
    <SectionCard
      title={SectionTitle}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    >
      <div className="flex flex-col items-center laptop:gap-3xl laptop:px-3xl desktop:gap-4xl desktop:px-4xl">
        {rows.map((row, i) => {
          return (
            <div className="flex flex-row items-center laptop:gap-3xl desktop:gap-4xl" key={i}>
              {row.map(({ href, id, name, src }) => {
                return <LogoCard key={id} name={name} src={src} href={href} />;
              })}
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
};

const SectionTitle = (
  <p>
    PHỐI HỢP CÙNG CÁC <span className="text-secondary-label">ĐƠN VỊ QUỐC TẾ</span>
  </p>
);
export default Partner;
