const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex px-10 py-16 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./kent.jpeg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I'm Kent!
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a Japanese-English bilingual with seven years of experience in
            account management in the travel industry. I've been recognized as
            the Person of the Year twice in 2019 and 2021, nominated for Rising
            Star Market Manager of the Year for 2022 in my current organization
            with demonstrated ability to establish and sustain client
            relationships through needs-based consultation and initiating
            changes to improve team productivity with results. I'm also
            passionate in coaching and mentoring peers to acquire skills to help
            achieve their goals and overcome challenges.
          </p>
          <p className="mb-8 leading-relaxed">
            Gallup Strength Finder Strengths: Positivity, Connectedness,
            Relator, Arranger and Responsibility
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
