var projects = [
{
	title: "Maze Solver Visualization - BFS",
	info: "A visualization of an agent solving a generated maze using breadth-first search. The maze is generated using Wilson's algorithm. My implementation of both Wilson's and BFS algorithms are detailed in the README on GitHub.",
	image: "assets/maze-bfs.png",
	link: "http://emilyhsia.github.io/maze-bfs",
	github: "http://github.com/emilyhsia/maze-bfs"
},
{
	title: "Twitter Search",
	info: "Web app to search Twitter. Hooks into Twitter API and allows advanced search. Built following the <a href='http://www.nngroup.com/articles/ten-usability-heuristics/'>10 Usability Heuristics for User Interface Design.</a> Check out the README for my design choices.",
	image: "assets/twittersearch.png",
	link: "http://www.emilyhsia.com/projects/twittersearch",
	github: "http://github.com/emilyhsia/twitter-search"
},
{
	title: "Streamline",
	info: "Quick and easy note taker for coders. Type your notes into Streamline and each line will be formatted based on simple commands. Once you're finished, download your notes as a PDF documents.",
	image: "assets/streamline.png",
	link: "http://www.streamline.emilyhsia.com/",
	github: "http://github.com/emilyhsia/streamline"
},
{
	title: "Friendly Twitter Bot",
	info: "A Twitter bot (<a href='http://www.twitter.com/BePhriendly' target='_blank'> @BePhriendly </a>) that searches for uses who tweet the hashtag #badday and replies with an encouraging tweet. Built using NodeJS",
	image: "assets/cheerup.png",
	github: "http://github.com/emilyhsia/happy-twitter-bot"
},
{
	title: "Matrix Multiplication Calculator",
	info: "A Java app to multiply two matrices. It calculates the product of two user inputed matrices of any size. The GUI and algorithms are both built and run in Java.",
	image: "assets/matrix.png",
	github: "http://github.com/emilyhsia/Linear-Algebra-Algorithms",
	style: "background-color:white"
},
{
	title: "TappBooks",
	info: "Mobile application built using PhoneGap platform that facilitates the selling of books on college campuses. Features Google book search, Facebook integration, and a barcode scanner.",
	image: "assets/tappbooks.png",
	appstore: "http://itunes.apple.com/us/app/tappbooks/id553589532?mt=8",
	style: "height:350px; width:350px; border:none;"
}];

var projectSection = document.getElementById('projects');

for (var i = 0; i < projects.length; i++) {
	var project = document.createElement('div');
	$(project).addClass('project');
	var container = document.createElement('div');
	// image & link
	$(container).addClass('container');
	var img = document.createElement('img');
	$(img).attr("src", projects[i].image);
	if (projects[i].style) {
		$(img).attr("style", projects[i].style);
	}
	var anchor = document.createElement('a');
	if (projects[i].link) {
		$(anchor).attr("href", projects[i].link);
	} else if (projects[i].github) {
		$(anchor).attr("href", projects[i].github);
	} else if (projects[i].appstore) {
		$(anchor).attr("href", projects[i].appstore);
	}
	$(anchor).attr("target", "_blank");
	$(anchor).append(img);
	$(container).append(anchor);
	// title
	var title = document.createElement('h2');
	$(title).text(projects[i].title);
	$(container).append(title);
	// info
	var info = document.createElement('p');
	$(info).html(projects[i].info);
	$(container).append(info);
	// buttons
	var buttons = document.createElement('div');
	$(buttons).addClass('buttons');
	if (projects[i].link) {
		var projectLink = document.createElement('a');
		$(projectLink).addClass('button');
		$(projectLink).attr("href", projects[i].link);
		$(projectLink).text("View Project");
		$(projectLink).attr("target", "_blank");
		$(buttons).append(projectLink);
	}
	if (projects[i].github) {
		var githubLink = document.createElement('a');
		$(githubLink).addClass('button');
		$(githubLink).attr("href", projects[i].github);
		$(githubLink).text("View GitHub");
		$(githubLink).attr("target", "_blank");
		$(buttons).append(githubLink);
	}
	if (projects[i].appstore) {
		var appstoreLink = document.createElement('a');
		$(appstoreLink).addClass('button');
		$(appstoreLink).attr("href", projects[i].appstore);
		$(appstoreLink).text("Get on AppStore");
		$(appstoreLink).attr("target", "_blank");
		$(buttons).append(appstoreLink);
	}
	$(container).append(buttons);
	$(project).append(container);
	if (i % 2 === 0) {
		$(project).addClass('right');
	} else {
		$(project).addClass('left');
	}
	$(projectSection).append(project);
}

// more projects
var moreProjects = document.createElement('div');
$(moreProjects).text("More projects coming soon");
$(moreProjects).addClass('gray');
$(moreProjects).addClass('center');
$(projectSection).append(moreProjects);