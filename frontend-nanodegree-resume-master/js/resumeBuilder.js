/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs" : [
	{
	"employer" : "3e Inc.",
	"title" : "Server Support Engineer",
	"location" : "3-8 Shibuya-ku nanpeidaicho, Tokyo ",
	"dates" : "May 2014 – Aug 2014  4 monhts",
	"description" : "Bilingual network engineer" +
	"Trouble shooting on networking issue," +
	"Sometimes Translate work manuals from English to Japanese," +
	"Communicating with Singapore regarding networking problem"
	},

	{
	"employer" : "Nihon Aspect Core",
	"title" : "Administrative assistent",
	"location" : "4-1-3 Chiyoda Kudanshita Tokyo",
	"dates" : "Sep 2014 – Nov 2015, 1 year 3 months",
	"description" : "Working as contingent worker in Goldman Sachs Japans Holdings" +
	"Administrative Assistant under Accounting Service Division," +
	"Classifying and Databasing invoice and other documents," +
	"Ordering office supplies" +
	"Communicating all over the world regarding invoices in English," +
	"Sometimes translate work manuals from English to Japanese and vice versa."
	},

	{
	"employer" : "Booking.com",
	"location" : "5-5-15 Kitashinagawa Shinagawa-ku, Toyko",
	"title" : "Customer Service Senior Executive",
	"dates" : "Dec 2015 – Present , Employment Duration1 year 6 month",
	"description" : "Handling guest issues and hotel issues." + 
	"Liaison between hotel and customer." +
	"Managing special request and other calls , trouble shooting with hotel related issues." +
	"Managing payout for bookings. Understanding hotel system called extra net." 
	}
	]
};

var projects = {
	"projects" : [
	{
	"title" : "code your own quiz",
	"dates" : "Mar 2017",
	"description" : "Made my own quiz by using python" +
	"the python reacts depending on the users answer." +
	"If it is correct, it asks users to go next step, otherwise" +
	"users are asked to do the quiz once again." +
	"I cared to store the inforation with simple and easy way, and I" +
	"tried to repeate necessary action with fewest lines of code.",
	"images"　: "images/code_own_quiz.png"
	},

	{
	"title" : "create my movie website",
	"dates" : "Apr 2017",
	"description" : "The website shows my favorite movies." +
	"It is consisted by my favorite 6 movies." +
	"Once users click the image photo, it plays trailer." +
	"The website was made with HTML and Python.",
	"images"　: "images/make_own_website.png"
	}
	]
};

var bio = {
	"name" : "Kohki Sato",
	"role" : "Customer Service supervisor",
	"contacts" : {
		"email" : "k48692003@yahoo.co.jp",
		"mobile" : "090-2532-0132",
		"location" : "4-10-28 Shibuya Tokyo",
		"github" : "kohki1234"
	},
	"biopic" : "images/me.jpg",
	"welcomeMessage" : "Hi, this is Kohki. welocome to my resume. I would like to show my skills and background via this resume",
	"skills" : [
	"Customer handling, problem solving skills, HTML/CSS"
	]
};


var education = {
	"schools" :[
		{
		"name" : "Kokugakuin high school",
		"degree" : "N/A",
		"location" : "Jingu Mae 2-2-3; Shibuya, Tokyo 150-0001",
		"majors" : "General Course",
		"minors" : "N/A",
		"dates" : "2006 Apr-2009 Mar",
		"url": "http://www.kokugakuin.ed.jp/"
		},

		{
		"name" : "Kokugakuin Unviersity",
		"location" : "5-5-15 Kitashinagawa Shinagawa-ku, Toyko",
		"degree" : "BA/ Bacelor of arts",
		"majors" : "Linguistic",
		"minors" : "Literature",
		"dates" : "2009 Apr-2013 Mar",
		"url": "https://www.kokugakuin.ac.jp/"
		}
	],

	"onlineCourses" : [
		{
		"title" : "Intro to programming nanodegree",
		"location" : "5-5-15 Kitashinagawa Shinagawa-ku, Toyko",
		"school" : "Udaicty",
		"dates" : "2017",
		"url" : "https://www.udacity.com/"
		}
	]
};


var HTMLheaderName = '<h1 id="name">%data%</h1>';
formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


var HTMLheaderRole = '<span>%data%</span><hr>';
formattedHTMLheaderRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedHTMLheaderRole);




education.display = function(){
	education.schools.forEach(function(school){
		
		$("#education").append(HTMLschoolStart);


		var formattedHTMLschoolName = HTMLschoolName.replace("%data%",school.name);
		$(".education-entry:last").append(formattedHTMLschoolName);

		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
		$(".education-entry:last").append(formattedHTMLschoolDegree);

		var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%",school.dates);
		$(".education-entry:last").append(formattedHTMLschoolDates);

		var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%",school.location);
		$(".education-entry:last").append(formattedHTMLschoolLocation);
	});


	education.onlineCourses.forEach(function(course){

		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%",course.title);
		$(".education-entry:last").append(formattedHTMLonlineTitle);


		var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%",course.school);
		$(".education-entry:last").append(formattedHTMLonlineSchool);

		var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%",course.dates);
		$(".education-entry:last").append(formattedHTMLonlineDates);

		//var formattedHTMLonlineURL =  HTMLonlineURL.replace("%data%",course.url);
		//$(".education-entry:last").append(formattedHTMLonlineURL);

	});
};


education.display();


bio.display = function(){

		var formattedHTMLbioPic = HTMLbioPic.replace("%data%",bio.biopic);
		$("#header").append(formattedHTMLbioPic);

		var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedHTMLwelcomeMsg);

		var formattedHTMLmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#header").append(formattedHTMLmobile);

		var formattedHTMLemail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#header").append(formattedHTMLemail);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill =　HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);	
		} 
};

bio.display();


work.display = function(){
work.jobs.forEach(function(job){
		
		$("#workExperience").append(HTMLworkStart);

			var formattedHTMLworkEmployer =　HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedEmployerTitle = formattedHTMLworkEmployer + formattedTitle;

			$(".work-entry:last").append(formattedHTMLworkEmployer);

			var formattedDate = HTMLworkDates.replace("%data%", job.dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
			var formattedDateDescription = formattedDate + formattedDescription;

			$(".work-entry:last").append(formattedDateDescription);
		   }) ;
};


work.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
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


projects.display = function(){
projects.projects.forEach(function(project){
	$("#projects").append(HTMLprojectStart);
		
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDates =  HTMLprojectDates.replace("%data%", project.dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
	$(".project-entry:last").append(formattedProjectDescription);

	var formattedProjectPic = HTMLprojectImage.replace("%data%", project.images);
	$(".project-entry:last").append(formattedProjectPic);
	});
};

projects.display();

$("#mapDiv").append(googleMap);


