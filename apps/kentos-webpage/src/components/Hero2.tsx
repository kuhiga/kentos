const Hero2 = () => {
  return (
    <div>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-custom lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                {/* <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                    <a
                      href="#"
                      className="whitespace-nowrap font-semibold text-indigo-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div> */}
                <h1 className="text-4xl font-thin tracking-tight text-gray-900 sm:text-6xl">
                  Speak English, Feel Aloha – Elevate Your Conversations Today!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Welcome to a unique journey of language and culture! Our
                  eikaiwa lessons are more than just English classes; they are
                  an experience infused with the essence of Aloha. Embrace a
                  learning environment where warmth, friendliness, and a relaxed
                  atmosphere are at the heart of every session.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/contact"
                    className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="/team"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Meet your tutor <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="./honolulu.jpg"
            alt=""
          /> */}
          <video
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            loop
            autoPlay
            muted
            playsInline
            src="./DiamondHead.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
