function calculate(){
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const result = document.getElementById("result");

  document.getElementById("addbtn").addEventListener("click", function(){
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.innerHTML = "Result: " + (n1 + n2);
  });

  document.getElementById("subbtn").addEventListener("click", function(){
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.innerHTML = "Result: " + (n1 - n2);
  });

  document.getElementById("mulbtn").addEventListener("click", function(){
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.innerHTML = "Result: " + (n1 * n2);
  });

  document.getElementById("divbtn").addEventListener("click", function(){
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.innerHTML = "Result: " + (n1 / n2);
  });
}

window.onload = calculate;