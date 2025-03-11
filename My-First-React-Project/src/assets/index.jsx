/** Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this. **/
const h1 = document.getElementByIdZ('h1')
h1.texContent = "Hello, React"
h1.className = "header"
const root = document.getElementById('root').appendChild(h1)