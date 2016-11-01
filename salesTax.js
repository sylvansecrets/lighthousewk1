var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates){
  results = {};
  function add(a,b){
    return(a+b);
  }
  salesData.forEach(update)

  function update(company){
      rate = taxRates[company["province"]];
      name = company["name"];
      revenue = company["sales"].reduce(add, 0);
      tax = revenue*rate
      if (results.hasOwnProperty(name)){
        results[name]["totalSales"] += revenue;
        results[name]["totalTaxes"] += tax;
      } else {
        results[name] = {}
        results[name]["totalSales"] = revenue;
        results[name]["totalTaxes"] = tax;
      }

  }
  return (results)
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);