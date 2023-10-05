'use client';

import Image from 'next/image';

const listImage = [
  { src: '/logo_google.svg', alt: 'logo google' },
  { src: '/logos_facebook.svg', alt: 'logo google' },
  { src: '/logo_apple.svg', alt: 'logo google' },
];
const FooterForm = () => {
  return (
    <>
      <div className="before:content-[''] before:mr-2 after:content-[''] after:ml-2 before:w-[20%] before:h-[1px] before:block flex after:h-[1px] after:w-[20%] after:block before:bg-[#373535] after:bg-[#373535] items-center justify-center">
        <span className="m-6 text-xl">Login with</span>
      </div>
      <div className="flex gap-14 items-center justify-center pb-4">
        {listImage.map((item) => (
          <Image
            key={item.src}
            src={item.src}
            width={40}
            height={40}
            alt={item.alt}
            className="hover:cursor-pointer"
          />
        ))}
      </div>
    </>
  );
};

export default FooterForm;
