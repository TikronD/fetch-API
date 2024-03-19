// async function getMyStuffFromOverThere() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log("HTTP Response:", response);
//   const json = await response.json();
//   console.log("JSON Data:", json);
// }

async function displayChuckNorrisJokes() {
  const numJokes = 1;
  const jokesContainer = document.getElementById("list");

  // Create a new table row
  const newRow = document.createElement("tr");

  for (let i = 0; i < numJokes; i++) {
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    const jokeText = json.value;

    // Create a new table cell for each joke
    const newCell = document.createElement("div");

    // Set the joke text as the content of the cell
    newCell.textContent = jokeText;

    // Append the cell to the row
    newRow.appendChild(newCell);
  }

  // Append the row to the container
  jokesContainer.appendChild(newRow);
}

// Call the function to display Chuck Norris jokes
displayChuckNorrisJokes();
