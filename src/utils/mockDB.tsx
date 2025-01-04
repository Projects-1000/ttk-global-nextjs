import { BlogModelProps, TagModelProps } from "@/types/model.type";
import BLogImage from '../../public/assets/demo/blog-01.jpg';

export const blogList: BlogModelProps[] = [
    {
      id: '0',
      title: '0 - Non-GMO: Lợi Ích Và Tầm Quan Trọng Trong Thực Phẩm Hiện Đại',
      description:
        'Bạn có để ý thấy trên bao bì một số sản phẩm thực phẩm hiện nay thường xuất hiện dòng chữ “Non-GMO”? Chắc hẳn bạn đang thắc mắc Non-GMO là gì mà lại được nhiều người quan tâm đến vậy? Liệu nó có thực sự tốt cho sức khỏe và môi trường như lời đồn?',
      publishDate: '27/12/2024',
      coverImage: BLogImage,
      author: 'Admin',
      tags: [
        {
          id: '0',
          name: 'Nền tảng đa dịch vụ',
          blogAmount: 50
        },
        {
          id: '1',
          name: 'Nền tảng đa dịch vụ',
          blogAmount: 50
        },
        {
          id: '2',
          name: 'Nền tảng đa dịch vụ',
          blogAmount: 50
        }
      ],
      isHighlight: true
    },
    {
      id: '1',
      title: '1- Non-GMO: Lợi Ích Và Tầm Quan Trọng Trong Thực Phẩm Hiện Đại',
      description:
        'Bạn có để ý thấy trên bao bì một số sản phẩm thực phẩm hiện nay thường xuất hiện dòng chữ “Non-GMO”? Chắc hẳn bạn đang thắc mắc Non-GMO là gì mà lại được nhiều người quan tâm đến vậy? Liệu nó có thực sự tốt cho sức khỏe và môi trường như lời đồn?',
      publishDate: '27/12/2024',
      coverImage: BLogImage,
      author: 'Admin',
      isHighlight: true,
      tags: [
        {
          id: '0',
          name: 'Nền tảng đa dịch vụ',
          blogAmount: 50
        },
        {
          id: '1',
          name: 'Nền tảng đa dịch vụ',
          blogAmount: 50
        },
        {
          id: '2',
          name: 'Nền tảng đa dịch vụ',
          blogAmount: 50
        }
      ]
    },
    {
      id: '2',
      title: '2- Non-GMO: Lợi Ích Và Tầm Quan Trọng Trong Thực Phẩm Hiện Đại',
      description:
        'Bạn có để ý thấy trên bao bì một số sản phẩm thực phẩm hiện nay thường xuất hiện dòng chữ “Non-GMO”? Chắc hẳn bạn đang thắc mắc Non-GMO là gì mà lại được nhiều người quan tâm đến vậy? Liệu nó có thực sự tốt cho sức khỏe và môi trường như lời đồn?',
      publishDate: '27/12/2024',
      coverImage: BLogImage,
      author: 'Admin',
      isHighlight: true
    },
    {
      id: '3',
      title: '3- Non-GMO: Lợi Ích Và Tầm Quan Trọng Trong Thực Phẩm Hiện Đại',
      description:
        'Bạn có để ý thấy trên bao bì một số sản phẩm thực phẩm hiện nay thường xuất hiện dòng chữ “Non-GMO”? Chắc hẳn bạn đang thắc mắc Non-GMO là gì mà lại được nhiều người quan tâm đến vậy? Liệu nó có thực sự tốt cho sức khỏe và môi trường như lời đồn?',
      publishDate: '27/12/2024',
      coverImage: BLogImage,
      author: 'Admin',
      isHighlight: true
    }
  ];
  
  export const tagList: TagModelProps[] = [
    {
      id: '0',
      name: 'Nền tảng đa dịch vụ',
      blogAmount: 50
    },
    {
      id: '1',
      name: 'Báo chí',
      blogAmount: 50
    },
    {
      id: '2',
      name: 'Nền tảng đa dịch vụ',
      blogAmount: 50
    }
  ];