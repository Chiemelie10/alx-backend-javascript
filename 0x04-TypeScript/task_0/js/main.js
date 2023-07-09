document.addEventListener("DOMContentLoaded", () => {
    const student1 = {
        firstName: "Sunday",
        lastName: "Ali",
        age: 20,
        location: "Kaduna"
    };
    const student2 = {
        firstName: "Henry",
        lastName: "Ezeh",
        age: 40,
        location: "Lagos"
    };
    const studentsList = [student1, student2];
    const table = document.createElement("table");
    const headerContainer = document.createElement("div");
    headerContainer.style.display = "flex";
    const keys = Object.keys(student1);
    keys.forEach((key) => {
        if (key === "firstName" || key === "location") {
            const row = document.createElement("tr");
            const headerColumn = document.createElement('td');
            const columnContainer = document.createElement('div');
            columnContainer.style.width = "70px";
            columnContainer.style.border = "1px solid black";
            columnContainer.style.padding = "5px 10px";
            columnContainer.style.display = "flex";
            columnContainer.style.justifyContent = "center";
            table.style.borderCollapse = "collapse";
            headerColumn.textContent = key;
            headerColumn.style.fontWeight = "bold";
            columnContainer.appendChild(headerColumn);
            row.appendChild(columnContainer);
            headerContainer.appendChild(row);
        }
    });
    table.appendChild(headerContainer);
    let rowContainer = document.createElement("div");
    studentsList.forEach((student) => {
        const row = document.createElement("tr");
        row.style.display = "flex";
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        const firstNameCellContainer = document.createElement("div");
        firstNameCellContainer.style.border = "1px solid #000000";
        firstNameCellContainer.style.padding = "5px 10px";
        firstNameCellContainer.style.width = "70px";
        firstNameCellContainer.style.display = "flex";
        firstNameCellContainer.style.justifyContent = "center";
        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        const locationCellContainer = document.createElement("div");
        locationCellContainer.style.border = "1px solid #000000";
        locationCellContainer.style.padding = "5px 10px";
        locationCellContainer.style.width = "70px";
        locationCellContainer.style.display = "flex";
        locationCellContainer.style.justifyContent = "center";
        firstNameCellContainer.appendChild(firstNameCell);
        locationCellContainer.appendChild(locationCell);
        row.appendChild(firstNameCellContainer);
        row.appendChild(locationCellContainer);
        rowContainer.appendChild(row);
    });
    table.appendChild(rowContainer);
    document.body.appendChild(table);
    document.body.style.boxSizing = "boder-box";
});
