courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies"}, 
    { code: "ACIT 1515", name: "Scripting for IT"}, 
    { code: "MATH 1310", name: "Technical Math for IT"}
    ];
    
let user_input = null;
let flag = false;

do{
    user_input = prompt('Enter a 4 digit code: ');
} while(isNaN(Number(user_input)) || user_input.length !== 4);

for(course of courseList){
    if (course['code'].includes(user_input)){
        console.log(`Yes I am taking the course: ${course['code']} – ${course['name']}`);
        flag = true;
    }
}

if (flag == false){
    courseList.push({code: user_input, name: null});
    console.log('Success');
}