// // pages/index.tsx
// import Image from 'next/image';
// import React from 'react';

// interface People {
//   id: string;
//   avatar: string;
// }

// const FOUNDER_DEMO: People[] = [
//   { id: '1', avatar: '/icons/1.svg' },
//   { id: '2', avatar: '/icons/2.svg' },
//   { id: '3', avatar: '/icons/3.svg' },
//   { id: '4', avatar: '/icons/4.svg' },
//   { id: '5', avatar: '/icons/5.svg' },
//   { id: '6', avatar: '/icons/6.svg' },
//   { id: '7', avatar: '/icons/8.svg' },
//   { id: '8', avatar: '/icons/9.svg' },
// ];

// const PageFeatureListing: React.FC = () => {
//   return (
//     <div className="relative p-6 w-full">
//       <h2 className="text-center mb-6 text-4xl unique-features-text">
//         W Get tons of unique features for yourM Listing.
//       </h2>
//       <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
//         {FOUNDER_DEMO.map((item) => (
//           <div key={item.id} className="max-w-sm mx-auto shadow-sm">
//             <div className="relative aspect-w-1 aspect-h-1">
//               <Image
//                 src={item.avatar}
//                 alt="feature_img"
//                 width={150}
//                 height={200}
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PageFeatureListing;


"use client"
import Image from 'next/image';
import React from 'react';

interface People {
  id: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  { id: '1', avatar: '/icons/1.svg' },
  { id: '2', avatar: '/icons/2.svg' },
  { id: '3', avatar: '/icons/3.svg' },
  { id: '4', avatar: '/icons/4.svg' },
  { id: '5', avatar: '/icons/5.svg' },
  { id: '6', avatar: '/icons/6.svg' },
  { id: '7', avatar: '/icons/8.svg' },
  { id: '8', avatar: '/icons/9.svg' },
];

const PageFeatureListing: React.FC = () => {
  return (
    <div className="relative p-6 w-full">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');

        .unique-features-text {
          font-family: 'Cinzel Decorative', cursive;
        }
      `}</style>
      <h2 className="text-center mb-6 text-4xl unique-features-text">
        Get tons of unique features for your Listing.
      </h2>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm mx-auto shadow-sm">
            <div className="relative aspect-w-1 aspect-h-1">
              <Image
                src={item.avatar}
                alt="feature_img"
                width={150}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageFeatureListing;
