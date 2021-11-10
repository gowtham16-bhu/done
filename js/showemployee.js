let employees = [];
let nameElem = document.getElementById("name");
let numberElem = document.getElementById("number");
let emailElem = document.getElementById("email");
let addressElem = document.getElementById("address");
let cityElem = document.getElementById("city");
let roleElem = document.getElementById("role");
let employeeIndex = null;

function init(){
        let data = localStorage.getItem('employees')
        employees = data ? JSON.parse(data): [];
        if(employees.length > 0) showTable();
    }
    
    
init();

function showTable() {
    employees.forEach((employee, index) => {
      var table = document.getElementsByTagName("tbody")[0];
      var newRow = table.insertRow(table.length);
      newRow.setAttribute("index", index);
      var cell1 = newRow.insertCell(0);
      cell1.innerHTML = `<input type="checkbox" onclick="check(${index})"  name="ChildCheckBox" id="ChildCheckBox"  value="${index}"/>`;
       var cell2 = newRow.insertCell(1);
      cell2.innerHTML = employee.name;
      var cell3 = newRow.insertCell(2);
      cell3.innerHTML = employee.number;
      var cell4 = newRow.insertCell(3);
      cell4.innerHTML = employee.email;
      var cell5 = newRow.insertCell(4);
      cell5.innerHTML = employee.address;
      var cell6 = newRow.insertCell(5);
      cell6.innerHTML = employee.city;
      var cell7 = newRow.insertCell(6);
      cell7.innerHTML = employee.role;
      
      var cell8 = newRow.insertCell(7);
      cell8.innerHTML =  `<input type="submit" value="view" style="background-color:#8aacc8"; onclick='show(${index})'>
      <input type="submit" value="Edit" style="background-color:#8aacc8" onclick='editEmployee(${index})'>`
      // <input type="submit" value="DELETE"  id="delete" style="background-color:#8aacc8" onclick=onDelete(this)> `;
      // var cell6 = newRow.insertCell(5);
      // cell6.innerHTML = index;
      var cell9 = newRow.insertCell(8);
      cell9.innerHTML = index;
      cell9.style.display ="none";
    });
}

function editEmployee(index){
  location.href = "updateemployee.html?idx="+index;
}

function show(index) {
  location.href="viewemployee.html?idx="+index;
}

function check(index){
  // var checkBox = document.getElementById("ChildCheckBox");
  // console.log(checkBox.checked);
  
  // if(checkBox.checked == true)
  // var x = document.getElementById("ChildCheckBox").getAttribute("value");

  // var att =[]
  // att.push(x)
  // console.log(att);
  
  // var button = document.getElementById("delete");
  // if(checkBox == true){
  //   button.disabled = true;
  // }else{
  //   button.disabled= false;
  // var arr =[];
  // let newarray;
  // newarray = arr.concat(index)
  // newarray= [...arr,index]
  // var daya ={
  //   id:index
  // }
  // arr.push(daya)
  // localStorage.setItem('arr', JSON.stringify(arr))
  // console.log(newarray)
//   var checkboxes = $('input:checkbox');



  
}



function deleteTableRow(){
  // var source = [1,2,3,4,5,6,7,8,9]
  // var selectedItemIdx = [2,4] // index 2 is 3 and 4 is 5
  // source = source.filter((item, index) => !selectedItemIdx.includes(index)) // this will remove the selected index from source arrays
  // var source = [employees.index]
  // var selectedItemIdx = [source,1];
  // source = source.filter((item,source) => !selectedItemIdx.includes(source));
  // localStorage.setItem('source',JSON.stringify(source))
  // var selectedRow = [index]
  // const table = document.getElementById("formList");
  // for (const [index,row] of [...table.rows].entries()){
  // if (row.querySelector('input:checked')){
 
  // table.deleteRow(index);
  // employees.splice(employeeIndex,1);
  // localStorage.setItem('employees',JSON.stringify(employees))
// }
  // }
//   var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
//   console.log(markedCheckbox)
// for (var checkbox of markedCheckbox) {
//   document.body.append(checkbox.value + ' ');
// console.log(markedCheckbox.values)
// }
var grid = document.getElementById("formList");
 
        
        var checkBoxes = grid.getElementsByTagName("INPUT");
        
 
       
        var arr =[]
        for (var i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked) {
                var row = checkBoxes[i].parentNode.parentNode;
                arr.push(row.cells[8].innerHTML)
            }
        }
    let datas= localStorage.getItem('employees');
    const employees = JSON.parse(datas);
    for (var i=0;i<=arr.length;i++){
      employees.splice(i,1)
    }
  
    localStorage.setItem('employees',JSON.stringify(employees))
    location.href = "showemployee.html";
        
       
        
}

function checkAll(myCheckBox) {
  var checkboxes = document.querySelectorAll("input[type='checkbox']");
  console.log("checked");
  if (myCheckBox.checked == true) {
    checkboxes.forEach(function (checkboxes) {
      checkboxes.checked = true;
      console.log("iam 1")
    });
  } else {
    checkboxes.forEach(function (checkboxes) {
      checkboxes.checked = false;
    });
  }
}

function checkone(childCheckBox){
  var ddl = document.getElementById("list");
  ddl.disabled = childCheckBox ? false : true;
  if(!ddl.disabled){
    ddl.focus();
  }
}
















// function checkone(myCheckBox){
//   var checkboxes = document.querySelectorAll("input[type='checkbox']");
//   let listElem = document.getElementById("list");
//   console.log('checked');
//   if(myCheckBox ==true){
//     checkboxes.forEach(function(){
//       listElem.disabled = false;
//     });
//   }else{
//     checkboxes.forEach(function(){
//       listElem.disabled = true;
//     });

//   } 
//   }

// function checkone() {
//   const checkboxes = document.getElementById("childCheckBox");
//   const listElem = document.getElementById("list");
//   if (checkboxes == true) {
//     listElem.disabled = false;
//   } else {
//     listElem.disabled = true;
//   }
// }

// const check = document.getElementById("checkall");
// const list = document.getElementById("list");
// // const submit = document.getElementById("submit");

// function checkDisabled() {
 
//   check.disabled = check.checked && (list.value.length === 0);
//   list.style.visibility = check.checked ? 'visible' : 'hidden';
// }

// [check, list].forEach((x) => x.addEventListener('change', function(){
//   checkDisabled()
// }))

// checkDisabled();
