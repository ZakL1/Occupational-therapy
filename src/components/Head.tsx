import headImage from '../assets/head.jpg';

function Head() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-warm-cream py-8 px-8">
      <div className="flex flex-row justify-between items-start w-full max-w-6xl gap-20">
        {/* Text Container - narrower */}
        <div className="bg-very-light-teal shadow-md rounded-xl p-10 max-w-[500px]">
          <h1 className="text-7xl font-bold font-heading text-primary-dark mb-4">
            What is occupational therapy?
          </h1>
          <p className="text-primary-dark font-sans text-2xl">
            This text will be a brief summary of what occupational therapy is.
          </p>
        </div>

        {/* Image Container - wider image */}
        <div className="bg-accent-green p-2 rounded-xl shadow-md border border-gray-300 w-auto">
          <img
            src={headImage}
            alt="Example"
            className="w-[500px] h-[500px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Head;