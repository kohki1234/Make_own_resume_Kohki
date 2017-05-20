/*
This is empty on purpose! Your code to build the resume will go here.
 */

//
formattedName = HTMLheaderName.replace("%data%","Kohki Sato")
formattedRole = HTMLheaderRole.replace("%data%","Customer service supervisor")

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//

var skills = ["awesomeness", "kindness"];
// $("#main").append(skills.length);

var bio = {
	"name" : "Kohki Sato",
	"Role" : "Customer Service supervisor",
	"contact_info" : {
		"email" : "E-mail : k48692003@yahoo.co.jp",
		"mobile" : "phone number : 090-2532-0132",
	},
	"picture_URL" : "images/me.jpg",
	"welcome_message" : "Hi, this is Kohki. welocome to my resume. \
	I would like to show my skills and background via this resume",
	"skills" : "Customer handling, problem solving skills, HTML/CSS"
};


var HTMLmobile = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var formatted_info = HTMLmobile.replace("%data%",bio.contact_info.mobile).replace("%contact%",bio.contact_info.email);
$("#header").append(formatted_info);


var HTMLbioPic = '<img src="%data%" class="biopic">';
var formattedPic = HTMLbioPic.replace("%data%",bio.picture_URL);
$("#header").append(formattedPic);

var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
var formatted_msg = HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
$("#header").append(formatted_msg);

var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
var formattedskills = HTMLskills.replace("%data%",bio.skills)
$("#header").append(formattedskills);



var work = {};
work.position = "Customer Service supervisor";
work_employer = "booking.com";
work.years_worked = "1 year and 6 month";
work.city = "Tokyo";

var HTMLworkTitle = ' - %data%</a>';
var formattedwork = HTMLworkTitle.replace("%data%",work["position"]);
$("#main").append(formattedwork);



/*var eduction = {};

eduction["name"] = "Kokugakuin University";
eduction["years_attended"] = "4 years";
eduction["city"] = "Shibuya";

var HTMLschoolName = '<a href="#">%data%';
var formattedschoolname = HTMLschoolName.replace("%data%",eduction.name);
$("#main").append(formattedschoolname);
*/

var education = {
	"schools" :[
		{
		"school" : "Kokugakuin Unviersity",
		"school's citie" : "Shibuya",
		"major" : "Linguistic",
		"minor" : "Literature",
		"graduation year" : 2009
		}
	],

	"Online Course" : [
		{
		"title" : "Intro to programming nanodegree",
		"school" : "Udaicty",
		"Dates" : 2017
		}
	]
}