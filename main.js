// js/include.js

function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
      const file = el.getAttribute('data-include');
      if (file) {
        fetch(file)
          .then(response => {
            if (!response.ok) throw new Error(`Could not load ${file}`);
            return response.text();
          })
          .then(data => el.innerHTML = data)
          .catch(err => console.error(err));
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', includeHTML);