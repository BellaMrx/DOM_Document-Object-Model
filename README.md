# DOM_Document-Object-Model
 
 Change web pages dynamically


---------------------------------------------

## Content
 1. Introduction to the DOM of an HTML document
 2. the `document` object
 3. The DOM programming interface 
 4.  
 5. 
---------------------------------------------

# 1. Introduction to the DOM of an HTML document
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


# 2. The `document` object
The `document` object is the topmost object of the DOM tree, only with it it is possible to access and modify all elements of the HTML document with JavaScript. It represents practically the whole web page and is the owner of all other nodes of the web page. If you want to access an element in an HTML document, this can be done e.g. with the `document` object and the `querySelector()` method.

   ```
    let element = document.querySelector('body');
   ```


# 3. The DOM programming interface
DOM provides various methods and properties for each object in the DOM tree. 

Example:
  [Complete Code](https:) --> **Examples/Part_1/...** 

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