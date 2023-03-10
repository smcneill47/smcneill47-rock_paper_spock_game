# Introduction 
Welcome to the game of Rock, Paper, Scissors, Lizard, Spock. This game was used to showcase how simple logic is applied in JavaScript to create a simple game of user vs computer. 

The userbase of this website is geared towards students in the coding community and can hopefully be used as an example on how to create a similar project using core HTML, CSS and JavaScript. 

The website has been designed responsively and performs well across various different screen sizes. 

![image](https://user-images.githubusercontent.com/118195140/224560440-4f5311f0-d17b-45ff-8007-f0348b5c142e.png)


# Header
A simple header was provided in order to allow the user to easily identify the purpose of the website 

![image](https://user-images.githubusercontent.com/118195140/224560237-90117d57-6797-4ae9-b031-9e5ddca49ad2.png)

# User Options Section 
A user option section was created with our variables for the game. 5 options are provided to the user to choose from, Rock, Paper, Scissors, Spock, Lizard. 

![image](https://user-images.githubusercontent.com/118195140/224560345-c3ef969e-3ff1-4bd3-964c-26d11420f762.png)

# Play Button 
After the user has selected an option a play button was created in order to initiate the game. Once the play button has been clicked by the user, the computers choice and the result of the game are displayed in separate windows. 

![image](https://user-images.githubusercontent.com/118195140/224560630-bc7d8151-3320-458e-a300-ae580e6e20f3.png)

# Computer Choice 
A separate span was created in order to show the computers choice here. Once the user has selected an option and clicks play the JavaScript code will return a random choice between 1-5. What choice is selected in comparison to the user will dictate the result of the game. 

![image](https://user-images.githubusercontent.com/118195140/224560747-047495f4-08a3-4690-b22a-ddadf43e2903.png)

# Result Section 
This section prints the result of the game between the user and the computer. Making use of switches in JavaScript depending on the selection between user and computer the appropriate result is printed. In the event the play button has been clicked without the user selecting an option, the result section will display "Something Wrong. Try Again." This will prompt the user to make a selection in order to play. 

![image](https://user-images.githubusercontent.com/118195140/224561090-14a2cf9a-dd25-4391-a531-aa1d767a283d.png)

# Testing 

## HTML 
Ran HTML code through the HTML code validator provided by W3 Schools with no errors retruning. 

![image](https://user-images.githubusercontent.com/118195140/224564576-2502d342-5939-44e1-aab0-79f76d3bb3f1.png)

## CSS
Ran HTML code through the Jigsaw validator which prooduced no errors 

![image](https://user-images.githubusercontent.com/118195140/224564748-78f53ba0-95f0-487a-86d5-3fe4fc131a5b.png)

## JavaScript 

Used JS Lint in order to assess any errors with the JavaScript code. 6 errors were retruned. 5 of these were comments which are more than 80 characters. I deem these comments necessary for the reader to understand how the code performs. Due to this I have decided not to resolve this error as the comments are necessary. I was unable to solve the first error where an identifier was expected. I have done some research on how to resolve this on stack overflow and W3 Schools but I cannot find a way to remove the error. 

![image](https://user-images.githubusercontent.com/118195140/224565062-4fb0b84b-f8cd-47ba-aa81-fd1516b5a1a4.png)

# Possible Future Fearures 
* A scoreboard to track how many games a user/ computer has won. 
* Audio added to play when the user has won/ lost.
* Animations could be added when Rock beats paper, Spock vaporises Rock etc. 
* A best of 3 or a best of 5 system which determines the victor. 

# Resources 
https://www.w3schools.com/css/css_font.asp

https://fonts.google.com/specimen/Gajraj+One

https://stackoverflow.com/questions/8739665/is-background-colornone-valid-css

https://www.w3schools.com/css/css_align.asp#:~:text=Center%20Align%20Elements,the%20edges%20of%20its%20container.

https://www.emailonacid.com/blog/article/email-development/emailology_media_queries_demystified_min-width_and_max-width/

https://www.w3schools.com/howto/howto_css_center_button.asp

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_center-flex_btn

https://ui.dev/amiresponsive?url=https://smcneill47.github.io/smcneill47-rock_paper_spock_game/

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

https://www.markdownguide.org/basic-syntax/

https://github.com/mushanshitiancai/vscode-paste-image/blob/master/README.md

https://validator.w3.org/nu/#textarea

https://www.w3schools.com/cssref/pr_background-image.php

https://jigsaw.w3.org/css-validator/validator

https://beautifytools.com/javascript-validator.php

https://www.jslint.com/

https://stackoverflow.com/questions/47483685/jslint-was-unable-to-finish-16-4expected-an-identifier-and-instead-saw

https://wordpress.com/support/markdown-quick-reference/

https://www.w3schools.com/js/js_switch.asp

https://www.programiz.com/javascript/switch-statement

https://www.w3schools.com/js/js_htmldom_eventlistener.asp

https://www.w3schools.com/jsref/event_onload.asp

https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
















