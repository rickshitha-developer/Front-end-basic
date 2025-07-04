var app = angular.module("codeApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "pages/home.html"
    })
    .when("/what-is-web", {
      templateUrl: "pages/what-is-web.html"
    })
   
	.when("/html", {
	  templateUrl: "pages/html.html",
	 
	})

    .when("/css", {
      templateUrl: "pages/css.html"
    })
    .when("/bootstrap", {
      templateUrl: "pages/bootstrap.html"
    })
    .when("/javascript", {
      templateUrl: "pages/javascript.html"
    })
    .when("/flask", {
      templateUrl: "pages/flask.html"
    })
    .when("/mini-projects", {
      templateUrl: "pages/mini-projects.html"
    })
    .when("/interview-prep", {
      templateUrl: "pages/interview-prep.html"
    })
    .when("/resources", {
      templateUrl: "pages/resources.html"
    })
    .when("/contact", {
      templateUrl: "pages/contact.html"
    })
	 .when("/quiz", {
      templateUrl: "pages/quiz.html",
      controller: "quizController"
    })
    .otherwise({
      redirectTo: "/home"
    });
});
app.controller("quizController", function($scope) {
  $scope.selectedQuiz = "";
  $scope.showResult = false;
  $scope.score = 0;

  $scope.quizzes = {
    html: {
  questions: [
    {
      question: "Which tag defines a hyperlink?",
      options: ["<a>", "<img>", "<div>"],
      correct: "<a>"
    },
    {
      question: "Which tag displays an image?",
      options: ["<img>", "<a>", "<p>"],
      correct: "<img>"
    },
    {
      question: "Which tag creates a table row?",
      options: ["<tr>", "<td>", "<th>"],
      correct: "<tr>"
    },
    {
      question: "Which tag adds a line break?",
      options: ["<br>", "<hr>", "<p>"],
      correct: "<br>"
    },
    {
      question: "Which tag is used for an unordered list?",
      options: ["<ul>", "<ol>", "<li>"],
      correct: "<ul>"
    },
    {
      question: "Which tag creates a numbered list?",
      options: ["<ul>", "<ol>", "<dl>"],
      correct: "<ol>"
    },
    {
      question: "Which tag defines a list item?",
      options: ["<li>", "<ul>", "<ol>"],
      correct: "<li>"
    },
    {
      question: "Which tag defines a table cell?",
      options: ["<td>", "<tr>", "<table>"],
      correct: "<td>"
    },
    {
      question: "Which tag adds a horizontal line?",
      options: ["<hr>", "<br>", "<h1>"],
      correct: "<hr>"
    },
    {
      question: "Which tag defines the largest heading?",
      options: ["<h1>", "<h6>", "<p>"],
      correct: "<h1>"
    },
    {
      question: "Which tag creates a dropdown in a form?",
      options: ["<select>", "<input>", "<option>"],
      correct: "<select>"
    },
    {
      question: "Which tag defines an input field?",
      options: ["<input>", "<form>", "<label>"],
      correct: "<input>"
    },
    {
      question: "Which tag shows preformatted text?",
      options: ["<pre>", "<code>", "<p>"],
      correct: "<pre>"
    },
    {
      question: "Which tag defines emphasized text?",
      options: ["<em>", "<strong>", "<b>"],
      correct: "<em>"
    },
    {
      question: "Which tag defines the body of an HTML document?",
      options: ["<body>", "<head>", "<html>"],
      correct: "<body>"
    },
    {
      question: "Which tag defines metadata?",
      options: ["<meta>", "<title>", "<link>"],
      correct: "<meta>"
    }
  ]
},
    css: {
  questions: [
    {
      question: "Which property sets the text color?",
      options: ["color", "background", "border"],
      correct: "color"
    },
    {
      question: "Which selector targets classes?",
      options: [".classname", "#idname", "tagname"],
      correct: ".classname"
    },
    {
      question: "Which property sets the background color?",
      options: ["color", "background-color", "border-color"],
      correct: "background-color"
    },
    {
      question: "Which selector targets an element by ID?",
      options: ["#", ".", "$"],
      correct: "#"
    },
    {
      question: "Which property sets the font size?",
      options: ["font-size", "text-size", "size"],
      correct: "font-size"
    },
    {
      question: "Which unit is relative to the parent font size?",
      options: ["px", "em", "cm"],
      correct: "em"
    },
    {
      question: "Which property sets the spacing inside an element?",
      options: ["padding", "margin", "border"],
      correct: "padding"
    },
    {
      question: "Which property sets the spacing outside an element?",
      options: ["margin", "padding", "outline"],
      correct: "margin"
    },
    {
      question: "Which display value makes an element a flex container?",
      options: ["display: flex", "display: block", "display: inline"],
      correct: "display: flex"
    },
    {
      question: "Which property aligns text to the center?",
      options: ["text-align", "align-items", "justify-content"],
      correct: "text-align"
    },
    {
      question: "Which pseudo-class selects links when hovered?",
      options: [":hover", ":active", ":focus"],
      correct: ":hover"
    },
    {
      question: "Which property adds a shadow to an element?",
      options: ["box-shadow", "shadow", "outline"],
      correct: "box-shadow"
    },
    {
      question: "Which property makes corners rounded?",
      options: ["border-radius", "corner", "round-border"],
      correct: "border-radius"
    },
    {
      question: "Which property sets the width of an element?",
      options: ["width", "height", "size"],
      correct: "width"
    },
    {
      question: "Which rule is used for media queries?",
      options: ["@media", "@import", "@keyframes"],
      correct: "@media"
    },
    {
      question: "Which rule defines CSS animations?",
      options: ["@keyframes", "@media", "@font-face"],
      correct: "@keyframes"
    }
  ]
},
    js: {
  questions: [
    {
      question: "How do you declare a variable?",
      options: ["let", "var", "both"],
      correct: "both"
    },
    {
      question: "Which function shows an alert popup?",
      options: ["alert()", "prompt()", "console.log()"],
      correct: "alert()"
    },
    {
      question: "Which keyword is used to declare a constant?",
      options: ["let", "const", "var"],
      correct: "const"
    },
    {
      question: "Which method writes to the console?",
      options: ["console.write()", "console.log()", "print()"],
      correct: "console.log()"
    },
    {
      question: "How do you create a function in JS?",
      options: ["function myFunc() {}", "create myFunc() {}", "new function myFunc() {}"],
      correct: "function myFunc() {}"
    },
    {
      question: "Which symbol is used for comments in JS?",
      options: ["//", "##", "--"],
      correct: "//"
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Model", "Document Order Model"],
      correct: "Document Object Model"
    },
    {
      question: "Which method changes HTML content?",
      options: ["getElementById", "innerHTML", "setElement"],
      correct: "innerHTML"
    },
    {
      question: "Which event runs code when a button is clicked?",
      options: ["onhover", "onclick", "onsubmit"],
      correct: "onclick"
    },
    {
      question: "Which loop repeats a block a fixed number of times?",
      options: ["if", "for", "switch"],
      correct: "for"
    },
    {
      question: "How do you make a conditional statement?",
      options: ["if...else", "when...then", "check...do"],
      correct: "if...else"
    },
    {
      question: "Which operator checks equality and type?",
      options: ["==", "===", "="],
      correct: "==="
    },
    {
      question: "How do you create an array?",
      options: ["()", "[]", "{}"],
      correct: "[]"
    },
    {
      question: "Which is a valid array method?",
      options: ["add()", "append()", "push()"],
      correct: "push()"
    },
    {
      question: "How do you parse a string to an integer?",
      options: ["int()", "parseInt()", "parse()"],
      correct: "parseInt()"
    },
    {
      question: "How do you check the length of an array?",
      options: ["array.length()", "array.count", "array.length"],
      correct: "array.length"
    }
  ]
},
all: {
  questions: [
    // HTML
    {
      question: "Which tag defines a table row?",
      options: ["<tr>", "<td>", "<th>"],
      correct: "<tr>"
    },
    {
      question: "What tag is used for inserting an image?",
      options: ["<pic>", "<img>", "<image>"],
      correct: "<img>"
    },
    {
      question: "Which tag makes text bold?",
      options: ["<b>", "<i>", "<u>"],
      correct: "<b>"
    },
    {
      question: "Which attribute opens a link in a new tab?",
      options: ["target='_blank'", "href='_blank'", "src='_blank'"],
      correct: "target='_blank'"
    },
    {
      question: "Which tag defines the largest heading?",
      options: ["<h6>", "<h1>", "<head>"],
      correct: "<h1>"
    },
    // CSS
    {
      question: "Which property changes text size?",
      options: ["font-size", "text-size", "size"],
      correct: "font-size"
    },
    {
      question: "Which unit is relative to root font size?",
      options: ["em", "rem", "px"],
      correct: "rem"
    },
    {
      question: "Which property sets background color?",
      options: ["background", "color", "border-color"],
      correct: "background"
    },
    {
      question: "Which CSS property is used for shadows?",
      options: ["shadow", "box-shadow", "outline"],
      correct: "box-shadow"
    },
    {
      question: "Which property makes text italic?",
      options: ["text-style", "font-style", "style"],
      correct: "font-style"
    },
    // JavaScript
    {
      question: "Which symbol is used for single-line comments?",
      options: ["//", "#", "--"],
      correct: "//"
    },
    {
      question: "How do you get an element by ID?",
      options: ["getElement()", "getElementById()", "selectById()"],
      correct: "getElementById()"
    },
    {
      question: "Which keyword declares a block-scoped variable?",
      options: ["var", "let", "define"],
      correct: "let"
    },
    {
      question: "What is JSON?",
      options: ["Java Simple Object Notation", "JavaScript Object Notation", "Java Syntax Object Name"],
      correct: "JavaScript Object Notation"
    },
    {
      question: "Which method adds an item to an array end?",
      options: ["add()", "push()", "append()"],
      correct: "push()"
    },
    {
      question: "Which operator checks equality and type?",
      options: ["==", "===", "!="],
      correct: "===" 
    },
    {
      question: "How do you write an alert?",
      options: ["popup()", "alert()", "show()"],
      correct: "alert()"
    },
    {
      question: "Which event runs when the page loads?",
      options: ["onload", "onclick", "onhover"],
      correct: "onload"
    },
    {
      question: "Which loop runs at least once?",
      options: ["for", "do...while", "while"],
      correct: "do...while"
    },
    {
      question: "Which function converts JSON to an object?",
      options: ["JSON.toObject()", "JSON.parse()", "JSON.convert()"],
      correct: "JSON.parse()"
    }
  ]
}

  };

  $scope.submitQuiz = function() {
  let score = 0;
  $scope.quizzes[$scope.selectedQuiz].questions.forEach(q => {
    if (q.answer === q.correct) {
      score++;
      q.showCorrect = false;  // Hide correction if correct
    } else {
      q.showCorrect = true;   // Show correction if wrong
    }
  });
  $scope.score = score;
  $scope.showResult = true;
};

});

app.controller('MainCtrl', function($scope, $timeout) {
  $scope.showPopup = false;

  // Show after 3 seconds
  $timeout(function() {
    $scope.popupMessage = "Congrats! You Learn Basics of Front-end!";
    $scope.showPopup = true;

    // Auto-hide after 5 seconds
    $timeout(function() {
      $scope.showPopup = false;
    }, 5000);

  }, 1000);
});
