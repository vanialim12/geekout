import { useEffect, useState } from "react";
import { getDonations } from "../utils/fetch";

function renderEachCard(donationItem) {
  return (
    <div className="card">
      <h3>{donationItem.name}</h3>
      <span>
        {donationItem.quantity} {donationItem.unit}
      </span>
    </div>
  );
}

function Donations() {
  const [donations, setDonations] = useState([]);
  useEffect(loadDonations);

  async function loadDonations() {
    const data = await getDonations();
    setDonations(data);
  }

  return (
    <section className="results">
      <div className="container">{donations.map(renderEachCard)}</div>
    </section>
  );
}

export default Donations;
