  function checkUser() {
      let name = document.getElementById("name").value;
      let age = document.getElementById("age").value;
      let points = document.getElementById("points").value;
      let result = document.getElementById("result");

      if (name === "" || age === "" || points === "") {
        result.textContent = "من فضلك املى كل البيانات";
        result.style.opacity = "1";
        result.style.color = "orange";
        return;
      }

    if (age < 18) {
  result.textContent = " مرفوض! العمر أقل من 18";
  result.style.color = "red";
} else {

  if (points < 150) {
    result.textContent = " مرفوض! نقاطك أقل من 150";
    result.style.color = "red";
  }

  else if (points >= 150 && points < 350) {
    result.textContent =   name + " انت في قائمة الانتظار";
    result.style.color = "orange";
  }

  else if (points >= 350 && points < 500) {
    result.textContent = " مرحبا " + name + "  تم قبولك";
    result.style.color = "#00ff88";
  }

  else {
    result.textContent = " مرحبا " + name + "  انت VIP";
    result.style.color = "#00d4ff";
  }
}

     result.style.opacity = "1";
    }