function userLanguages(users){
    for (var i=0; i<users.length; i++){
        var lString ="";
        // case where there are no languages
        if (!users[i].languages){
            lString = " no languages!";
        }
        // case where there is only languages
        else if (users[i].languages.length == 1){
            lString = " " +users[i].languages[0]+ ".";
        }
        // case where there are multiple languages
        else {
            var length2 = users[i].languages.length;
            for (var j=0; j<length2-1; j++){
                lString += " " +users[i].languages[j]+ ",";
            }
            lString += " and " +users[i].languages[j]+ ".";
        }
        var string = users[i].fname+ " " +users[i].lname+ " knows";
        console.log(string + lString);
        
        var array =[];
        // case where there are no interests
        if (!users[i].interests){
            iString = " nothing!";
        }
        else {
            for (key in users[i].interests){
                for (z in users[i].interests[key]){
                    array.push(users[i].interests[key][z]);
                }
            }
            var length3 = array.length;
            var iString ="";
            // case where there is only one interest
            if (array.length == 1){
                iString = " " +array[0]+ ".";
            }
            // case where there are multiple interests
            else {
                for (var k=0; k<length3-1; k++){
                    iString += " " +array[k]+ ",";
                }
                iString += " and " +array[k]+ ".";
            }
        }
        console.log(users[i].fname+ " is also interested in" +iString);
        console.log("***********************************************************************************************");
    }
}

users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    },
    {
        fname: "No",
        lname: "Languages",
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    },
    {
        fname: "One",
        lname: "Language",
        languages: ["JavaScript"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    },
    {
        fname: "No",
        lname: "Interests",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    },
    {
        fname: "One",
        lname: "Interest",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar"],
        }
    },
]
  
userLanguages(users);