const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', function () {
    const inputVal = searchInput.value.toLowerCase();
    const rows = document.getElementsByClassName('table-row');

    for (let i = 0; i < rows.length; i++) {
        const rowText = rows[i].textContent.toLowerCase();
        if (rowText.includes(inputVal) && inputVal) {
            rows[i].classList.add("highlight");
        } else {
            rows[i].classList.remove("highlight");
        }
    }
});