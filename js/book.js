
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
  const h5 = document.getElementById('h5')
 if (books.length === 0){
   h5.innerText = `something went wrong`
   h5.style.color = 'red'
 }
 else{
  h5.innerText = `result found ${books.length}`
  h5.style.color = 'black'
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

