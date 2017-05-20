/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs" : [
	{
	"employer" : "3e Inc.",
	"title" : "Server Support Engineer",
	"location" : "Japan Shibuya",
	"dates" : "May 2014 – Aug 2014  4 monhts",
	"description" : "Bilingual network engineer, \
	Trouble shooting on networking issue,\
	Sometimes Translate work manuals from English to Japanese,\
	Communicating with Singapore regarding networking problem"
	},

	{
	"employer" : "Nihon Aspect Core",
	"title" : "Administrative assistent",
	"location" : "Japan Roppongi",
	"dates" : "Sep 2014 – Nov 2015, 1 year 3 months",
	"description" : "Working as contingent worker in Goldman Sachs Japans Holdings,\
	Administrative Assistant under Accounting Service Division,\
	Classifying and Databasing invoice and other documents,\
	Ordering office supplies,\
	Communicating all over the world regarding invoices in English,\
	Sometimes translate work manuals from English to Japanese and vice versa."
	},

	{
	"employer" : "Booking.com",
	"location" : "Japan Osaki",
	"title" : "Customer Service Senior Executive",
	"dates" : "Dec 2015 – Present , Employment Duration1 year 6 month",
	"description" : "Handling guest issues and hotel issues.\
	Liaison between hotel and customer.\
	Managing special request and other calls , trouble shooting with hotel related issues.\
	Managing payout for bookings. Understanding hotel system called extra net." 
	}
	]
}

var projects = {
	"projects" : [
	{
	"title" : "code your own quiz",
	"dates" : "Mar 2017",
	"description" : "Made my own quiz by using python\
	the python reacts depending on the users answer.\
	If it is correct, it asks users to go next step, otherwise\
	users are asked to do the quiz once again.\
	I cared to store the inforation with simple and easy way, and I\
	tried to repeate necessary action with fewest lines of code.",
	"images"　: "images/code_own_quiz.png"
	},

	{
	"title" : "create my movie website",
	"dates" : "Apr 2017",
	"description" : "The website shows my favorite movies.\
	It is consisted by my favorite 6 movies.\
	Once users click the image photo, it plays trailer.\
	The website was made with HTML and Python.",
	"images"　: "images/make_own_website.png"
	}
	]
}

var bio = {
	"name" : "Kohki Sato",
	"Role" : "Customer Service supervisor",
	"location" : "Japan okyo",
	"contact_info" : {
		"email" : "E-mail : k48692003@yahoo.co.jp",
		"mobile" : "phone number : 090-2532-0132"
	},
	"biopic" : "images/me.jpg",
	"welcome_message" : "Hi, this is Kohki. welocome to my resume. I would like to show my skills and background via this resume",
	"skills" : [
	"Customer handling, problem solving skills, HTML/CSS"
	]
}


var education = {
	"schools" :[
		{
		"school" : "Kokugakuin Unviersity",
		"location" : "Shibuya",
		"major" : "Linguistic",
		"minor" : "Literature",
		"graduation year" : 2009
		}
	],

	"Online Course" : [
		{
		"title" : "Intro to programming nanodegree",
		"location" : "United States",
		"school" : "Udaicty",
		"Dates" : 2017,
		"url" : ""
		}
	]
}


var HTMLheaderName = '<h1 id="name">%data%</h1>';
formattedName = HTMLheaderName.replace("%data%", bio.name)
$("#header").append(formattedName)


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill =　HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);	
} 


function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedHTMLworkEmployer =　HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedHTMLworkEmployer + formattedTitle;

		$(".work-entry:last").append(formattedHTMLworkEmployer);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		var formattedDateDescription = formattedDate + formattedDescription;

		$(".work-entry:last").append(formattedDateDescription);

	   }
}

displayWork();


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y)
});


$("#main").append(internationalizeButton);

function inName(name){
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

inName(bio.name);

projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates =  HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription)

		var formattedProjectPic = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectPic)
	}
}

projects.display();

$("#mapDiv").append(googleMap);
