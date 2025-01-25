import React from 'react';
import notfound from '@/assets/notfound/notfound.png';
import Image from 'next/image';
export default function Empty() {
  return (
    <div className="flex flex-col items-center justify-center gap-xl laptop:gap-3xl">
      <Image src={notfound} alt="empty" width={0} height={0} sizes="100vw" className="w-full object-contain " />
      <p className="text-primary-label body-bold laptop:h3-bold">Không tìm thấy kết quả</p>
      <p className="body-regular">
        Không tìm thấy kết quả mà bạn mong muốn? Thay đổi bộ lọc hoặc từ khóa để tìm được kết quả phù hợp.
      </p>
    </div>
  );
}
