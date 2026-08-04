const grades = [
  {
    id: "hg",
    name: "High Grade"
  },
  {
    id: "rg",
    name: "Real Grade"
  },
  {
    id: "mg",
    name: "Master Grade"
  },
  {
    id: "pg",
    name: "Perfect Grade"
  },
    {
    id: "sd",
    name: "Super Deformed"
  }
];

const dropdownMenu = document.getElementById("grade");

grades.forEach(grade => {
    const option = document.createElement("option");

    option.value = grade.id;
    option.textContent = grade.name;

    dropdownMenu.appendChild(option);
})