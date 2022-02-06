const fs = require("fs");

// STEP 1: Reading JSON file
const users = require("./userlist");

// Defining new user
let user = {
	name: "Bartholomew",
	email: "bruh@ucsb.edu",
	classes: ["CHEM1B", "PHYS1A", "MATH4A", "PHIL3"]
};

// STEP 2: Adding new data to users object
users.push(user);

// STEP 3: Writing to a file
fs.writeFile("./sbhacks8/js/userlist.json", JSON.stringify(users, null, 2), err => {
	
	// Checking for errors
	if (err) throw err;

	console.log("Done writing"); // Success
});

