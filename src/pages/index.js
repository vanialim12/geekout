import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Donations from "../components/Donations";

function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="container">
          <h1>Welcome to Supplies</h1>
          <p>
            Help contribute to the community by donating any supplies that you
            can spare to those who need them the most! (especially with what's
            going on in the world today)
          </p>
        </div>
      </section>
      <Donations />
      <Footer />
    </div>
  );
}

export default Home;
