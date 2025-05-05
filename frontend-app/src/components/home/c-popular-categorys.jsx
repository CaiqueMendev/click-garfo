export function PopularCategorys({ title, img }) {
    return (
      <div className="relative group transition-transform hover:scale-105">
        <div className="bg-white p-4 sm:p-6 rounded-xl flex flex-col gap-3 w-full group-hover:bg-[#E67E22] transition-colors duration-500">
          <img
            src={img}
            alt={title}
            className="w-full h-32 object-cover rounded-lg"
          />
          <h2 className="text-[#1b1b1b] font-medium text-xl text-center transition-all duration-500 group-hover:text-white">
            {title}
          </h2>
        </div>
      </div>
    );
  }
