import Feed from "@components/feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* head_text is func in global.css file */}
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden"/>
        <span className="orange_gradient">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text_center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
