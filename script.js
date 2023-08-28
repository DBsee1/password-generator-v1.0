//  const generatePassword = document.getElementById("generatePassword");
 const copyBtn = document.getElementById("copy-btn");


let generatedPasswordDisplay = document.getElementById("generatedPasswordDisplay");



// generatedPasswordDisplay.innerHTML = randomPasswordGenerator;

function generatePassword(){
  const randomPasswordGenerator = Math.random().toString(36).slice(2, 12);
  generatedPasswordDisplay.innerText = randomPasswordGenerator;
}

console.log(generatedPasswordDisplay.innerText);



// console.log(generatedPasswordDisplay.value);
copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(generatedPasswordDisplay.innerText);
  alert("Copied!");
})

// future code

paste.addEventListener("click", async () =>{
  /* creating a const variable */
  const READ = await navigator.clipboard.readText();
  /* a  variable to paste your copied password!*/
  BIN.value = READ;

})
