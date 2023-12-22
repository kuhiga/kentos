const Footer = () => {
  // make 2023 label from current year
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img className="h-8 w-auto mr-4" src="./icon.png" alt="Logo" />
          <span className="ml-3 text-xl">Eigo Dojo</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © {currentYear} ケントス LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
