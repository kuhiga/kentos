const Pricing = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            facilisis, metus nec faucibus rhoncus, nunc enim sodales nisl, vel
            lobortis nisl metus vel nulla.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full mx-auto">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Package B
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$100</span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  /4 session
                </span>
              </h1>
              <p className="flex-grow text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                facilisis, metus nec faucibus rhoncus, nunc enim sodales nisl,
                vel lobortis nisl metus vel nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
