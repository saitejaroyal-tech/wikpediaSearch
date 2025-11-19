let js_searchResults = document.getElementById("searchResults");
let js_spinner = document.getElementById("spinner");
let js_searchInput = document.getElementById("searchInput");

function displaySearchResultOfEach(each_of_search_result) {
    let {
        description,
        link,
        title
    } = each_of_search_result;
    let containerResult = document.createElement("div");
    containerResult.classList.add("result-item");
    js_searchResults.appendChild(containerResult);

    let titleElement = document.createElement("a");
    titleElement.href = link;
    titleElement.target = "_blank";
    titleElement.classList.add("result-title");
    titleElement.textContent = title;
    containerResult.appendChild(titleElement);

    let brEle1 = document.createElement("br");
    containerResult.appendChild(brEle1);

    let urlElement = document.createElement("a");
    urlElement.href = "link";
    urlElement.target = "_blank";
    urlElement.classList.add("result-url");
    urlElement.textContent = link;
    containerResult.appendChild(urlElement);

    let brEle2 = document.createElement("br");
    containerResult.appendChild(brEle2);

    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("link-description");
    containerResult.appendChild(descriptionElement);
    descriptionElement.textContent = description;

    console.log(containerResult);

}

function createEachSearchResult(search_results) {
    for (let each_of_search_result of search_results) {
        displaySearchResultOfEach(each_of_search_result);
        console.log(each_of_search_result);
    }
}

function giveSearchResults(event) {
    js_searchResults.textContent = "";
    let url = "https://apis.ccbp.in/wiki-search?search=" + js_searchInput.value;
    let options = {
        method: "GET"
    };
    if (event.key === "Enter") {
        js_spinner.classList.remove("d-none");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                js_spinner.classList.add("d-none");
                console.log(jsonData);
                let {
                    search_results
                } = jsonData;

                createEachSearchResult(search_results);
            });
    }
}

js_searchInput.addEventListener("keydown", giveSearchResults);