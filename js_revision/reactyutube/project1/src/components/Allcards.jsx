export function Allcards({ data }) {
  return (
    <div className="flex flex-wrap justify-evenly gap-6 px-6 h-auto m-2">
      {data.map((singleitem) => {
        return (
          <div
            key={singleitem.id}
            className="bg-white w-64 p-6 rounded-xl  text-black"
          >
            <img
              src={singleitem.images}
              alt="product"
              className="rounded-lg w-full "
            />
            <h2>{singleitem.title}</h2>
            <p>₹{singleitem.price}</p>
            <p className="opacity-50 line-clamp-4">{singleitem.description}</p>
          </div>
        );
      })}
    </div>
  );
}
