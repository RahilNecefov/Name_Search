const data = [
  { name: "John Doe", phone: "123-456-7890" },
  { name: "Jane Smith", phone: "234-567-8901" },
  { name: "Sam Johnson", phone: "345-678-9012" },
  { name: "Lisa Brown", phone: "456-789-0123" },
];

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const results = data.filter(
    (person) =>
      person.name.toLowerCase().includes(query) || person.phone.includes(query)
  );
  displayResults(results);
});

function displayResults(results) {
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";
  results.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = `${person.name} - ${person.phone}`;
    resultList.appendChild(li);
  });
}

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    document
      .getElementById("searchInput")
      .addEventListener("input", function () {
        const query = this.value.toLowerCase();
        if (query === "") {
          displayResults([]);
        } else {
          const results = data.filter(
            (person) =>
              person.name.toLowerCase().startsWith(query) ||
              person.phone.startsWith(query)
          );
          displayResults(results);
        }
      });
  });

function displayResults(results) {
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";
  if (results.length > 0) {
    results.forEach((person) => {
      const li = document.createElement("li");
      li.textContent = `${person.name} - ${person.phone}`;
      resultList.appendChild(li);
    });
  }
}
