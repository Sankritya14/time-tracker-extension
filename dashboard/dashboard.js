fetch("http://localhost:3000/weekly")
  .then(res => res.json())
  .then(data => {
    const categories = { Productive: 0, Unproductive: 0, Neutral: 0 };

    data.forEach(entry => {
      if (categories[entry.category] !== undefined) {
        categories[entry.category] += entry.duration;
      }
    });

    const ctx = document.getElementById("productivityChart").getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(categories),
        datasets: [{
          label: "Time in seconds",
          data: Object.values(categories),
          backgroundColor: ["green", "red", "gray"]
        }]
      }
    });
  })
  .catch(err => console.error("Error fetching analytics:", err));
