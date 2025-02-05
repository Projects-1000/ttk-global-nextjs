'use client';
import GridBackground from '@/assets/GridBackground';
import { LogoCard } from '@/components/ui/Card/LogoCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import LoadMoreIcon from '@/components/ui/icons/LoadMoreIcon';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const partners = [
  {
    id: 0,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/burgerprints.png'
  },
  {
    id: 1,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/cropped-Gearment-Linear-Full-col.png'
  },
  {
    id: 2,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/Etsy_logo_lg_rgb.png'
  },
  {
    id: 3,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/lianlian global logo.png'
  },
  {
    id: 4,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/Logo_AGS.png'
  },
  {
    id: 5,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/logo-merchize.png'
  },
  {
    id: 6,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/logo-shopbase.png'
  },
  {
    id: 7,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/New_Wise.png'
  },
  {
    id: 8,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/new-logo-only-the-brave.png'
  },
  {
    id: 9,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/Payoneer-Logo.png'
  },
  {
    id: 10,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/paypal.png'
  },
  {
    id: 11,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/PingPong_Logo-us.png'
  },
  {
    id: 12,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/printway-logo.png'
  },
  {
    id: 13,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/shopify-logo-2018.png'
  },
  {
    id: 14,
    name: 'Amazon',
    href: '/',
    src: '/assets/demo/partners/stripe.png'
  }
];

const itemVariant = {
  hidden: {
    opacity: 0,
    y: -20,
    height: 0
  },
  show: {
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: {
      height: {
        duration: 0.3,
        ease: 'easeOut'
      },
      opacity: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    height: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: 'easeIn'
      },
      opacity: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const Partner = () => {
  const defaultVisibleMobile = 6;
  const defaultVisibleDesktop = 16;
  const [isExpanded, setIsExpanded] = useState(false);
  const [chunkSize, setChunkSize] = useState(window.innerWidth <= 768 ? 3 : 4);
  const [visibleItems, setVisibleItems] = useState(
    window.innerWidth <= 768 ? defaultVisibleMobile : defaultVisibleDesktop
  );
  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth <= 768) {
        setChunkSize(3);
      } else {
        setChunkSize(4);
      }
    };

    updateChunkSize();
    window.addEventListener('resize', updateChunkSize);

    return () => {
      window.removeEventListener('resize', updateChunkSize);
    };
  }, []);

  const alwaysVisiblePartners = partners.slice(
    0,
    window.innerWidth <= 768 ? defaultVisibleMobile : defaultVisibleDesktop
  );
  const toggleablePartners = partners.slice(window.innerWidth <= 768 ? defaultVisibleMobile : defaultVisibleDesktop);

  const rows = splitIconsIntoChunks(alwaysVisiblePartners, chunkSize);
  const toggleableRows = splitIconsIntoChunks(toggleablePartners, chunkSize);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
    if (window.innerWidth <= 768) {
      setVisibleItems(!isExpanded ? partners.length : defaultVisibleMobile);
    } else setVisibleItems(!isExpanded ? partners.length : defaultVisibleDesktop);
  };

  function splitIconsIntoChunks<T>(icons: Array<T>, chunkSize = 4) {
    const arrayParent = [];
    for (let i = 0; i < icons.length; i += chunkSize) {
      const arrayChild = icons.slice(i, i + chunkSize);
      arrayParent.push(arrayChild);
    }
    return arrayParent;
  }

  const isShowingLoadMore = () => {
    if (window.innerWidth <= 768) return defaultVisibleMobile >= partners.length ? false : true;
    else return defaultVisibleDesktop >= partners.length ? false : true;
  };

  return (
    <SectionCard
      isPaddingContent
      title={SectionTitle}
      description="TTK Global Ventures hợp tác với trên 10 đơn vị quốc tế, 
hỗ trợ đa dạng kênh bán hàng và phương thức thanh toán."
      customClass="relative"
    >
      <motion.div
        className="laptop:container flex w-full flex-col items-center gap-l tablet:gap-xl laptop:flex laptop:gap-4xl desktop:gap-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Always visible rows */}
        {rows.map((row, i) => (
          <motion.div
            className="z-10 flex w-full flex-row items-center justify-between gap-l tablet:justify-center tablet:gap-xl laptop:gap-4xl desktop:gap-4xl"
            key={i}
            variants={itemVariant}
          >
            {row.map(({ href, id, name, src }) => (
              <LogoCard key={id} name={name} src={src} href={href} />
            ))}
          </motion.div>
        ))}

        <AnimatePresence>
          {isExpanded &&
            toggleableRows.map((row, i) => (
              <motion.div
                className="z-10 flex w-full flex-row items-center justify-between gap-l overflow-hidden tablet:justify-center tablet:gap-xl laptop:gap-4xl desktop:gap-4xl"
                key={`toggle-${i}`}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={itemVariant}
              >
                {row.map(({ href, id, name, src }) => (
                  <LogoCard key={id} name={name} src={src} href={href} />
                ))}
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {isShowingLoadMore() && (
        <motion.div
          onClick={toggleReadMore}
          className={`relative z-10 mt-l flex cursor-pointer justify-center pt-xl`}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <LoadMoreIcon height="18" />
        </motion.div>
      )}

      <div className="absolute left-1/2 top-1/3 z-0 translate-x-[-50%] translate-y-[-40%]">
        <GridBackground className="scale-[1.5] laptop:scale-100" />
      </div>
    </SectionCard>
  );
};

const SectionTitle = (
  <p>
    PHỐI HỢP CÙNG CÁC <br className="tablet:hidden" />
    <span className="text-secondary-label"> ĐƠN VỊ QUỐC TẾ</span>
  </p>
);

export default Partner;
