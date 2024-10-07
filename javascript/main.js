async function generateIdea() {
    const result = document.getElementById("result");
    const author = document.getElementById("author");
    const activity = document.getElementById("activity");
    const screenshoot = document.getElementById("screenshoot")


    const response = await fetch('https://quotes-api-self.vercel.app/quote');
    const json = await response.json();

    author.textContent = json.author;
    activity.textContent = json.quote;

    activity.style.display = "block";

    let count = 0;

    screenshoot.addEventListener("click", function() {
        count && location.reload();

        html2canvas(result).then((callback) => {
            screenshoot.setAttribute("href", callback.toDataURL("image/png"));
            screenshoot.textContent = "💚";
            count = 1;
        })
    });
    
}