# DOM_Document-Object-Model
 
 Change web pages dynamically


---------------------------------------------

## Content
 1. Introduction to the DOM of an HTML document
 2. the `document` object
 3. The DOM programming interface 
 4. Access elements in the DOM  
 5. 
---------------------------------------------

## 1. Introduction to the DOM of an HTML document
With the DOM, you have access to all HTML elements of the document using JavaScript. This allows you to manipulate all HTML elements, HTML attributes, and CSS styles of a web page. Additionally, it is possible to add new HTML elements or attributes or remove existing ones, as well as react to all HTML events of a web page. 

The HTML elements of a document are composed into a hierarchical tree structure.

 ![Preview](images/DOM_Tree.png)

All individual elements of this DOM tree are **nodes** and are related to each other. E.g. the `head` -element (**parent element**) has two **child elements**, the `title` and the `meta` -element. The `title` and the `meta` -element are also called **siblings** here. The same applies to the `body` element. 

The HTML attributes and the contents of the HTML elements are also nodes of a DOM tree.

The three important node types:

   ```
    <p lang="en">The text ... </p>
   ```

Here, the `p` element is the HTML element node and this contains an HTML attribute node with `lang="en"` also the text of the `p` element is a real node (text node). These nodes in the DOM tree can be accessed using JavaScript.

Thanks to the division into node objects, where all HTML HTML documents, HTML attributes and the contents of a node represent and these nodes are related to each other in the tree by **parent**, **child**, or **sibling** relationships, it is possible to access each of these nodes using various **DOM methods** and **DOM properties**.


## 2. The `document` object
The `document` object is the topmost object of the DOM tree, only with it it is possible to access and modify all elements of the HTML document with JavaScript. It represents practically the whole web page and is the owner of all other nodes of the web page. If you want to access an element in an HTML document, this can be done e.g. with the `document` object and the `querySelector()` method.

   ```
    let element = document.querySelector('body');
   ```


## 3. The DOM programming interface
DOM provides various methods and properties for each object in the DOM tree. 

Example:
  [Complete Code](https://github.com/BellaMrx/DOM_Document-Object-Model/tree/main/Examples/Part_1) --> **Examples/Part_1/...** 

index.html:
   ```
    <body>
      <h1>The DOM interface</h1>
      <p>The paragraph text</p>
      <script src="scripts/script.js"></script>
    </body>
   ```

script.js:
   ```
    "use strict";

    let text = document.querySelector('p').innerHTML;
    if (text) {
      text += " " + "has been extended!";
      document.querySelector('p').innerHTML = text;
    }
   ```

Output:

 ![Preview](images/DOM-Interface.png)

Here, `querySelector()` is a method and `innerHTML` is a property of the `document` object. The `querySelector()` method is used to get access to an HTML element. The `innerHTML` property can be used to read the content of the HTML document or replace it with new content.


## 4. Access elements in the DOM
A very common use of JavaScript is to read, modify or extend elements in the DOM. For such accesses to the DOM and its element nodes, the `document` object provides several methods:

| Method             					 | Description                                         |
|----------------------------------- | ----------------------------------------------------|
| `document.getElementById()`   	    | Finds the element by the `id` attribute             |
| `document.getElementsByTagName()`  | Finds all elements with a specific tag name         |
| `document.getElementsByClassName()`| Finds all elements of a given CSS class             |
| `document.getElementsByName()`     | Finds all elements with a given `name` attribute    |
| `document.querySelector(x)`        | Returns the first element that corresponds to the specified CSS selector `x` |
| `document.querySelectorAll(x)`     | Returns a list with all elements that match the specified CSS selector `x` |

In practice, the two somewhat newer methods `querySelector()` and `querySelectorAll()` are sufficient because they can be used to search for the usual CSS selectors such as elements, classes and IDs, and other attributes.


### Find an HTML element with a specific `id` attribute
The `document.getElementById()` method is used to search for a specific `id` attribute of an element. This method returns a reference to the element object if successful or `null` if no element with this `id` attribute exists.

Example:
  [Complete Code](https://github.com/BellaMrx/DOM_Document-Object-Model/tree/main/Examples/Part_2) --> **Examples/Part_2/...** 

index.html:
   ```
    <body>
      <h1>The DOM interface</h1>
      <p id="message">The paragraph text</p>
      <script src="scripts/script.js"></script>
    </body>
   ```

script.js:
   ```
    "use strict";

    let element = document.getElementById('message');
    if (element) {
      let text = element.innerHTML;
      text += " " + "has been extended!";
      element.innerHTML = text;
    } else {
      console.log("Element with ID message was not found!");
    }
   ```

Output:

 ![Preview](images/DOM-Interface.png)


Another example with `querySelector()`:
  [Complete Code](https://github.com/BellaMrx/DOM_Document-Object-Model/tree/main/Examples/Part_3) --> **Examples/Part_3/...** 

index.html:
   ```
    <body>
      <h1>The DOM interface</h1>
      <p id="message">The paragraph text</p>
      <script src="scripts/script.js"></script>
    </body>
   ```

script.js:
   ```
    "use strict";

    let element = document.getElementById('message');
    if (element) {
      let text = element.innerHTML;
      text += " " + "has been extended!";
      element.innerHTML = text;
    } else {
      console.log("Element with ID message was not found!");
    }
   ```

Output:

 ![Preview](images/DOM-Interface.png)

The method with `querySelector('#message')` is equal to the one with `getElementById('message')`.


### Search HTML elements with a specific tag name
If you want to search for HTML elements with a specific tag name, you can use the `getElementsByTagName()` method. This method is useful if you want to return a collection of all nodes with a corresponding tag name. The individual nodes can be accessed with the square brackets `[]` and the corresponding index value. The number of elements is returned by the `length` property.

  [Complete Code](https://github.com/BellaMrx/DOM_Document-Object-Model/tree/main/Examples/Part_4) --> **Examples/Part_4/...** 

index.html:
   ```
    <body>
      <article id="lead">
         <h1>The DOM interface</h1>
         <p>First paragraph text in the article</p>
         <p>Second paragraph text in the article</p>                                    
      </article>
      <p>First paragraph text outside the article</p>
      <p>Second paragraph text outside the article</p>
      <h2>Output:</h2>
      <output></output>
      <script src="scripts/script.js"></script>
    </body>
   ```

script.js:
   ```
    let plainText = "";
    let pElements = document.getElementsByTagName('p');
    for (let i = 0; i < pElements.length; i++) {
      plainText += pElements[i].innerHTML + '\n';
    }
    console.log(plainText);     // output for demonstration

    let htmlText = "p elements in the document: " + pElements.length + "<br>";
    let articleElements = document.getElementById('lead');
    let articlePElements;
    if (articleElements) {
      articlePElements = articleElements.getElementsByTagName('p');
      htmlText += "Of which is contained in the article element: " + articlePElements.length + "<br>";
    }

    htmlText += "The second paragraph in the article reads: " + articlePElements[1].innerHTML;

    document.querySelector('output').innerHTML = htmlText;
   ```

Output:

 ![Preview](images/DOM-Interface2.png)


Another example with `querySelectorAll()`:
  [Complete Code](https://github.com/BellaMrx/DOM_Document-Object-Model/tree/main/Examples/Part_5) --> **Examples/Part_5/...** 

index.html:
   ```
    <body>
      <article id="lead">
         <h1>The DOM interface</h1>
         <p>First paragraph text in the article</p>
         <p>Second paragraph text in the article</p>                                    
      </article>
      <p>First paragraph text outside the article</p>
      <p>Second paragraph text outside the article</p>
      <h2>Output:</h2>
      <output></output>
      <script src="scripts/script.js"></script>
    </body>
   ```

script.js:
   ```
    let plainText = "";
    let pElements = document.getElementsByTagName('p');
    for (let i = 0; i < pElements.length; i++) {
      plainText += pElements[i].innerHTML + '\n';
    }
    console.log(plainText);     // output for demonstration

    let htmlText = "p elements in the document: " + pElements.length + "<br>";
    let articlePElements = document.querySelectorAll('#lead p');
    if (articlePElements) {
      htmlText += "Of which is contained in the article element: " + articlePElements.length + "<br>";
    }

    htmlText += "The second paragraph in the article reads: " + articlePElements[1].innerHTML;

    document.querySelector('output').innerHTML = htmlText;
   ```

Output:

 ![Preview](images/DOM-Interface2.png)

`getElementsByTagName()` does not return an array, but a **Node** list (Live NodeList) which can be read with a loop. No array typical method (e.g. `forEach()`) can be called directly on a node list.


### Search HTML elements with a specific **class** attribute
If you want to search for an HTML element with a specific CSS class name, you can use the `getElementsByClassName()` method.
   ```
    let element = document.getElementsByClassName('class');
   ```

Like `getElementsByTagName()`, this method returns all found nodes in the HTML document with the class name `class`.

In the meantime, it also makes sense to use the `querySelectorAll()` method to find all CSS classes:
   ```
    let element = document.querySelectorAll('.class');
   ```


### Search HTML elements with a specific **name** attribute
If you want to search for nodes in the HTML document that contain the HTML attribute `name` with a specific value, you can use the `getElementsByName()` method. 

  [Complete Code](https://github.com/BellaMrx/DOM_Document-Object-Model/tree/main/Examples/Part_6) --> **Examples/Part_6/...** 

index.html:
   ```
    <body>
      <input name="color" type="radio" value="red">Red
      <input name="color" type="radio" value="green">Green
      <input type="button" onclick="getColor()" value="Select color">
      <br>
      <output></output>
      <script src="scripts/script.js"></script>
    </body>
   ```

script.js:
   ```
    function getColor() {
      let colors = document.getElementsByName('color');
      let htmlText = "Colors to choose : " + colors.length +
         "<br>You have chosen  :";
       if (colors[0].checked) {
         htmlText += " Red";
      } else if (colors[1].checked) {
         htmlText += " Green";
      } else {
         htmlText += "None";
      }
      document.querySelector('output').innerHTML = htmlText;
    }
   ```

Output:

 ![Preview](images/DOM-Interface3.png)

