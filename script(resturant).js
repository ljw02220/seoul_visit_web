const wrapper = document.querySelector('.wrapper');
const select = document.querySelector('.select');
const options = document.querySelector('.options');
const input = document.querySelector('.filter'); //input element

let countries = [
  '가나',
  '가봉',
  '감비아',
  '과테말라',
  '그레나다',
  '그리스',
  '기니',
  '네덜란드',
  '대한민국',
];

select.addEventListener('click', function () {
  wrapper.classList.toggle('active');
});

input.addEventListener('keyup', filterCountries);

function filterCountries() {
  let arr = [];
  let searchWord = input.value.toLowerCase();

  if (searchWord.length > 0) {
    arr = countries
      .filter((data) => data.toLowerCase().startsWith(searchWord))
      .map((data) => `<li onclick="changeClickedName(this)">${data}</li>`)
      .join('');

    options.innerHTML = arr || '<p>조회된 나라가 없습니다.</p>';
  } else {
    options.innerHTML = '';
    addLi();
  }
}

function addLi() {
  options.innerHTML = ''; // Clear previous list
  countries.forEach((country) => {
    let li = `<li onclick="changeClickedName(this)">${country}</li>`;
    options.insertAdjacentHTML('beforeend', li);
  });
}

window.changeClickedName = function (li) {
  select.firstElementChild.innerText = li.innerText;
  input.value = '';
  wrapper.classList.remove('active');
  addLi();
};

addLi(); // Initialize the list with all countries
