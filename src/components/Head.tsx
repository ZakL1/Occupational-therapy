function Head() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-warm-cream p-8">
      <div className="flex flex-row justify-between items-start w-full max-w-5xl">
        {/* Text Container - pushed to the left */}
        <div className="bg-very-light-teal shadow-md rounded-xl p-10 w-auto">
          <h1 className="text-7xl font-bold font-heading text-primary-dark mb-4">What is occupational therapy?</h1>
          <p className="text-primary-dark font-sans text-2xl">
            This text will be a brief summary of what occupational therapy is.
          </p>
        </div>

        {/* Spacer for wide gap */}
        <div className="w-24"></div>

        {/* Image Container - pushed to the right */}
        <div className="bg-accent-green p-10 rounded-xl shadow-md border border-gray-300 w-auto">
          <img
            src="https://via.placeholder.com/200x150"
            alt="Example"
            className="w-48 h-auto object-cover rounded-md border border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Head;