import { BlogModelProps, TagModelProps } from '@/types/model.type';
import BLogImage from '../../public/assets/demo/blog-01.jpg';

export const blogList: BlogModelProps[] = [
  {
    id: '0',
    title: '0 - Non-GMO: Lợi Ích Và Tầm Quan Trọng Trong Thực Phẩm Hiện Đại',
    slug: 'blog-slug',
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
    isHighlight: true,
    content:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15672.052780416703!2d106.7485311627388!3d10.886600556961433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9005d62c803%3A0x401bfb5080051557!2zTmjDoCB0cuG7jSBjw7QgSHV54buBbg!5e0!3m2!1svi!2s!4v1735991419818!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    id: '1',
    title: '1- Non-GMO: Lợi Ích Và Tầm Quan Trọng Trong Thực Phẩm Hiện Đại',
    slug: 'blog-slug',
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
    slug: 'blog-slug',
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
    slug: 'blog-slug',
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
