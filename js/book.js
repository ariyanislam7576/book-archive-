
const loadBook = () => {
const searchBox = document.getElementById('search-box')
const searchText = searchBox.value;
searchBox.value = '';
const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))

 
       

}
const displayBook = books => {
  // console.log(books);
  const p = document.getElementById('p')
 if (books.length === 0){
   p.innerText = `give valid input`
   p.style.color = 'red'
 }
 else{
  p.innerText = `result found ${books.length}`
  p.style.color = 'black'
 }
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    books.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Book name: ${book.title}</h5><br>
          <h5 class="card-title">Author name: ${book.author_name}</h5><br>
          <h5 class="card-title">1st publish: ${book.first_publish_year}</h5><br>
        </div>
      </div>
        `
    searchResult.appendChild(div)

  })
}

