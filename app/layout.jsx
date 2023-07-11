import "@styles/global.css";

export const metaData = {
  title: "Promptopia",
  description: "Discover & Share AI prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
