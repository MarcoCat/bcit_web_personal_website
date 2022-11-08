const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies"}, 
    { code: "ACIT 1515", name: "Scripting for IT"}, 
    { code: "MATH 1310", name: "Technical Math for IT"}
    ];

do{
        user_input = prompt('Enter a 4 digit code: ')
    } while(isNaN(Number(user_input)) || user_input.length !== 4);