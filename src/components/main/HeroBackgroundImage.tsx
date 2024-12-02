import Image from 'next/image';
import React from 'react';

const HeroBackgroundImage = () => {
  return (
    <div className="absolute -z-10 h-[484px] w-full overflow-hidden">
      <Image
        src="/test.png"
        alt="배경 이미지"
        width={1000}
        height={1000}
        className="h-full w-full scale-110 object-cover blur-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white via-90% to-white">
        {}
      </div>
    </div>
  );
};

export default HeroBackgroundImage;
