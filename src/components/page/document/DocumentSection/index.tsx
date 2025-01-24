'use client';
import DocumentCard from '@/components/ui/Card/DocumentCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import ControlledInput from '@/components/ui/Input';
import { useDebounce } from '@/hooks/useDebounce';
import { Search } from 'lucide-react';
import React, { ChangeEvent, useState } from 'react';

export default function DocumentSection() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounceSearch = useDebounce(searchQuery);
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <SectionCard customClass="w-full container max-w-[1440px] ">
      <div className="mb-2xl flex w-full justify-end laptop:mb-4xl">
        <div className="w-full laptop:w-fit">
          <ControlledInput
            required
            icon={<Search />}
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2xl laptop:gap-[120px]">
        <DocumentCard title={<EbookTitle />} tag="ebook" searchQuery={debounceSearch} />
        <DocumentCard title={<ServiceDocumentTitle />} tag="service" searchQuery={debounceSearch} />
      </div>
    </SectionCard>
  );
}
const EbookTitle = () => <h1 className="text-secondary-label">E-BOOK</h1>;
const ServiceDocumentTitle = () => (
  <span>
    Tài liệu
    <span className="text-secondary-label"> dịch vụ</span>
  </span>
);
