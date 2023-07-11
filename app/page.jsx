const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* head_text is func in global.css file */}
      <h1 className="head_text text-center">Discover & share</h1>
      <br className="max-md:hidden" />
      <span className="head_text orange_gradient text-center">
        AI-powered prompt
      </span>
      <p className="desc text_center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
};

export default Home;
