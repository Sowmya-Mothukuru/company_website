export default function TeamMembersSection() {

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
    <section className="w-full py-[5rem] bg-[#D4D4D4] overflow-hidden">

      <div className="flex flex-col gap-[1rem]">

        {/* ROW 1 */}
        <div className="overflow-hidden">
          <div className="flex gap-[0.875rem] animate-scrollLeft">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="w-[16rem] sm:w-[17rem] lg:w-[18rem] 
                bg-[#EDEDED] rounded-[1.5rem] flex flex-col items-center
                p-[1rem] flex-shrink-0"
              >

                {/* IMAGE */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[16rem] sm:h-[17rem] lg:h-[18rem]
                  object-cover rounded-[1.25rem]"
                />

                {/* NAME */}
                <h3 className="mt-[1rem] font-spaceGrotesk font-bold
                text-[1.375rem] lg:text-[1.5rem] text-center">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="text-[1.125rem] text-gray-700 text-center">
                  {member.role}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden">
           <div className="flex gap-[0.875rem] animate-scrollRight">

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
}