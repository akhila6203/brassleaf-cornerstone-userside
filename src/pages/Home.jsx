import { Link } from "react-router-dom";

const CORNERSTONE_BANNER =
  "https://brassleaf.store/cornerstone/wp-content/uploads/2025/02/corner_stone_img.webp";

const uniformGroups = [
  {
    title: "PP1 - Grade 4 (BOYS)",
    slug: "nursery-to-4th-class-boys-uniform",
  },
  {
    title: "PP1 - Grade 4 (GIRLS)",
    slug: "nursery-to-4th-class-girls-uniform",
  },
  {
    title: "Grade 5 - Grade 12 (BOYS)",
    slug: "5th-class-to-12th-class-boys-uniform",
  },
  {
    title: "Grade 5 - Grade 12 (GIRLS)",
    slug: "5th-class-to-12th-class-girls-uniform",
  },
];

export default function Home() {
  return (
    <main className="min-h-[70vh] bg-white">
      {/* =====================================================
          HERO - HOME PAGE ONLY
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-slate-100">
        <img
          src={CORNERSTONE_BANNER}
          alt="Cornerstone School"
          className="
            h-[280px]
            w-full
            object-cover
            object-center

            sm:h-[380px]
            md:h-[450px]
            lg:h-[480px]
            xl:h-[520px]
          "
        />
      </section>

      {/* =====================================================
          SELECT CLASS SECTION
      ===================================================== */}
      <section
        className="
          bg-[#f7f8fa]
          px-4
          py-12

          sm:py-14
          md:py-16
          lg:py-[58px]
        "
      >
        <div className="mx-auto w-full max-w-[1180px]">
          <h1
            className="
              mb-8
              text-center
              text-[22px]
              font-black
              leading-tight
              text-[#243346]

              sm:text-[26px]
              md:text-[28px]
              lg:text-[30px]
            "
          >
            Select Your Class and Order Uniform
          </h1>

          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1000px]
              grid-cols-1
              gap-4

              sm:grid-cols-2
              sm:gap-5

              lg:grid-cols-4
              lg:gap-5
            "
          >
            {uniformGroups.map((group) => (
              <Link
                key={group.slug}
                to={`/uniforms/${group.slug}`}
                className="
                  flex
                  min-h-[76px]
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#D9A537]/60
                  bg-white
                  px-5
                  py-4
                  text-center
                  text-[15px]
                  font-extrabold
                  leading-6
                  text-[#D9A537]
                  shadow-sm
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-[#D9A537]
                  hover:bg-[#243346]
                  hover:text-white
                  hover:shadow-md

                  sm:text-[16px]
                "
              >
                <span className="underline decoration-[1px] underline-offset-4">
                  {group.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


// import {
//   Link,
// } from "react-router-dom";

// /* =========================================================
//    CORNERSTONE BANNER

//    This is the same banner image referenced by the
//    Cornerstone database / old Cornerstone website.
// ========================================================= */

// const CORNERSTONE_BANNER =
//   "https://brassleaf.store/cornerstone/wp-content/uploads/2025/02/corner_stone_img.webp";

// /* =========================================================
//    CORNERSTONE UNIFORM GROUPS

//    These routes are frontend routes only.

//    Product mapping is handled in UniformCollection.jsx
//    using the exact product IDs stored in the old
//    Cornerstone page configuration.
// ========================================================= */

// const uniformGroups = [
//   {
//     title:
//       "PP1 - Grade 4 (BOYS)",

//     slug:
//       "nursery-to-4th-class-boys-uniform",
//   },

//   {
//     title:
//       "PP1 - Grade 4 (GIRLS)",

//     slug:
//       "nursery-to-4th-class-girls-uniform",
//   },

//   {
//     title:
//       "Grade 5 - Grade 12 (BOYS)",

//     slug:
//       "5th-class-to-12th-class-boys-uniform",
//   },

//   {
//     title:
//       "Grade 5 - Grade 12 (GIRLS)",

//     slug:
//       "5th-class-to-12th-class-girls-uniform",
//   },
// ];

// export default function Home() {
//   return (
//     <main className="min-h-[70vh] bg-white">

//       {/* =====================================================
//           CORNERSTONE HERO BANNER
//       ===================================================== */}

//       <section
//         className="
//           relative
//           w-full
//           overflow-hidden
//           bg-slate-100
//         "
//       >
//         <img
//           src={CORNERSTONE_BANNER}
//           alt="Cornerstone School"
//           className="
//             h-[250px]
//             w-full
//             object-cover
//             object-center

//             sm:h-[340px]

//             md:h-[400px]

//             lg:h-[435px]

//             xl:h-[455px]
//           "
//         />
//       </section>

//       {/* =====================================================
//           UNIFORM GROUP LINKS
//       ===================================================== */}

//       <section
//   className="
//     bg-white
//     px-4

//     pt-16
//     pb-10

//     sm:pt-20
//     sm:pb-12

//     lg:pt-24
//     lg:pb-12
//   "
// >
//         <div
//           className="
//             mx-auto
//             grid
//             w-full
//             max-w-[1050px]
//             grid-cols-1
//             gap-5
//             text-center

//             sm:grid-cols-2
//             sm:gap-x-8
//             sm:gap-y-6

//             lg:grid-cols-4
//             lg:items-start
//             lg:gap-8
//           "
//         >
//           {uniformGroups.map(
//             (group) => (
//               <Link
//                 key={
//                   group.slug
//                 }
//                 to={`/uniforms/${group.slug}`}
//                 className="
//                   text-[16px]
//                   font-extrabold
//                   italic
//                   leading-6
//                   text-[#D9A537]
//                   underline
//                   decoration-[1.5px]
//                   underline-offset-2
//                   transition

//                   hover:text-[#243346]

//                   sm:text-[17px]

//                   lg:text-[18px]
//                 "
//               >
//                 {group.title}
//               </Link>
//             )
//           )}
//         </div>
//       </section>

//     </main>
//   );
// }


