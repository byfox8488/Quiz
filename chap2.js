function voir() {
  document.getElementById("pair").style.filter = "blur(0)";
  document.getElementById("pair").style.opacity = 1;
}
function verifie() {
  p1 = document.getElementById("check1").innerHTML;
  r1 = document.getElementById("r1").checked;
  r2 = document.getElementById("r2").checked;
  r3 = document.getElementById("r3").checked;
  r4 = document.getElementById("r4").checked;
  r5 = document.getElementById("r5").checked;
  r6 = document.getElementById("r6").checked;
  r7 = document.getElementById("r7").checked;
  r8 = document.getElementById("r8").checked;
  r9 = document.getElementById("r9").checked;
  r10 = document.getElementById("r10").checked;
  r11 = document.getElementById("r11").checked;
  r12 = document.getElementById("r12").checked;
  r13 = document.getElementById("r13").checked;
  r14 = document.getElementById("r14").checked;
  r15 = document.getElementById("r15").checked;
  s = 0;
  if (!r2) {
    document.getElementById("Faux1").style.color = "red";
    document.getElementById("Faux1").innerHTML = "Faux !";
  } else {
    document.getElementById("Faux1").style.color = "green";
    document.getElementById("Faux1").innerHTML = "Correct !";
    document.getElementById("check1").innerHTML = "";
    s = s + 1;
  }
  if (!r6) {
    document.getElementById("Faux2").style.color = "red";
    document.getElementById("Faux2").innerHTML = "Faux !";
  } else {
    document.getElementById("Faux2").style.color = "green";
    document.getElementById("Faux2").innerHTML = "Correct !";
    document.getElementById("check2").innerHTML = "";
    s = s + 1;
  }
  if (!r9) {
    document.getElementById("Faux3").style.color = "red";
    document.getElementById("Faux3").innerHTML = "Faux !";
  } else {
    document.getElementById("Faux3").style.color = "green";
    document.getElementById("Faux3").innerHTML = "Correct !";
    document.getElementById("check3").innerHTML = "";
    s = s + 1;
  }
  if (!r10) {
    document.getElementById("Faux4").style.color = "red";
    document.getElementById("Faux4").innerHTML = "Faux !";
  } else {
    document.getElementById("Faux4").style.color = "green";
    document.getElementById("Faux4").innerHTML = "Correct !";
    document.getElementById("check4").innerHTML = "";
    s = s + 1;
  }
  if (!r15) {
    document.getElementById("Faux5").style.color = "red";
    document.getElementById("Faux5").innerHTML = "Faux !";
  } else {
    document.getElementById("Faux5").style.color = "green";
    document.getElementById("Faux5").innerHTML = "Correct !";
    document.getElementById("check5").innerHTML = "";
    s = s + 1;
  }
  if (s >= 3) {
    document.getElementById("fin1").innerHTML = "";
    document.getElementById("reset").style.display = "none";
    document.getElementById("sumb2").style.display = "inline-block";
    document.getElementById("foot").style.top = "663%";
  } else {
    document.getElementById("fin1").innerHTML =
      "Tu dois avoir au moin 3 reponse correct pour acceder au chapitre suivant !";
    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("foot").style.top = "663%";
  }
}
function reset() {
  document.getElementById("Faux1").innerHTML = "";
  document.getElementById("Faux2").innerHTML = "";
  document.getElementById("Faux3").innerHTML = "";
  document.getElementById("Faux4").innerHTML = "";
  document.getElementById("Faux5").innerHTML = "";
  document.getElementById("check1").innerHTML = "";
  document.getElementById("check2").innerHTML = "";
  document.getElementById("check3").innerHTML = "";
  document.getElementById("check4").innerHTML = "";
  document.getElementById("check5").innerHTML = "";
  document.getElementById("r1").checked = false;
  document.getElementById("r2").checked = false;
  document.getElementById("r3").checked = false;
  document.getElementById("r4").checked = false;
  document.getElementById("r5").checked = false;
  document.getElementById("r6").checked = false;
  document.getElementById("r7").checked = false;
  document.getElementById("r8").checked = false;
  document.getElementById("r9").checked = false;
  document.getElementById("r10").checked = false;
  document.getElementById("r11").checked = false;
  document.getElementById("r12").checked = false;
  document.getElementById("r13").checked = false;
  document.getElementById("r14").checked = false;
  document.getElementById("r15").checked = false;
  document.getElementById("fin1").innerHTML = "";
  document.getElementById("reset").style.display = "none";
  document.getElementById("foot").style.top = "604%";
}
