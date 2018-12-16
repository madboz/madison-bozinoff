const container = document.getElementById("container");

const IO1 = {
	
	icons: ["IO-TW-01.png", "IO-TW-10.png", "IO-TW-05-02.png", "IO-PP-01.png", "IO-PP-02.png", "IO-PP-03.png", "IO-PP-04.png", "IO-PP-05.png", "IO-PP-06.png", "IO-PP-07.png", "IO-PP-08.png", "IO-PP-09.png", "IO-PP-10.png"],
	heading: "Thesis 1",
	date: "2017",
	descrip: "Thesis 1 explores the possibilities of instruction-based methods in both image-making and typography. Extending the concept of rule-based art to the program, Thesis 1 questions whether a set of instructions executed in code can produce unexpected and poetic results. </p><p>Nine twitter bots create and post images that respond to their individualized sets of instructions. These instructions define a range of compositions consisting of circles on a white square canvas. Similarly, a tenth twitter bot generates single-line letterforms on a white square canvas. The outputs from the twitter bots are then sequentially placed into a grid to be drawn with a pen plotter as physical documentation. <a href='https://twitter.com/dewy_jojoba/lists/thesis/members' target='blank'>See twitter bots</a> <a href='PP/index.html' target='blank'>See pen plotter lines</a>"

}

const IO2 = {
	
	icons: ["IO-TW-10-02.png", "IO-WB-A.gif", "IO-WB-B.gif", "IO-WB-C.gif", "IO-WB-04.png", "IO-WB-05.png", "IO-WB-06.png", "IO-WB-01.gif", "IO-WB-02.gif", "IO-WB-03.gif", "IO-WB-IRL.gif"],
	heading: "Thesis 2",
	date: "2018",
	descrip: "Thesis 2 further explores instruction-based typography with generative letterforms. Tweets are pulled from twitter and typeset with evolving letterforms in three browser-based animations. Each animation in the sequence introduces another random element into the program. See animations: <a href='IO/random-letterform/index.html' target='blank'>1</a> <a href='IO/random-stroke/index.html' target='blank'>2</a> <a href='IO/random-stroke-indv/index.html' target='blank'>3</a>"

}

const LFL = {

	icons: ["LFL-Location-01.png", "LFL-Location-02.png",  "LFL-01.png", "LFL-02.png", "LFL-03.png", "LFL-04.png", "LFL-05.png", "LFL-Process-03.png", "LFL-AppStore-01.png", "LFL-AppStore-02.png"],
	heading: "Little Free Library",
	date: "2017",
	descrip: "An app for collecting quotes from books found in the Little Free Library of the Green Oasis community garden. The app creates a collectively curated selection of quotes from books that may or may not still be in the library.</p><p>When reading a book in the physical space, shadows are cast on the book from the readers hands and body, over the course of the day. The app incorporates this phenomenon as a visual layer linking the experience of the app to the experience of the Little Free Library. Depending on the time of day, when a user adds a quote, the quote is &ldquo;stamped&rdquo; with a unique shadow image from the Green Oasis Garden. <a href='https://invis.io/7YNROO06FJB' target='blank'>Prototype</a> <a href='https://www.usertesting.com/v/d0cac6ba-1700-4a52-aaf4-1fe37ea70228#!/notes' target='blank'>User Test</a> <a href='https://s3.amazonaws.com/arena-attachments/1943214/5cce3d210e2f03aada91b956c1aa743e.pdf?1521917137' target='blank'>Presentation</a>"
}

const Mat = {

	icons: ["Mat-01.png", "Mat-03.png", "Mat-11.png", "Mat-04.png", "Mat-05.png", "Mat-06.png", "Mat-07.png", "Mat-08.png", "Mat-10.png"],
	heading: "Matter",
	date: "2018",
	descrip: "Matter is an online publication and research project centered on the themes of media and memory. The site acts as a catalogue of ideas that explore these themes; such as archiving, collective memory, and memory in the digital age. Each article on the site has a programmed expiration date and fades away until it is erased, reflecting the non-permanence of human memory. <a href='https://madboz.github.io/reading-without-pages/matter' target='blank'>Matter</a>"

}

const RGB = {

	icons: ["RGB-01-01.png", "RGB-01-02.png", "RGB-01-03.png", "RGB-02.png", "RGB-06-01.png", "RGB-06-02.png", "RGB-06-03.png"],
	heading: "RGB Location",
	date: "2016",
	descrip: "RGB Location translates a users location into a colour by converting the longitude, latitude, and altitude into red, green, and blue values. All locations viewed are archived on the site. Locations shown are: New York, Las Vegas, and Moscow. <a href='https://rgb-location.tk' target='blank'>rgb-location.tk</a>"

}

const RWP = {

	icons: ["RWP-01-01.png", "RWP-01-02.png", "RWP-01-03.png", "RWP-01-04.png" , "RWP-02-01.png", "RWP-02-02.png", "RWP-02-03.png"],
	heading: "&ldquo;Reading without Pages&rdquo; Microsites",
	date: "2018",
	descrip: "Two mircosites made in Reading without Pages, a class centered on the design of publications online. Students spent one week preparing a coding demo and one week redesigning an article. </br> 1. An instructional site for CSS Grids that is structured within a series of nested grids. Users can toggle the visibility of black gridlines that describe the architecture of the page. <a href='https://madboz.github.io/reading-without-pages/demo' target='blank'>CSS Grids Demo</a> </br> 2. Alternate reading experience for \"Something is Wrong on the Internet\" by James Bridle cuts and remixes the article in a similar way to the videos he writes about. <a href='https://madboz.github.io/reading-without-pages/piece' target='blank'>Something is Wrong on the Internet</a>"

}

const SB = {

	icons: ["SB-01.png", "SB-02.png", "SB-03.png", "SB-04.png", "SB-05.png", "SB-06.png", "SB-07.png", "SB-08.png", "SB-09.png", "SB-10.png", "SB-11.png", "SB-12.png"],
	heading: "Sidebar Journal",
	date: "2017",
	descrip: "Sidebar is a publishing platform about internet culture. The journal features philosophical writings, personal stories, poetry, and fine art focused on the internet. Related articles are featured at the end of each article, encouraging the reader to experience the book in a non-linear fashion similar to the way we navigate through hypertext. The reading experience emulates the subject of the journal."

}

const OTH = {

	icons: ["OTH-01.gif", "OTH-02.png", "OTH-04.gif"],
	heading: "Computational Form",
	date: "2018",
	descrip: "1. Feather generated with Turtle Graphics </br> 2. Markov Chain Webding Landscapes </br> 3. Perlin Noise typeface"

}

let arr = [IO1, LFL, Mat, RGB, RWP, IO2];
shuffle(arr);

for (let i = 0; i < arr.length; i++) {

	container.innerHTML += "</br><p>" + arr[i].heading + ", " + arr[i].date + "</br>" + arr[i].descrip + "</p>";

	for (let j = 0; j < arr[i].icons.length; j++) {

		container.innerHTML += '<img src="assets/' + arr[i].icons[j] + '">';

	}

}

function shuffle(arr) {

    let r, x, i;

    for (i = arr.length - 1; i > 0; i--) {

        r = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[r];
        arr[r] = x;

    }

    return arr;

}