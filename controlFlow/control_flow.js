let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);


let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);


let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);


// Practice Task

let person = 'Enrolled Member';
let access;

if (person === 'Employee') {
    access = 'Dietary Services'
} else if (person === "Enrolled Member") {
    access = 'Dietary Services and one-on-one interaction with a dietician'
} else if (person === "Subscriber") {
    access = "partial access to Dietary Services"
} else if (person === 'Non-Subscriber') {
    access = 'Please enroll or subscribe for facility access'
}

console.log(`You are a ${person} and have access to ${access}.`)