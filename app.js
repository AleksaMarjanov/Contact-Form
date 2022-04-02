// mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3NhbWFyamFub3YiLCJhIjoiY2wxNzg4OWdnNGNsdTNjcnB0eTUyaTFpZyJ9.Gb0b3LdcSTevZuB-w1ipCA';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11',
// center: [
//     21.2982868161137,
//     45.11944825
//   ],
// zoom: 18, 
// });

//  Lazy loading iamges
let imageOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
  if(!entry.isIntersecting) return;
  const image = entry.target;
  image.src = image.src.replace('&w=10', '&w=598');
  observer.unobserve(image);
  })
}, imageOptions);

const images = document.querySelectorAll('img');
images.forEach(image => {
  observer.observe(image)
});

// Contact Form 
let id = 0;
// Clicking on our button Submit with id 'submit' to add ROWS
document.getElementById('add').addEventListener('click', () => {
    //We have to access our table which has id myTable to insert rows
    let table = document.getElementById('myTable');
    // Inserting a row in the table
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`)
    console.log(id);
    row.insertCell(0).innerHTML = document.getElementById('firstName').value;
    row.insertCell(1).innerHTML = document.getElementById('lastName').value;
    row.insertCell(2).innerHTML = document.getElementById('emailInfo').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('emailInfo').value = '';

});

// Creating a delete button
const createDeleteButton = id => {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary'
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
