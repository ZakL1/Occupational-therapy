function InfoSection() {
  return (
    <div className="bg-warm-cream py-2 px-8 flex flex-col items-center space-y-24 pb-28">
      {/* Section Heading */}
      <div className="w-full max-w-6xl">
        <h2 className="text-6xl font-heading text-primary-dark mb-4">Occupational therapy can help you do things you haven't done in a while</h2>
      </div>

      {/* Row 1: Text left, image right */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl w-full gap-12">
        {/* Text Block */}
        <div className="flex-1 text-left">
          <p className="text-primary-dark text-xl font-sans">
            Occupational Therapy (OT) helps individuals of all ages achieve independence in all areas of their lives.
            It focuses on improving daily function and quality of life through tailored strategies and activities.
          </p>
        </div>

        {/* Image Block */}
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/400x250"
            alt="OT example"
            className="rounded-xl shadow-md border border-gray-300 w-full object-cover"
          />
        </div>
      </div>

      {/* Row 2: Image left, text right */}
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start max-w-6xl w-full gap-12">
        {/* Text Block */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-heading text-primary-dark mb-4">How OT Can Help</h2>
          <p className="text-primary-dark text-xl font-sans">
            OT practitioners work with individuals facing physical, cognitive, or emotional challenges.
            Through assessment and personalized plans, OT helps people participate more fully in life.
          </p>
        </div>

        {/* Image Block */}
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/400x250"
            alt="OT help"
            className="rounded-xl shadow-md border border-gray-300 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;