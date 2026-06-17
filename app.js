

const fetch_btn = document.getElementById('fetch-btn');
const fact_display = document.getElementById('fact-display');

fetch_btn.addEventListener('click', () => {
    getCatFact();
});

// We must mark the function as 'async' if we want to use 'await' inside it
async function getCatFact() {
    try {
        // turns button off, sets fact_display.textContent, and btn to loading state.
        fetch_btn.disabled = true; 
        fetch_btn.textContent = "Loading..."
        fact_display.textContent = "Fetching a fresh cat fact..."
        console.log("1. Sending request to the server...");

        // 'await' pauses this function until the server responds. 
        // It prevents JS from moving to the next line too early.
        const response = await fetch("https://catfact.ninja/fact");
        
        // The server sends back raw data. We must convert it to a JS Object.
        const data = await response.json();

        // display the data in console and the fact in fact_display.textContent
        fact_display.textContent = `Fact of the day: ${data.fact}`
        console.log("3. Data successfully received!");

        // browser console to see the data object.
        console.log(data);


    } catch (error) {
        // catches errors and displays them in both DOM and in console.
        console.error("Oops, something went wrong:", error);
        fact_display.textContent = "Failed to load fact. Try again!";
    } finally {
        // reenables button and changes buttons textContent 'Get New Fact'.
        fetch_btn.disabled = false;
        fetch_btn.textContent = 'Get New Fact';
    }

}
