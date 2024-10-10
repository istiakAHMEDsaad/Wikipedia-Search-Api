document.addEventListener('DOMContentLoaded', () => {
  // const myForm = document.getElementById('my-form');
  const searchBtn = document.getElementById('search');
  const input = document.querySelector('input[type="search"]');
  const resultCount = document.getElementById('result-count');
  const resultContainer = document.getElementById('final-results');

  searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const inputValue = input.value;
    if (inputValue) {
      searchWikipedia(inputValue);
    }
  });

  // ------------- Fetch Data -------------
  const searchWikipedia = (inputValue) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500&srsearch=${encodeURIComponent(
      inputValue
    )}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        showResults(data.query.search);
      })
      .catch((error) => alert('Error:', error));
  };

  // ------------- Show Search Data -------------
  const showResults = (results) => {
    resultContainer.innerHTML = '';
    resultCount.textContent = `Resuls Count: ${results.length}`;

    // loop
    results.forEach((result) => {
      const resultElement = document.createElement('div');
      resultElement.classList.add(
        'border',
        'rounded-md',
        'px-4',
        'py-2',
        'flex',
        'flex-col',
        'items-center',
        'space-y-2'
      );
      resultElement.innerHTML = `
    <h3 class="text-2xl text-start font-bold">${result.title}</h3>
    <p>${result.snippet}</p>
    <a class="w-full text-center font-semibold text-base text-white py-2 rounded-lg cursor-pointer bg-slate-500 hover:bg-slate-400 transition-all" href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">Read More</a>
  `;
      resultContainer.appendChild(resultElement);
    });
  };
});
