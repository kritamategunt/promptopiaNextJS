import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metaData = {
  title: "Promptopia",
  description: "Discover & Share AI prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <div className="main">
        <div className="gradient">
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </div>
    </html>
  );
};

export default RootLayout;
