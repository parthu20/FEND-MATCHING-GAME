# Memory Game Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## The steps which are followed by me to complete the project

###observing the given Project

-   After reading instructions which are provided by **Udacity**,Then they provided github link to get rubric stucture about Project i.e.,Skeleton Project.
-   Download the Skeleton project from github throw the link.
-   files provided
          `app.css`-for style
           `geometry2.png`-for image
           `app.js`-JavaScript file
           `index.html`-main root file
           `readme.md`-for instructions
## coding part modification
1. For reloading purpose i added getback function to reload the game,using `document.location.reload()`
2. I got the cards in JavaScript in html collections and we changed into arraylist using spread operator(i.e.,[..]),change moves into 0 because it's a starting position.
3. I shuffled the cards using shuffle according to the card length
4. When ever we click on the `card,open` and `show` the card.
5. After that ,set the timer to the game.
6. Timer will starts when we start the game by clicking cards.
7. When we clicked on card-->open and show the card -->next card clicked -->when the card is matched then show otherwise close.
8. The card storage in array should be only 2 entries,because of comparing purpose.
9. When ever all card matched timer will stop automatically.
10. star count is defined by `starlevel()` function.
11. When ever we matched All cards we have to get an alert,like gameover,goodjob,completed successfully.
12. In that sweetalert we will show completed time and restart button.
13. When ever we press restart button,it will be started again.
14. To Style the game we used "css" styleSheet[`app.css`].


### OUTPUT

+ At the end of the game, we will get a alert with score earned, time taken to complete.
