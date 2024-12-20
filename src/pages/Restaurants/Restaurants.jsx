import { Link, useLoaderData } from 'react-router-dom';

function Restaurants() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Restaurants</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((restaurant) => (
          <li
            key={restaurant.id}
            className="border-2 border-black rounded"
          >
            <img
              src={restaurant.imageCarousel.images[0].url}
              className="w-full h-50 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {restaurant.restaurant.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {restaurant.restaurant.description}
              </p>
              <Link
                to={`/restaurants/${restaurant.id}`}
                className="inline-block bg-orange-500 text-white text-sm font-medium py-2 px-4 rounded"
              >
                More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
