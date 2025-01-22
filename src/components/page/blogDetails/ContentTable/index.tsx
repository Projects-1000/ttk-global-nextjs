'use client';
import { ArrowDropDownIcon } from '@/components/ui/icons/ArrowDropDownIcon';
import Link from 'next/link';
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from 'react';
import './index.scss';

interface Heading {
  id: string;
  text: string;
  tag: 'H2' | 'H3';
  children?: Heading[];
}
interface ContentTableProps
  extends Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className'> {
  content: string;
}
interface ContentTableHeadingProps extends Heading {
  activeId: string | null;
  setActiveId: Dispatch<SetStateAction<string | null>>;
  toggleExpand?: React.MouseEventHandler<HTMLLIElement>;
  isExpanded?: boolean;
}

const ContentTable = ({ content, className }: ContentTableProps) => {
  const [nestedHeadings, setNestedHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');

      const headings: Heading[] = [];
      let currentH2: Heading | null = null;

      doc.querySelectorAll('h2, h3').forEach((heading) => {
        const text = heading.textContent?.trim() || '';

        if (text) {
          const id = removeVietnameseTones(text);
          const tag = heading.tagName as 'H2' | 'H3';

          if (tag === 'H2') {
            currentH2 = { id, text, tag, children: [] };
            headings.push(currentH2);
          } else if (tag === 'H3' && currentH2) {
            currentH2.children?.push({ id, text, tag });
          }

          heading.id = id;
        }
      });

      setNestedHeadings(headings);
    }
  }, [content]);

  const removeVietnameseTones = (str: string): string => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
  };

  const toggleExpand = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={`table-content ${className}`}>
      <nav className="table-content__nav">
        <h2 className="border-b-2 border-primary-default py-m" style={{ borderBottomStyle: 'solid' }}>
          <span className="uppercase text-primary-default body-bold">Mục lục</span>
        </h2>
        <ul className="table-content__list">
          {nestedHeadings.map((heading, index) => {
            return (
              <>
                <ContentTableHeading
                  key={heading.id}
                  activeId={activeId}
                  setActiveId={setActiveId}
                  toggleExpand={() => toggleExpand(heading.id)}
                  isExpanded={!!expandedSections[heading.id]}
                  {...heading}
                />

                {heading.children && (
                  <ul
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      !!expandedSections[heading.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {heading.children.map((child, index) => (
                      <ContentTableHeading key={child.id} {...child} activeId={activeId} setActiveId={setActiveId} />
                    ))}
                  </ul>
                )}
              </>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const ContentTableHeading = ({
  id,
  tag,
  text,
  activeId,
  setActiveId,
  toggleExpand,
  isExpanded,
  children
}: ContentTableHeadingProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveId(id);
  };
  return (
    <li
      onClick={toggleExpand}
      className={`table-content-heading group ${tag === 'H3' ? 'table-content-heading--h3' : 'table-content-heading--h2'} `}
      style={{ borderLeftStyle: tag === 'H3' ? 'solid' : 'none' }}
    >
      <>
        <Link
          onClick={handleClick}
          className={`table-content-heading__link no-underline hover:text-primary-label hover:underline ${activeId === id ? 'text-primary-label subtitle-bold' : 'text-black'}`}
          href={`#${id}`}
        >
          {text}
        </Link>
        {tag === 'H2' && !!children?.length && (
          <ArrowDropDownIcon
            className={`smooth-transition mt-s shrink-0 opacity-80 duration-[350ms] group-hover:opacity-100 ${isExpanded ? '-rotate-180' : ''}`}
          />
        )}
      </>
    </li>
  );
};

export default ContentTable;
