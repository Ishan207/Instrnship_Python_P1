const employee={
    emp_name : "ishan",
    emp_id : 123,
};

const emp_name = employee.emp_name;
const emp_id = employee.emp_id;

console.log(emp_name,emp_id);

// other way to destructure
/*
const employee={
    emp_name : "ishan",
    emp_id : 123,
};
const{emp_name,emp_id}= employee;

console.log(emp_name,emp_id);
*/
const band = {
    bandName : "led Zepplin",
    famousSong : "Stairway to heaven",
    year : 1993,
    othersong: "abcdef",
};

// First we need to decide we want const let or var
// we want two variables
// const{bandName,famousSong}= band;

 let{bandName : var1,famousSong :var2}= band;

console.log(var1,var2);

*/


//  ############ ###########  ############# #############

const band = {
    bandName : "led Zepplin",
    famousSong : "Stairway to heaven",
    year : 1993,
    othersong: "abcdef",
};

// First we need to decide we want const let or var
// we want two variables
// const{bandName,famousSong}= band;

 let{bandName ,famousSong ,...restprops}= band;

 console.log(bandName,famousSong,restprops);

// Adding remaining key value pairs as object in variable.
