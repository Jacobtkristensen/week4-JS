let SERVER_URL  = "https://jsonplaceholder.typicode.com/users"


document.getElementById("btn-get-user").addEventListener("click", getUser);
document.getElementById("btn-get-all").addEventListener("click", getAllUsers);

function getAllUsers() {
    fetch(SERVER_URL)
      .then((res) => res.json())
      .then((users) => {
        const tableRows = users.map(
          (user) => `
              <tr>
                  <td>${user.name}</td>
                  <td>${user.phone}</td>
                 
              </tr>
              `
        );
        const rowsAsStr = tableRows.join("");
        document.getElementById("tbody").innerHTML = rowsAsStr;
      });
}

function getUser() {
    const id = document.getElementById("text-for-id").value;
fetch(SERVER_URL + "/" + id)
  .then(res => res.json()) //for this exercise, just do this
  .then((user) => {
    const name = user.name;
    const phone = user.phone;
    const address = user.address;

    document.getElementById("user-info").innerText = `Name: ${name}\nPhone: ${phone}\n \n Address: ${JSON.stringify(
      address,
      null,
      2
    )}`;
    
  });
}
