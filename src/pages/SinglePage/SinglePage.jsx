import { useLoaderData, Link } from 'react-router-dom';

function SinglePage() {
    const restaurant = useLoaderData();
    return (
        <div className="container mx-auto p-4">
            <Link to="/" className='inline-block bg-orange-500 text-white text-sm font-medium py-2 px-4 rounded'>Home</Link>
            <h1 className="text-3xl font-bold mb-4">{restaurant.restaurant.name}</h1>
            <img
                src={restaurant.imageCarousel.images[0].url}
                className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="text-gray-500 mb-4">{restaurant.restaurant.description}</p>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Addreslar</h2>
                <p>{restaurant.restaurant.address.line1}</p>
                <p>{restaurant.restaurant.address.line2}</p>
            </div>
            <div className="mb-4">
                <p>{restaurant.restaurant.hours}</p>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Available Time Slots</h2>
                <ul>
                    {restaurant.timeSlots.map((qotancha, i) => (
                        <li key={i} className={`${qotancha.available ? 'text-green-500' : 'text-red-500'}`}>
                            {qotancha.time}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SinglePage;
