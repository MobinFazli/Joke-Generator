// Get the HTML element with the ID jokes and store it in the variable jokeElement!
const jokeElement = document.getElementById('jokes')

// Get the HTML element with the ID jokesBtn and store it in the variable jokesBtn!
const jokesBtn = document.getElementById('jokesBtn')

// Add an event listener to the jokesBtn element, to call the jokeGenerator!
jokesBtn.addEventListener('click', jokeGenerator)

// Define an asynchronous function:
async function jokeGenerator() {
    // Configuration object for the fetch request, showing that the response should be in JSON format!
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    // Fetch jokes from the specified website using the configured settings!
    const res = await fetch('https://icanhazdadjoke.com', config)

    // Extract JSON data from the fetched response!
    const data = await res.json()

    // Set the inner HTML content of the jokeElement to the joke retrieved from the data!
    jokeElement.innerHTML = data.joke
}

// Call the jokeGenerator function!
jokeGenerator()
