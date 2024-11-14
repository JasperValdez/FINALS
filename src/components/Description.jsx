import ratings from '../assets/ratings.png';
import speak from '../assets/speak.png';
import hand from '../assets/hand.png';  

const Description = () => {
    return(
        <>
            {/* Promotional Section */}
      <div className="bg-neutral-900 text-white flex justify-center items-center p-4">
      <h1 className="text-2xl px-10">
        Equip yourself with the best – precision, power, and reliability are just a click away.
      </h1>
      <button className="bg-red-500 text-2xl p-2 ml-4 hover:bg-red-700">
        Shop now
      </button>
    </div>

    {/* Main Heading Section */}
    <h1 className="text-3xl font-bold px-10 text-center py-10 leading-relaxed">
      Equip yourself and grow your confidence with top-quality firearms.
    </h1>

    {/* Features Section */}
    <div className="flex justify-center items-center space-x-16 py-10">
      {[
        { img: ratings, title: 'Ratings & Reviews' },
        { img: speak, title: 'Sales and Marketing' },
        { img: hand, title: 'Customer Experience' }
      ].map(({ img, title }, idx) => (
        <div className="text-center" key={idx}>
          <img src={img} alt={title} className="h-20 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">{title}</h2>
        </div>
      ))}
    </div>

    {/* Lock & Loaded Section */}
    <div className="bg-neutral-900 text-white py-16 flex flex-col items-center mt-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-serif font-bold mb-8">Lock & Loaded</h1>
        <div className="text-xl leading-relaxed tracking-wide">
          <p className="mb-6">
            Welcome to Lock & Loaded, your trusted source for top-quality firearms, ammo, and accessories.
            Whether you're a seasoned shooter or a first-time buyer, we offer expert advice, a wide selection
            of handguns, rifles, and shotguns, and a commitment to safety and service. Our knowledgeable staff is
            here to help you find the perfect firearm and ensure you’re ready for anything.
          </p>
          <p className="font-semibold text-lg">Lock & Loaded — Ready, Aim, Fire.</p>
        </div>
      </div>
    </div>
        </>
    );
}
export default Description;