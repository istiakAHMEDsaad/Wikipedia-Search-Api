const themeToggleInput = document.getElementsByClassName('theme-controller')[0];
themeToggleInput.addEventListener('click', function () {
  // console.log('working');
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'business' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
});

document.addEventListener('DOMContentLoaded', () => {
  const myForm = document.getElementById('my-form');
  const inputValue = document.querySelector('input[type="search"]');
  const resultCount = document.getElementById('result-count');
  const resultContainer = document.getElementById('final-results');

  myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchValue = inputValue.value;
    if (searchValue) {
      searchWikipedia(searchValue);
    }
  });

  const searchWikipedia = (searchValue) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500&srsearch=${encodeURIComponent(
      searchValue
    )}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        showResults(data.query.search);
      })
      .catch((error) => alert('Error:', error));
  };

  const showResults = (results) => {
    resultContainer.innerHTML = '';
    resultCount.textContent = `Resuls Count: ${results.length}`;

    results.forEach((result) => {
      const resultElement = document.createElement('div');
      resultElement.classList.add('border', 'px-4', 'py-2', 'flex', 'flex-col', 'items-center', 'space-y-2');
      resultElement.innerHTML = `
        <h3 class="text-2xl text-start font-bold">${result.title}</h3>
        <p>${result.snippet}</p>
        <a class="w-full text-center font-semibold text-base text-white py-2 rounded-lg cursor-pointer bg-slate-500 hover:bg-slate-400 transition-all" href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">Read More</a>
      `;
      resultContainer.appendChild(resultElement);
    });
  };
});
