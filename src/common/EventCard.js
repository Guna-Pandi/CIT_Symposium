const EventCard = ({ event }) => {
  return (
    <article
      key={event.id}
      className="font-poppins shadow-md shadow-red-600 relative isolate flex flex-col gap-2 justify-end overflow-hidden rounded-2xl h-[350px] bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
    >
      <img
        src={event.imageUrl}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover hover:scale-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/80" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/40" />
      <h3 className="mt-3 text-2xl tracking-widest mb-3 celestraHeroFont font-semibold leading-6 text-white">
        <p>{event.title}</p>
      </h3>
      <p className="text-white mb-4">{event.description}</p>
      <a
        href={event.href}
        className="bg-[#111111] celestraHeroFont  text-xl text-white text-center rounded-md p-4   hover:bg-red-500 hover:text-black tracking-widest transition-all duration-300 ease-in-out"
      >
        View
      </a>
    </article>
  );
};

export default EventCard;