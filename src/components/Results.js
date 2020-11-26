import { useEffect, useState } from "react";
import { getDonations } from "../utils/fetch";
import Card from "../components/Card";

function Results() {
  const [donations, setDonations] = useState([]);

  useEffect(loadDonations);

  async function loadDonations(){
    const data = await getDonations();
    setDonations(data);
  }

  return (
    <section className="results">
      <div className="container">
        {donations
          .map((item) => (
            <Card name={item.name} quantity={item.quantity} unit={item.unit} />
          ))}
      </div>
    </section>
  )

};

export default Results;