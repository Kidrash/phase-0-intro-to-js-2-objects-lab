// Write your solution in this file!
const employee ={
  name:'Sam',
  streetAddress:'',
}  

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = Object.assign({...employee}, {[key]: '11 Broadway'});
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = Object.assign(employee, {[key]:'12 Broadway'})
    return newEmployee;
}
function deleteFromEmployeeByKey(employee, key){
   const newEmployee = Object.assign({}, key)
   delete newEmployee.key
   return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
   const newEmployee = Object.assign(employee, key)
   delete newEmployee.name
   return newEmployee;
}
  // let destructivelyDeleteFromEmployeeByKey(employee, key){
  // const newEmployee = ({...employee})
  // delete newEmployee.name();
//   return newEmployee;
// }