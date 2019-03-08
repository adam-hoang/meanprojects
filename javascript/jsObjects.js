function printAll(students){
    for (student in students){
        console.log("Name: " +students[student].name+ ", Cohort: " +students[student].cohort);
    }
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
printAll(students);
console.log("*******************************")

function nameSize(users){
    for (position in users){
        console.log(position.toUpperCase());
        var count = 1;
        for (worker in users[position]) {
        var nameLength = (users[position][worker].last_name.length + users[position][worker].first_name.length);
        console.log(count + ". " + users[position][worker].last_name + ", " + users[position][worker].first_name + " - " + nameLength);
        count++;
        }
    }
}


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};
nameSize(users);