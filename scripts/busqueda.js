
import { products } from '../modules/productos.js';

const searchForm = document.getElementById('searchForm');
const searchResultsContainer = document.getElementById('searchResults');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtén el valor ingresado en el campo de búsqueda
    const searchTerm = document.getElementById('productName').value.trim().toLowerCase();

    // Filtra los productos que coincidan con el término de búsqueda
    const searchResults = products.filter(product => {
        return product.nombre.toLowerCase().includes(searchTerm);
    });

    // Limpia el contenedor de resultados anteriores
    searchResultsContainer.innerHTML = '';

    // Muestra los resultados en el HTML
    if (searchResults.length > 0) {
        const ul = document.createElement('ul');
        searchResults.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result.nombre;
            ul.appendChild(li);
        });
        searchResultsContainer.appendChild(ul);
    } else {
        searchResultsContainer.textContent = 'No se encontraron resultados.';
    }
});
