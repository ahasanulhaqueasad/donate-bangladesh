function getInputFielValuedById(id) {
  const inputValue = parseInt(document.getElementById(id).value);
  return inputValue;
}

function getTextFieldValueById(id) {
  const textFieldValue = parseInt(document.getElementById(id).innerText);
  return textFieldValue;
}

function showSectionById(id) {
  // hide secion
  document.getElementById("show-donation-section").classList.add("hidden");
  document.getElementById("show-donate-history").classList.add("hidden");
  document.getElementById("blog-section").classList.add("hidden");

  //   show section
  document.getElementById(id).classList.remove("hidden");
}
