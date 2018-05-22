#### The DOM (Document Object Model)

The Document Object Model is a representation of an HTML, XHTML, or XML document. The text that describes the structure is parsed by the layout engine. It is then converted into the DOM. This means that each element, starting at the root, is represented by an object.

A tree structure is used. Each element represents a node in the tree, which is connected to it's parent and children. HTML is simply text. It is the DOM that represents the state of the document in the browser.


#### Global Variables:

Window

- Refers to the browser window or tab
- Includes location, navigation history and so on
- It's the top object that contains all global variables

Navigator

- Contains information about the browser itself
- Version, enabled features and so on.
- Even the actual `geolocation` of the machine can be retrieved.

Document

- Contains the website being displayed inside the window
- All elements, css and scripts are inside `document`.

DOM 

JavaScript can add, change, and remove all the HTML elements and attributes in the page.
JavaScript can change all the CSS styles in the page.
JavaScript can react to all existing events in the page.
JavaScript can create new events in the page.

#### Traversal
document.getElementById('someid').children[0];
document.body.children[4].children[0].innerText;
document.body.children[4].children[0].parentElement.parentElement.children[2];

#### Selectors

document.getElementById('submit-button');
document.getElementsByClassName('some-class');
document.getElementsByTagName('ul');

#### Creation
let newItem = document.createElement('li');
document.querySelector('#justPadThai').appendChild(newItem);
newItem.innerText = "Orange";

#### Manipulation
element.innerText = 'hello world';
element.innerHtml = 'hello world'; 
element.innerHtml = '<div><p> hello world</p></div>'; //you can add html here directly
element.syle.color = 'red';
elelemt.classList.add('wider');


#### Events

document.addEventListener('click', () => {
  //do stuff here
});

click
dbclick

mouseenter
mouseover
mouseout
mousemove
mouseleave

focus
blur

keydown 
keypress 
keyup

change
submit


Events are a very important in building complex user interaction in your web applications. It is important to review the documentation and get an overall understanding of the available events. No one expects you to remember them all, especially not the details. It is however important to know what is possible when interacting with the browser.