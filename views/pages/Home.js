// --------------------------------
//  Define Data Sources
// --------------------------------

let getBooks = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await fetch(
      `http://localhost:3000/books/`,
      options
    );
    const json = await response.json();
    // console.log(json)
    return json;
  } catch (err) {
    console.log('Error getting documents', err);
  }
};

let Home = {
  render: async () => {
    let books = await getBooks();
    let view = /*html*/ `
         <table>
             <tr>
             <th>Book Id</th>
             <th>Book Title</th>
             <th>Book Author</th>
             <th>Book Number of Pages</th>
             <th>Rent Book</th>
           </tr>
                 ${books
                   .map(
                     book =>

`
  <tr>
  <td><a href="#/p/${book.id}"></td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.length}</td>
    <td><button id=book-id-${book.id} type="button" class="ava-button button" >Availability!</button></td>
    
  </tr>
`
                   )
                   .join('\n ')}
         </table>
     `;
    return view;
  },
  
  after_render: async () => {}
};

export default Home;