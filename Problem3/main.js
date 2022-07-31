function generateCard() {
  console.log("debug");
  const Name = document.getElementById("inname").value;
  const Birth = document.getElementById("inBirth").value;
  const Field = document.getElementById("inField").value;
  const Year = document.getElementById("inYear").value;

  document.getElementById("name").textContent = Name;
  document.getElementById("birth").textContent = Birth;
  document.getElementById("field").textContent = Field;
  document.getElementById("year").textContent = Year;

}


function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0])
}

loadImage();