export function PopularCategorys({ title, img }) {
    return (
      <div className="relative group transition-transform">
        <div className="bg-white border-1 border-[#D9D9D9] p-2 rounded-xl flex flex-col gap-3 w-full group-hover:bg-[#E67E22] transition-colors duration-500">
          <div className="flex items-center justify-center">
          <img
            src={img}
            alt={title}
            className="w-24 h-24 object-fit rounded-lg"
          />
          </div>
          <h2 className="text-[#1b1b1b] font-medium text-xl text-center transition-all duration-500 group-hover:text-white">
            {title}
          </h2>
        </div>
      </div>
    );
  }
