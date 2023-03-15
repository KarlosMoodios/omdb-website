# omdb-website

This website was created by following a tutorial provided by GeekProbin on YouTube.com ( https://www.youtube.com/watch?v=1VjdxCTBfUI )

I have made additional changes to the html, css and script files to try and make it my own a little bit.

The changes are:
HTML
- Added a logo after my title using the font awesome library of logos.
- I have added a select with 2 options, full and short; each relating to the plot length of the film to be searched for. The id for this has been set so as to be able to access it thought the script.js file.

CSS
- I have edited the css file quite a bit in order to add my own touches to the page.
this includes:
- adding more comments so I can refer back to them as I edited it,
- changing the colour scheme while adding two additional colours, 
- adding an a:hover although i didnt end up using it,
- setting some css for the logo p span i; white color, position absolute with a bit of padding to the left,
- editing the search container:
    - changed the background colour to blue,
    - increased the height,
- editing the search bar (search-element form-control):
    - added a solid border of 4px in orange,
    - made it 200px wider,
    - changed text color to a darker colour,
    - changed to font size to 1.4rem,
- added plot-select formatting for the select option,
    - border of 4px solid in orange,
    - font size 1.4rem,
    - 1rem of padding,
    - border radius of 10px,
- editing the .search-list items:
    - added some padding on the top: 2px,
    - search-list-item:
        - added first and last child rules to add a border to the top and a radius to the top and bottom left and right corners of the search list,
        - added borders to the search list on the left right and bottom,
    - changed the search-list-item:hover background colour to a light blue to better match the colour theme,
    - changed the width of the thumbnail to 80px,
    - increased the width of the scrollbar to 10px,
    - changed the colour of the scroll bar to white,
- for the result container:
    - changed the max width of the poster to 400px to accomodate for the full plot on screens that are larger than 800px,
    - added a border to the movie poster 4px solid in orange,
    - changed the background colour of the rating to orange,
    - changed the background colour of the genre to a medium blue,
    - changed the colour of the .movie-info .language to orange,
    - changed the colour of the .movie .awards i class to gold and added some css to display it centrally, inline with the text,
- @media 450px:
    - changed the width of the search bar to 80%,
    - added CSS for the plot select,
    - changed the width of the search list to 80%,

For each device, all of the changes made have kept everything that was formatted correctly on the screen and has improved some of the ones where it wasn't formatted right.
The ones that are formatted correctly are:
 - iPhone SE
 - iPhone XR
 - iPhone 12 PRO
 - Pixel 5
 - Samsung S20 Ultra
 - Samsung Galaxy A51/71
 - Nest Hub
 - Nest Hub Max
 - Galaxy Fold
The incorrect ones are:
 - iPad Air
 - iPad Mini
 - Surface Pro 7
 - Surface Duo

SCRIPT.JS
 - Added a const apiKey for the API key
 - in loadMovies:
    - concatenated the url with the apiKey variable,
 - in loadMoviesDeatils: 
    - created a plot variable,
    - created a URL variable,
    - created an if statement to check the value of plot and amend the URL accordingly
 - tried to access the trailer on the rocky balboa 2006 imdb page. found some embed code (https://www.imdb.com/video/imdb/vi1462938649/imdb/embed?autoplay=false&width=640) for another video. changed to vi3013870873 which opened the rocky balboa trailer. searched for rocky balboa on my website, IMDB refused to connect.
