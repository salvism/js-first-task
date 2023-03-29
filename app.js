function Check() {
  var groupNo = document.getElementById("group_no").value;
  var firstNum = groupNo.slice(-3, -2);
  if (firstNum == 1) {
    let h_3 = document.getElementById("text");
    h_3.style.color = "yellow";
    document.getElementById("text").innerHTML = `Group No: ${groupNo}`;
  } else if (firstNum == 2) {
    let h_3 = document.getElementById("text");
    h_3.style.color = "red";
    document.getElementById("text").innerHTML = `Group No: ${groupNo}`;
  } else if (firstNum == 3) {
    let h_3 = document.getElementById("text");
    h_3.style.color = "black";
    document.getElementById("text").innerHTML = `Group No: ${groupNo}`;
  } else {
    alert("Group No is not valid");
  }
}

// TASK 1
function myFunction() {
  let text;
  if (confirm("Press a button!") == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  document.getElementById("demo").innerHTML = text;
}

// TASK 2
function myFunction() {
  let age = prompt("Yash", "18");
  if (age < 18) {
    document.getElementById("demo").innerHTML = "Yashiniz 18-den kicikdir";
  }
}
