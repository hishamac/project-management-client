import CardsRowFour from "./CardsRowFour";
import CardsRowOne from "./CardsRowOne";
import CardsRowThree from "./CardsRowThree";
import CardsRowTwo from "./CardsRowTwo";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <>
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        {/* Navbar */}
        <Navbar />
        {/* end Navbar */}
        {/* cards */}
        <div className="w-full px-6 py-6 mx-auto">
          {/* row 1 */}
          <CardsRowOne />
          {/* row 2 */}
          <CardsRowTwo />
          {/* row 3 */}
          <CardsRowThree />
          {/* row 4 */}
          <CardsRowFour />
          {/* Footer */}
          <Footer />
        </div>
        {/* end cards */}
      </main>
    </>
  );
}
