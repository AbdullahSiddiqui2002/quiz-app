let questions = [
    // HTML Questions
    {
        topic: "html",
        question: "What does HTML stand for?",
        option: [
            "Hypertext Markup Language",
            "Hypertext Makeup Language",
            "Highlevel Markup Language",
            "Hyperlink Markup Language"
        ],
        answer: "Hypertext Markup Language"
    },
    {
        topic: "html",
        question: "Which HTML tag is used to define a paragraph?",
        option: ["<p>", "<para>", "<paragraph>", "<pg>"],
        answer: "<p>"
    },
    {
        topic: "html",
        question: "What is the correct HTML element for the largest heading?",
        option: ["<h1>", "<heading>", "<head>", "<h6>"],
        answer: "<h1>"
    },
    {
        topic: "html",
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        option: ["alt", "src", "title", "href"],
        answer: "alt"
    },
    {
        topic: "html",
        question: "Which HTML element is used to specify a footer for a document or section?",
        option: ["<footer>", "<section>", "<bottom>", "<end>"],
        answer: "<footer>"
    },
    {
        topic: "html",
        question: "What is the correct HTML element for inserting a line break?",
        option: ["<br>", "<lb>", "<break>", "<hr>"],
        answer: "<br>"
    },
    {
        topic: "html",
        question: "Which HTML attribute is used to define inline styles?",
        option: ["style", "class", "styles", "font"],
        answer: "style"
    },
    {
        topic: "html",
        question: "Which input type is used to create a slider in HTML5?",
        option: ["range", "slider", "scroll", "number"],
        answer: "range"
    },
    {
        topic: "html",
        question: "What is the purpose of the <meta> tag in HTML?",
        option: [
            "To provide metadata about the HTML document",
            "To create a navigation menu",
            "To include JavaScript",
            "To define a table"
        ],
        answer: "To provide metadata about the HTML document"
    },
    {
        topic: "html",
        question: "Which HTML element is used to play audio files?",
        option: ["<audio>", "<sound>", "<music>", "<media>"],
        answer: "<audio>"
    },
    {
        topic: "html",
        question: "What does the <canvas> element in HTML5 allow you to do?",
        option: [
            "Draw graphics",
            "Play videos",
            "Create forms",
            "Insert images"
        ],
        answer: "Draw graphics"
    },
    {
        topic: "html",
        question: "Which HTML element is used to embed a video?",
        option: ["<video>", "<movie>", "<embed>", "<media>"],
        answer: "<video>"
    },
    {
        topic: "html",
        question: "Which tag is used to define an interactive field for user input?",
        option: ["<input>", "<field>", "<textarea>", "<select>"],
        answer: "<input>"
    },
    {
        topic: "html",
        question: "What is the default value of the 'method' attribute in an HTML form?",
        option: ["GET", "POST", "PUT", "DELETE"],
        answer: "GET"
    },
    {
        topic: "html",
        question: "Which HTML element is used to specify a table header?",
        option: ["<th>", "<tr>", "<td>", "<table>"],
        answer: "<th>"
    },
    {
        topic: "html",
        question: "Which HTML element is used to create an unordered list?",
        option: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        topic: "html",
        question: "Which HTML tag is used to define an external link?",
        option: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        topic: "html",
        question: "Which HTML tag is used to define a table row?",
        option: ["<tr>", "<td>", "<th>", "<table>"],
        answer: "<tr>"
    },
    {
        topic: "html",
        question: "What is the correct HTML element to embed a Google map?",
        option: ["<iframe>", "<map>", "<embed>", "<object>"],
        answer: "<iframe>"
    },
    {
        topic: "html",
        question: "Which HTML tag is used to define a container for navigation links?",
        option: ["<nav>", "<header>", "<menu>", "<section>"],
        answer: "<nav>"
    },
    {
        topic: "html",
        question: "Which HTML element is used to define a description list?",
        option: ["<dl>", "<dt>", "<dd>", "<list>"],
        answer: "<dl>"
    },
    {
        topic: "html",
        question: "Which HTML attribute is used to specify the source of an image?",
        option: ["src", "alt", "href", "link"],
        answer: "src"
    },
    {
        topic: "html",
        question: "What is the purpose of the 'target' attribute in an HTML anchor tag?",
        option: ["To specify where to open the linked document", "To specify the title of the link", "To define the link text", "To create a tooltip"],
        answer: "To specify where to open the linked document"
    },
    {
        topic: "html",
        question: "Which tag is used to define an HTML document's metadata?",
        option: ["<head>", "<body>", "<footer>", "<meta>"],
        answer: "<head>"
    },
    {
        topic: "html",
        question: "Which HTML tag is used to define a division or section in a document?",
        option: ["<div>", "<section>", "<span>", "<article>"],
        answer: "<div>"
    },
    {
        topic: "css",
        question: "How many types of CSS are there?",
        option: ["3", "2", "1", "4"],
        answer: "3"
    },
    {
        topic: "css",
        question: "Which CSS property is used to change the background color?",
        option: ["background-color", "color", "bgcolor", "background"],
        answer: "background-color"
    },
    {
        topic: "css",
        question: "Which CSS property is used to control the spacing between lines of text?",
        option: ["line-height", "letter-spacing", "text-spacing", "text-height"],
        answer: "line-height"
    },
    {
        topic: "css",
        question: "What does the z-index property in CSS control?",
        option: [
            "The stack order of elements",
            "The opacity of elements",
            "The size of elements",
            "The position of elements"
        ],
        answer: "The stack order of elements"
    },
    {
        topic: "css",
        question: "Which CSS property is used to make text bold?",
        option: ["font-weight", "font-style", "text-bold", "font-bold"],
        answer: "font-weight"
    },
    {
        topic: "css",
        question: "Which CSS property controls the visibility of an element?",
        option: ["visibility", "display", "hidden", "opacity"],
        answer: "visibility"
    },
    {
        topic: "css",
        question: "Which property is used to align text in CSS?",
        option: ["text-align", "align", "vertical-align", "text"],
        answer: "text-align"
    },
    {
        topic: "css",
        question: "What is the correct syntax for a CSS comment?",
        option: ["/* comment */", "// comment", "<!-- comment -->", "# comment"],
        answer: "/* comment */"
    },
    {
        topic: "css",
        question: "Which CSS property is used to create space inside an element?",
        option: ["padding", "margin", "border", "spacing"],
        answer: "padding"
    },
    {
        topic: "css",
        question: "Which property is used to create space outside of an element?",
        option: ["margin", "padding", "border", "spacing"],
        answer: "margin"
    },
    {
        topic: "css",
        question: "Which value of the position property is not relative to any element?",
        option: ["absolute", "fixed", "static", "sticky"],
        answer: "fixed"
    },
    {
        topic: "css",
        question: "What is the purpose of the overflow property in CSS?",
        option: [
            "To specify how to handle content that exceeds an element's box",
            "To create space between lines of text",
            "To hide an element",
            "To set the size of an element"
        ],
        answer: "To specify how to handle content that exceeds an element's box"
    },
    {
        topic: "css",
        question: "Which CSS property is used to add rounded corners to an element?",
        option: ["border-radius", "corner-radius", "radius", "border-corner"],
        answer: "border-radius"
    },
    {
        topic: "css",
        question: "Which property is used to specify the thickness of the border?",
        option: ["border-width", "border-size", "border-thickness", "border-height"],
        answer: "border-width"
    },
    {
        topic: "css",
        question: "Which CSS unit is relative to the font size of the root element?",
        option: ["rem", "em", "%", "px"],
        answer: "rem"
    },
    {
        topic: "css",
        question: "Which CSS property is used to change the font of text?",
        option: ["font-family", "text-font", "font-style", "font-size"],
        answer: "font-family"
    },
    {
        topic: "css",
        question: "Which CSS property is used to set the opacity of an element?",
        option: ["opacity", "transparency", "visibility", "filter"],
        answer: "opacity"
    },
    {
        topic: "css",
        question: "Which value of the 'display' property is used to create a block-level element?",
        option: ["block", "inline", "none", "flex"],
        answer: "block"
    },
    {
        topic: "css",
        question: "Which CSS property is used to add shadows to text?",
        option: ["text-shadow", "box-shadow", "shadow", "shadow-text"],
        answer: "text-shadow"
    },
    {
        topic: "css",
        question: "Which CSS property is used to change the width of an element?",
        option: ["width", "height", "size", "length"],
        answer: "width"
    },
    {
        topic: "css",
        question: "Which CSS property controls the layout of flex container items?",
        option: ["justify-content", "align-items", "flex-direction", "layout"],
        answer: "justify-content"
    },
    {
        topic: "css",
        question: "Which CSS property is used to make elements float next to each other?",
        option: ["float", "inline", "position", "flex"],
        answer: "float"
    },
    {
        topic: "css",
        question: "Which CSS property is used to change the background image of an element?",
        option: ["background-image", "background", "image-background", "bg-image"],
        answer: "background-image"
    },
    {
        topic: "css",
        question: "Which CSS property is used to control the spacing between characters in a text?",
        option: ["letter-spacing", "line-spacing", "word-spacing", "text-spacing"],
        answer: "letter-spacing"
    },
    {
        topic: "css",
        question: "Which CSS property is used to set the size of the font?",
        option: ["font-size", "text-size", "size", "letter-size"],
        answer: "font-size"
    },
    {
        topic: "js",
        question: "What does 'DOM' stand for?",
        option: [
            "Document Object Model",
            "Data Object Method",
            "Dynamic Object Management",
            "Document Oriented Mapping"
        ],
        answer: "Document Object Model"
    },
    {
        topic: "js",
        question: "How do you declare a function in JavaScript?",
        option: [
            "function myFunction() {}",
            "func myFunction() {}",
            "define myFunction() {}",
            "myFunction() {}"
        ],
        answer: "function myFunction() {}"
    },
    {
        topic: "js",
        question: "What is the correct way to write a comment in JavaScript?",
        option: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment",
            "// or /* */"
        ],
        answer: "// or /* */"
    },
    {
        topic: "js",
        question: "Which operator is used to compare values and type in JavaScript?",
        option: ["===", "==", "=", "!="],
        answer: "==="
    },
    {
        topic: "js",
        question: "How do you add an event listener in JavaScript?",
        option: [
            "element.addEventListener('click', function);",
            "element.on('click', function);",
            "element.listen('click', function);",
            "element.trigger('click', function);"
        ],
        answer: "element.addEventListener('click', function);"
    },
    {
        topic: "js",
        question: "What is the correct syntax to create a variable in JavaScript?",
        option: ["var x;", "let x;", "const x;", "All of the above"],
        answer: "All of the above"
    },
    {
        topic: "js",
        question: "How do you write an if statement in JavaScript?",
        option: [
            "if (x == y) {}",
            "if x == y {}",
            "if x == y then {}",
            "if (x == y);"
        ],
        answer: "if (x == y) {}"
    },
    {
        topic: "js",
        question: "Which method is used to find the length of a string in JavaScript?",
        option: ["string.length", "string.size", "length.string", "string.size()"],
        answer: "string.length"
    },
    {
        topic: "js",
        question: "Which built-in method is used to parse a string to an integer in JavaScript?",
        option: ["parseInt()", "toInt()", "parse()", "integer()"],
        answer: "parseInt()"
    },
    {
        topic: "js",
        question: "How do you create an object in JavaScript?",
        option: [
            "var obj = {};",
            "var obj = new Object();",
            "var obj = Object();",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        topic: "js",
        question: "Which of the following is not a valid JavaScript data type?",
        option: ["String", "Boolean", "Number", "Float64"],
        answer: "Float64"
    },
    {
        topic: "js",
        question: "What does the 'this' keyword refer to in JavaScript?",
        option: [
            "The current object",
            "The parent object",
            "The global object",
            "None of the above"
        ],
        answer: "The current object"
    },
    {
        topic: "js",
        question: "Which JavaScript method is used to remove the last element of an array?",
        option: ["pop()", "remove()", "shift()", "splice()"],
        answer: "pop()"
    },
    {
        topic: "js",
        question: "What is the correct syntax to add a new item to an array in JavaScript?",
        option: [
            "array.push(item);",
            "array.add(item);",
            "array.append(item);",
            "array.insert(item);"
        ],
        answer: "array.push(item);"
    },
    {
        topic: "js",
        question: "Which of the following is used to call a function in JavaScript?",
        option: [
            "functionName();",
            "call(functionName);",
            "functionName.execute();",
            "invoke(functionName);"
        ],
        answer: "functionName();"
    },
    {
        topic: "js",
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        option: ["=", "==", "===", "<-"],
        answer: "="
    },
    {
        topic: "js",
        question: "What will be the output of 'console.log(2 + '2')' in JavaScript?",
        option: ["'22'", "4", "NaN", "Error"],
        answer: "'22'"
    },
    {
        topic: "js",
        question: "Which method is used to remove an item from a specific position in an array in JavaScript?",
        option: ["splice()", "pop()", "shift()", "slice()"],
        answer: "splice()"
    },
    {
        topic: "js",
        question: "How do you stop a loop in JavaScript?",
        option: ["break", "exit", "stop", "halt"],
        answer: "break"
    },
    {
        topic: "js",
        question: "Which JavaScript function is used to return the character at a specific index in a string?",
        option: ["charAt()", "indexOf()", "substr()", "getChar()"],
        answer: "charAt()"
    },
    {
        topic: "js",
        question: "How can you prevent a function from running more than once every 200 milliseconds?",
        option: ["setTimeout()", "debounce()", "throttle()", "setInterval()"],
        answer: "throttle()"
    },
    {
        topic: "js",
        question: "What is the purpose of the 'window.onload' event in JavaScript?",
        option: [
            "It runs a function after the page has finished loading",
            "It triggers when a button is clicked",
            "It triggers when an error occurs",
            "It runs a function before the page is loaded"
        ],
        answer: "It runs a function after the page has finished loading"
    },
    {
        topic: "js",
        question: "What does JSON stand for?",
        option: [
            "JavaScript Object Notation",
            "Java Standard Object Notation",
            "JavaScript Online Notation",
            "Java Open Notation"
        ],
        answer: "JavaScript Object Notation"
    },
    {
        topic: "js",
        question: "Which method is used to convert a string to an array of characters in JavaScript?",
        option: ["split()", "join()", "toArray()", "charAt()"],
        answer: "split()"
    },
    {
        topic: "js",
        question: "Which function is used to execute code after a specific time interval in JavaScript?",
        option: ["setTimeout()", "setInterval()", "delay()", "timeOut()"],
        answer: "setTimeout()"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap class is used to make a container with fixed width?",
        option: ["container", "container-fluid", "container-fixed", "fixed-container"],
        answer: "container"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap class is used to center align text?",
        option: ["text-center", "center-align", "text-align-center", "align-center"],
        answer: "text-center"
    },
    {
        topic: "bootstrap",
        question: "What class is used to create a primary button in Bootstrap?",
        option: ["btn-primary", "btn-default", "btn-main", "btn-action"],
        answer: "btn-primary"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to create a responsive image in Bootstrap?",
        option: ["img-responsive", "img-fluid", "img-cover", "img-auto"],
        answer: "img-fluid"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to make an element invisible in Bootstrap?",
        option: ["invisible", "hidden", "d-none", "opacity-0"],
        answer: "d-none"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap class is used to create a column that takes up 12 columns on extra small devices?",
        option: ["col-xs-12", "col-12", "col-sm-12", "col-md-12"],
        answer: "col-12"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap class is used for a rounded corner on a button?",
        option: ["btn-rounded", "btn-circle", "rounded", "btn-sm"],
        answer: "rounded"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to add padding to all sides of an element in Bootstrap?",
        option: ["p-3", "padding-all", "padding-3", "pad-3"],
        answer: "p-3"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to change the background color of an element to blue in Bootstrap?",
        option: ["bg-blue", "bg-primary", "bg-light", "bg-info"],
        answer: "bg-primary"
    },
    {
        topic: "bootstrap",
        question: "How can you add a border around an element in Bootstrap?",
        option: ["border", "border-1", "border-box", "border-light"],
        answer: "border"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap component is used to create a navigation bar?",
        option: ["nav", "navbar", "menu", "navigation"],
        answer: "navbar"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap class is used to create a jumbotron?",
        option: ["jumbotron", "hero", "big-box", "lead-box"],
        answer: "jumbotron"
    },
    {
        topic: "bootstrap",
        question: "What class is used to add a small text in Bootstrap?",
        option: ["text-small", "text-muted", "text-light", "text-mini"],
        answer: "text-muted"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to create a flex container in Bootstrap?",
        option: ["d-flex", "flex-container", "flex", "container-flex"],
        answer: "d-flex"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap class is used to display an element as a block-level element?",
        option: ["d-block", "block", "display-block", "show-block"],
        answer: "d-block"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to display an element as a grid item in Bootstrap?",
        option: ["grid-item", "col", "col-item", "row-item"],
        answer: "col"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap class is used to create a carousel component?",
        option: ["carousel", "slider", "image-slider", "carousel-container"],
        answer: "carousel"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap class is used to create a drop-down menu?",
        option: ["dropdown", "dropdown-menu", "menu-dropdown", "dropdown-toggle"],
        answer: "dropdown"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to align items vertically in Bootstrap's flexbox system?",
        option: ["align-items-center", "vertical-center", "v-align", "flex-center"],
        answer: "align-items-center"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to create a large button in Bootstrap?",
        option: ["btn-lg", "btn-large", "btn-extra", "btn-big"],
        answer: "btn-lg"
    },
    {
        topic: "bootstrap",
        question: "Which Bootstrap class is used to change the color of the text?",
        option: ["text-color", "text-custom", "text-primary", "text-style"],
        answer: "text-primary"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to hide an element on medium devices and larger in Bootstrap?",
        option: ["d-none d-md-block", "d-block d-md-none", "d-md-hide", "d-md-none"],
        answer: "d-none d-md-block"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to create a large form input in Bootstrap?",
        option: ["form-control-lg", "input-lg", "form-large", "input-big"],
        answer: "form-control-lg"
    },
    {
        topic: "bootstrap",
        question: "Which class is used to align text to the right in Bootstrap?",
        option: ["text-right", "right-align", "align-right", "text-align-right"],
        answer: "text-right"
    },
    {
        topic: "bootstrap",
        question: "What class is used to create a responsive container in Bootstrap?",
        option: [
            "container-fluid",
            "container-responsive",
            "container",
            "container-sm"
        ],
        answer: "container"
    },
    {
        topic: "react",
        question: "What does JSX stand for in React?",
        option: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JavaScript Extended",
            "JavaScript Expression"
        ],
        answer: "JavaScript XML"
    },
    {
        topic: "react",
        question: "Which hook is used to manage state in a functional component in React?",
        option: [
            "useState",
            "useEffect",
            "useContext",
            "useReducer"
        ],
        answer: "useState"
    },
    {
        topic: "react",
        question: "What is the default value of the 'key' prop in React lists?",
        option: [
            "index",
            "id",
            "value",
            "key"
        ],
        answer: "index"
    },
    {
        topic: "react",
        question: "Which method is used to update the state in a React class component?",
        option: [
            "this.setState()",
            "this.updateState()",
            "this.changeState()",
            "this.stateUpdate()"
        ],
        answer: "this.setState()"
    },
    {
        topic: "react",
        question: "How can you pass data from a parent component to a child component in React?",
        option: [
            "Using props",
            "Using state",
            "Using context",
            "Using methods"
        ],
        answer: "Using props"
    },
    {
        topic: "react",
        question: "Which hook is used to perform side effects in a functional component in React?",
        option: [
            "useEffect",
            "useState",
            "useCallback",
            "useRef"
        ],
        answer: "useEffect"
    },
    {
        topic: "react",
        question: "How do you handle events in React?",
        option: [
            "By using the onClick attribute",
            "By using the onclick attribute",
            "By using the handleEvent method",
            "By using the eventListener"
        ],
        answer: "By using the onClick attribute"
    },
    {
        topic: "react",
        question: "What does 'React.Fragment' do?",
        option: [
            "It groups multiple elements without adding extra nodes to the DOM",
            "It renders an empty element",
            "It is used for styling elements",
            "It adds a wrapper to the components"
        ],
        answer: "It groups multiple elements without adding extra nodes to the DOM"
    },
    {
        topic: "react",
        question: "Which function is used to create a new React component?",
        option: [
            "React.createElement()",
            "React.createComponent()",
            "React.Component()",
            "React.create()"
        ],
        answer: "React.createElement()"
    },
    {
        topic: "react",
        question: "Which method is used to add a new item to the state in React?",
        option: [
            "this.setState()",
            "this.addState()",
            "this.updateState()",
            "this.pushState()"
        ],
        answer: "this.setState()"
    },
    {
        topic: "react",
        question: "What is the purpose of the 'useEffect' hook in React?",
        option: [
            "To perform side effects in functional components",
            "To update the state of the component",
            "To pass data to a child component",
            "To render JSX"
        ],
        answer: "To perform side effects in functional components"
    },
    {
        topic: "react",
        question: "Which of the following is true about React components?",
        option: [
            "They are reusable",
            "They can only be created as functions",
            "They must use the class syntax",
            "They cannot receive props"
        ],
        answer: "They are reusable"
    },
    {
        topic: "react",
        question: "Which React feature allows the components to be reused?",
        option: [
            "Component-based architecture",
            "State management",
            "JSX syntax",
            "Virtual DOM"
        ],
        answer: "Component-based architecture"
    },
    {
        topic: "react",
        question: "How do you create a controlled component in React?",
        option: [
            "By using state to control the input element",
            "By using props to control the input element",
            "By using the setState method",
            "By using the defaultValue attribute"
        ],
        answer: "By using state to control the input element"
    },
    {
        topic: "react",
        question: "What is 'state' in React?",
        option: [
            "An object that holds the dynamic data of a component",
            "A static property of a component",
            "A function that renders JSX",
            "A class method"
        ],
        answer: "An object that holds the dynamic data of a component"
    },
    {
        topic: "react",
        question: "Which method is used to render a React component into the DOM?",
        option: [
            "ReactDOM.render()",
            "React.render()",
            "ReactDOM.createElement()",
            "React.createElement()"
        ],
        answer: "ReactDOM.render()"
    },
    {
        topic: "react",
        question: "What does the 'useContext' hook do in React?",
        option: [
            "It provides access to the context values",
            "It manages the state of the component",
            "It handles events in functional components",
            "It allows components to communicate"
        ],
        answer: "It provides access to the context values"
    },
    {
        topic: "react",
        question: "What is 'prop drilling' in React?",
        option: [
            "Passing props through multiple layers of components",
            "Changing the props of a component",
            "Using props to update the state",
            "Rendering props in the DOM"
        ],
        answer: "Passing props through multiple layers of components"
    },
    {
        topic: "react",
        question: "Which of the following can be used to create dynamic styling in React?",
        option: [
            "Inline styles with JavaScript",
            "CSS files",
            "External stylesheets",
            "Static class names"
        ],
        answer: "Inline styles with JavaScript"
    },
    {
        topic: "react",
        question: "How do you prevent a component from re-rendering in React?",
        option: [
            "By using shouldComponentUpdate",
            "By using preventUpdate",
            "By using React.memo",
            "By using PureComponent"
        ],
        answer: "By using shouldComponentUpdate"
    },
    {
        topic: "react",
        question: "Which method in React can be used to handle errors in a component?",
        option: [
            "componentDidCatch",
            "errorBoundary",
            "catchError",
            "errorHandler"
        ],
        answer: "componentDidCatch"
    },
    {
        topic: "react",
        question: "Which of the following helps optimize performance in React?",
        option: [
            "React.memo",
            "React.PureComponent",
            "shouldComponentUpdate",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        topic: "react",
        question: "What does the 'useRef' hook do in React?",
        option: [
            "It provides a reference to a DOM element",
            "It is used to store a value in state",
            "It is used to handle side effects",
            "It is used to update the component"
        ],
        answer: "It provides a reference to a DOM element"
    },
    {
        topic: "react",
        question: "What is the purpose of React Router?",
        option: [
            "To manage navigation in React apps",
            "To handle events in React",
            "To manage the state of components",
            "To fetch data from APIs"
        ],
        answer: "To manage navigation in React apps"
    },
    {
        topic: "react",
        question: "Which method is used to handle form submissions in React?",
        option: [
            "onSubmit",
            "onClick",
            "onChange",
            "submitForm"
        ],
        answer: "onSubmit"
    },
    {
        "topic": "python",
        "question": "What is the output of the following Python code: print(2 * 3 + 5)?",
        "option": ["11", "10", "15", "13"],
        "answer": "11"
    },
    {
        "topic": "python",
        "question": "Which of the following is used to define a function in Python?",
        "option": ["def", "function", "func", "lambda"],
        "answer": "def"
    },
    {
        "topic": "python",
        "question": "How do you declare a variable in Python?",
        "option": ["variable = value", "value : variable", "var value", "let value"],
        "answer": "variable = value"
    },
    {
        "topic": "python",
        "question": "Which of the following data types is immutable in Python?",
        "option": ["List", "Set", "String", "Dictionary"],
        "answer": "String"
    },
    {
        "topic": "python",
        "question": "What is the correct way to import the math module in Python?",
        "option": ["import math", "import module math", "from math import", "using math"],
        "answer": "import math"
    },
    {
        "topic": "python",
        "question": "Which of the following is the correct syntax for a while loop in Python?",
        "option": ["while (condition):", "while condition {}", "while condition:", "loop while (condition)"],
        "answer": "while condition:"
    },
    {
        "topic": "python",
        "question": "What does the len() function do in Python?",
        "option": ["Finds the length of an object", "Checks if the object is empty", "Converts an object to a string", "Finds the type of an object"],
        "answer": "Finds the length of an object"
    },
    {
        "topic": "python",
        "question": "How do you start a comment in Python?",
        "option": ["//", "#", "/*", "comment:"],
        "answer": "#"
    },
    {
        "topic": "python",
        "question": "Which of the following is used to define a class in Python?",
        "option": ["class", "define", "structure", "object"],
        "answer": "class"
    },
    {
        "topic": "python",
        "question": "How do you create a list in Python?",
        "option": ["[]", "{}", "()", "<>"],
        "answer": "[]"
    },
    {
        "topic": "python",
        "question": "Which method is used to add an item to a list in Python?",
        "option": ["append()", "add()", "insert()", "push()"],
        "answer": "append()"
    },
    {
        "topic": "python",
        "question": "What is the result of the expression 'Hello' + ' World' in Python?",
        "option": ["Hello World", "HelloWorld", "Hello+World", "Error"],
        "answer": "Hello World"
    },
    {
        "topic": "python",
        "question": "Which operator is used to raise a number to the power in Python?",
        "option": ["^", "**", "&&", "//"],
        "answer": "**"
    },
    {
        "topic": "python",
        "question": "How can you handle exceptions in Python?",
        "option": ["try-except", "catch-throw", "do-while", "if-else"],
        "answer": "try-except"
    },
    {
        "topic": "python",
        "question": "Which of the following functions is used to read user input in Python?",
        "option": ["input()", "read()", "get()", "scan()"],
        "answer": "input()"
    },
    {
        "topic": "python",
        "question": "What is the output of print(type([])) in Python?",
        "option": ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'str'>"],
        "answer": "<class 'list'>"
    },
    {
        "topic": "python",
        "question": "How do you define a dictionary in Python?",
        "option": ["{}", "[]", "()", "<>"],
        "answer": "{}"
    },
    {
        "topic": "python",
        "question": "Which Python keyword is used to exit a loop?",
        "option": ["break", "exit", "end", "stop"],
        "answer": "break"
    },
    {
        "topic": "python",
        "question": "What is the output of print(5 == 5) in Python?",
        "option": ["True", "False", "None", "Error"],
        "answer": "True"
    },
    {
        "topic": "python",
        "question": "Which of the following is a mutable data type in Python?",
        "option": ["String", "Tuple", "List", "Integer"],
        "answer": "List"
    },
    {
        "topic": "python",
        "question": "Which method is used to remove an element from a list in Python?",
        "option": ["remove()", "delete()", "pop()", "discard()"],
        "answer": "remove()"
    },
    {
        "topic": "python",
        "question": "What does the range() function do in Python?",
        "option": ["Generates a sequence of numbers", "Creates a list", "Finds the range of values", "Returns a random number"],
        "answer": "Generates a sequence of numbers"
    },
    {
        "topic": "python",
        "question": "Which of the following is used to call a function in Python?",
        "option": ["function_name()", "call function_name()", "function_name{}", "execute function_name()"],
        "answer": "function_name()"
    },
    {
        "topic": "python",
        "question": "How do you concatenate two lists in Python?",
        "option": ["list1 + list2", "list1.append(list2)", "list1.concat(list2)", "merge(list1, list2)"],
        "answer": "list1 + list2"
    },
    {
        "topic": "python",
        "question": "What will be the output of the following Python code: print(3 == 3 and 4 != 4)?",
        "option": ["True", "False", "None", "Error"],
        "answer": "False"
    }

];

let currentQuestion = 0;
let score = 0;
let filteredQuestions = [];
function startQuiz() {
    let username = document.getElementById("username");
    let topic = document.getElementById("topic");
    if (username.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a username.'
        });
        return;
    }
    if (topic.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select a topic.'
        });
        return;
    }
    filteredQuestions = questions.filter(q => q.topic === topic.value);
    document.getElementById("main_container").style.display = "none";
    document.getElementById("quiz_container").style.display = "block";

    loadQuestions()
}
function loadQuestions() {
    let question = document.getElementById("question");
    let optionList = document.getElementById("option_list");
    let current = document.getElementById("current");
    let total = document.getElementById("total");
    optionList.innerHTML = ""

    let currentQuestionObject = filteredQuestions[currentQuestion];
    console.log(currentQuestionObject, "<-- current question")

    question.innerText = currentQuestionObject.question;

    current.innerText = currentQuestion + 1;
    total.innerText = filteredQuestions.length;

    for (var i = 0; i < currentQuestionObject.option.length; i++) {
        let optiondiv = document.createElement("div");
        optiondiv.setAttribute("class", "optiondiv");
        let inputElement = document.createElement("input");
        inputElement.type = "radio"
        inputElement.name = "option"
        inputElement.value = currentQuestionObject.option[i]

        let labelElement = document.createElement("label");
        labelElement.innerText = currentQuestionObject.option[i];
        labelElement.setAttribute("class", "text-light ms-2")
        optionList.appendChild(optiondiv);
        optiondiv.appendChild(inputElement);
        optiondiv.appendChild(labelElement);
        console.log(inputElement)
    }

}

function nextQuest() {
    let selectedOption = document.querySelector('input[name="option"]:checked')
    console.log(selectedOption);

    if (!selectedOption) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select an option.'
        });
        return;
    }

    if (selectedOption.value == filteredQuestions[currentQuestion].answer) {
        score++
    }
    currentQuestion++
    if (currentQuestion < filteredQuestions.length) {
        loadQuestions()
    } else {
        showResult()
    }

}


function showResult() {
    document.getElementById("quiz_container").style.display = "none";
    document.getElementById("result_container").style.display = "block";
    let name = document.getElementById("name");
    let remarks = document.getElementById("remarks");
    let username = document.getElementById("username").value;
    let textElement = document.getElementById("resultText");
    textElement.innerText = `Score: ${score} / ${filteredQuestions.length}`;
    name.innerText = username;
    let percentage = (score / filteredQuestions.length) * 100;
    if (percentage >= 70) {
        remarks.innerText = "Excellent 🔥🎉🌟";
    } else if (percentage >= 50) {
        remarks.innerText = "Good 👍😊";
    } else {
        remarks.innerText = "Needs Improvement 😕💪";
    }
}
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result_container").style.display = "none";
    document.getElementById("main_container").style.display = "block";
    username.value = "";
    topic.value = "";
}
