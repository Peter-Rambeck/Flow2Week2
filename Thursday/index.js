import "./style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import personFacde from "./personFacade";

personFacde
  .getAllUsers()
  .then((data) => {
    const persons = data.all;
    const tableRows = persons.map(
      (person) => `
    <tr>
    <td>${person.id}</td>
    <td>${person.fName}</td>
    <td>${person.lName}</td>
    <td>${person.phone}</td>
    <td>${person.street}</td>
    <td>${person.zip}</td>
    <td>${person.city}</td>
    </tr>
    `
    );
    const tableRowsAsString = tableRows.join("");
    document.getElementById("tbody").innerHTML = tableRowsAsString;
  })
  .catch((err) => {
    if (err.status) {
      err.fullError.then((e) => {
        console.log(e.message);
        document.getElementById("error").innerHTML = e.message;
      });
    } else {
      console.log("Network error");
    }
  });
