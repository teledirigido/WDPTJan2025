// Targetting an element by ID
const mainDiv = document.getElementById('main');
console.log(mainDiv);

//Targetting elements by class name. Returns HTMLCollection. Array like object, but not an array,
const listItems = document.getElementsByClassName('list-item');
console.log(listItems);

//Targetting with querySelector, will return only the first element that respects the condition.
const list = document.querySelector('.list');
console.log(list);

//Targetting with querySelectorAll. Returns a NodeList. Array like, buy not an array.
const listItems2 = document.querySelectorAll('.list-item');
console.log(listItems2);

// Style. We can use .style to access any CSS property of a selected HTML node.
mainDiv.style.backgroundColor = 'lightblue';
list.style.margin = '0 50%';
list.style.padding = '0';

//.remove() to remove the element from HTML
//On a NodeList, the element is still accessible,
//While with a HTMLCollection, it disappears from the "array"
listItems2.forEach((item, index) => {
  if (index % 2 === 0) {
    item.remove();
  }
});
console.log(listItems2);

listItems[1].remove();
console.log(listItems);

//.innerText to change and evaluate the contained text.
const paragraph = document.querySelector('p');
console.log(paragraph.innerText);
paragraph.innerText = "I've been changed";
console.log(mainDiv.innerText);

//.innerHTML to change and evalçluate the contained HTML and text.
console.log(paragraph.innerHTML);
paragraph.innerHTML = `Hello  friends`;
console.log(mainDiv.innerHTML);

//.textContent to change and evaluate the contained text, including hidden parts.
console.log(paragraph.textContent);
console.log(mainDiv.textContent);
mainDiv.textContent = 'No more children';

//WARNING: Setting .innerHTMl, .innerText or textContent on any node,
//Will remove child nodes, unless you rewrite them with .innerHTML.
// If you want to change a child node only, the easiest way
// is to target it directly with .querySelector, .getElementById, etc
//using the parent as the starting point.

//inputs and value. It's a read and write property. The typeof input.value
//is always string, even if it's input type="number" in HTML
const inputNode = document.getElementById('input');
console.log('input value', inputNode.value);
console.log(typeof inputNode.value);
inputNode.value = 0;
console.log('input value after change', typeof inputNode.value);

//creating an element. .createElement takes one argument, the string representation of an HTML tag.
const newParagraph = document.createElement('p');
newParagraph.innerText = "I'm new";
console.log(newParagraph);

//Appending the new paragraph to the end of the mainDiv
//.append() takes one argument, either an HTML node, or a string. Generally we don't use a string, as it won't have semantic html tags.
mainDiv.append('hello');
newParagraph.innerText = 'Changed';
//appendChild() only takes HTML nodes.
mainDiv.appendChild(newParagraph);

//Classes.
//List the classes on the node.
console.log(list.classList);

//Remove a class
list.classList.remove('another-class');
console.log(list.classList);

//Add a class
list.classList.add('another-class');
console.log(list.classList);

//Toggle a class on or off
list.classList.toggle('another-class');
console.log(list.classList);
list.classList.toggle('another-class');

//Changing the value directly
console.log(list.classList.value);
list.classList.value = 'list new';
console.log(list.classList.value);
