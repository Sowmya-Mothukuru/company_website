/*export default function TeamMembersSection() {
    const teamMembers = [
    {
      id: 1,
      name: "Theja",
      role: "Developer",
      image: "/images/T-M-1.svg",
    },
    {
      id: 2,
      name: "Ananya",
      role: "UI Designer",
      image: "/images/T-M-1.svg",
    },
    {
      id: 3,
      name: "Rahul",
      role: "Backend Developer",
      image: "/images/T-M-1.svg",
    },
    {
      id: 4,
      name: "Priya",
      role: "Product Manager",
      image: "/images/T-M-1.svg",
    },
  ];

  return (
    <section className="w-full  py-10 sm:py-12 md:py-16 lg:py-[5rem] bg-[#F8FBFF] overflow-hidden">

      <div className="flex flex-col gap-[1rem]">
 <div className="overflow-hidden group">
  <div className="flex gap-[0.875rem] animate-scrollMembers ">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="w-[16rem] sm:w-[17rem] lg:w-[18rem] 
                bg-[#EDEDED] rounded-[1.5rem] flex flex-col items-center
                p-[1rem] flex-shrink-0"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[16rem] sm:h-[17rem] lg:h-[18rem]
                  object-cover rounded-[1.25rem]"
                />
                <h3 className="mt-[1rem] font-spaceGrotesk font-bold
                text-[1.375rem] lg:text-[1.5rem] text-center">
                  {member.name}
                </h3>
                <p className="text-[1.125rem] text-gray-700 text-center">
                  {member.role}
                </p>

              </div>
            ))}

          </div>
        </div>
<div className="overflow-hidden group">
  <div className="flex gap-[0.875rem] animate-scrollMembers">

            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="w-[16rem] sm:w-[17rem] lg:w-[18rem]
                bg-[#EDEDED] rounded-[1.5rem] flex flex-col items-center
                p-[1rem] flex-shrink-0"
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[16rem] sm:h-[17rem] lg:h-[18rem]
                  object-cover rounded-[1.25rem]"
                />

                <h3 className="mt-[1rem] font-spaceGrotesk font-bold
                text-[1.375rem] lg:text-[1.5rem] text-center">
                  {member.name}
                </h3>

                <p className="text-[1.125rem] text-gray-700 text-center">
                  {member.role}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>

    </section>
  );
} */
export default function TeamMembersSection() {

  const teamMembers = [
    { id: 1, name: "Theja", role: "Developer", image: "/images/T-M-1.svg" },
    { id: 2, name: "Ananya", role: "UI Designer", image: "/images/T-M-1.svg" },
    { id: 3, name: "Rahul", role: "Backend Developer", image: "/images/T-M-1.svg" },
    { id: 4, name: "Priya", role: "Product Manager", image: "/images/T-M-1.svg" },
  ];

  return (
    <section className="
      w-full 
      py-10 sm:py-12 md:py-16 lg:py-[5rem]   /* ✅ responsive spacing */
      bg-[#F8FBFF] 
      overflow-hidden
    ">

      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[1rem]">

        {/* ROW 1 */}
        <div className="overflow-hidden group">
          <div className="flex gap-3 sm:gap-4 animate-scrollMembers">

            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="
                  w-[11rem] sm:w-[13rem] md:w-[15rem] lg:w-[18rem]
                  bg-[#EDEDED] 
                  rounded-[1.25rem] sm:rounded-[1.5rem]
                  flex flex-col items-center
                  p-3 sm:p-4
                  flex-shrink-0
                "
              >

                {/* IMAGE */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full 
                    h-[11rem] sm:h-[13rem] md:h-[15rem] lg:h-[18rem]
                    object-cover 
                    rounded-[1rem] sm:rounded-[1.25rem]
                  "
                />

                {/* NAME */}
                <h3 className="
                  mt-3 sm:mt-4
                  font-spaceGrotesk font-bold
                  text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem]
                  text-center
                ">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="
                  text-[0.85rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.125rem]
                  text-gray-700 
                  text-center
                ">
                  {member.role}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden group">
          <div className="flex gap-3 sm:gap-4 animate-scrollMembers">

            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="
                  w-[11rem] sm:w-[13rem] md:w-[15rem] lg:w-[18rem]
                  bg-[#EDEDED] 
                  rounded-[1.25rem] sm:rounded-[1.5rem]
                  flex flex-col items-center
                  p-3 sm:p-4
                  flex-shrink-0
                "
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full 
                    h-[11rem] sm:h-[13rem] md:h-[15rem] lg:h-[18rem]
                    object-cover 
                    rounded-[1rem] sm:rounded-[1.25rem]
                  "
                />

                <h3 className="
                  mt-3 sm:mt-4
                  font-spaceGrotesk font-bold
                  text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem]
                  text-center
                ">
                  {member.name}
                </h3>

                <p className="
                  text-[0.85rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.125rem]
                  text-gray-700 
                  text-center
                ">
                  {member.role}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>

    </section>
  );
}