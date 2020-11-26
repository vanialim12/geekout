const sampleDonations = [
  {
    id: "1",
    unit: "roll",
    quantity: "111",
    division: "simei",
    name: "Toilet Roll",
  },
  {
    id: "2",
    unit: "piece",
    quantity: "2",
    division: "buangkok",
    name: "Prata",
  },
];

function api(req, res) {
  res.statusCode = 200;
  res.json(sampleDonations);
}

export default api;
