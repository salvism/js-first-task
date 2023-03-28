function Check() {
  var groupNo = document.getElementById("group_no").value;
  var firstNum = groupNo.slice(-3, -2);
  if (firstNum == 1) {
    document.getElementById("yellow").innerHTML = `Group No: ${groupNo}`;
  }
  else if (firstNum == 2) {
    document.getElementById("red").innerHTML = `Group No: ${groupNo}`;
  }
  else if (firstNum == 3) {
    document.getElementById("black").innerHTML = `Group No: ${groupNo}`;
  }
  else{
    alert('Group No is not valid')
  }
}
