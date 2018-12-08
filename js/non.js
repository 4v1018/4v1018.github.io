function nonEmpty(inputField, helpText) {
        if (inputField.value.length == 0) {
          if (helpText != null)
            helpText.innerHTML = "Вы не заполнилили это поле";
          return false;
        }
        else {
  
          if (helpText != null)
            helpText.innerHTML = "";
          return true;
        }
      }
function nonEmail(inputField, helpText) {
        if (!nonEmpty(inputField, helpText))
          return false;
        return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/,
          inputField.value, helpText,
          "введите правильную эл. почту(например, имя@домен.домен).");
      }
 function validateRegEx(regex, input, helpText, helpMessage) {
        if (!regex.test(input)) {
          if (helpText != null)
            helpText.innerHTML = helpMessage;
          return false;
        }
        else {
          if (helpText != null)
            helpText.innerHTML = "";
          return true;
        }
}
function stopSumbit(form) {
  if (nonEmpty(form["name"], form["name_help"])
      && nonEmail(form['e-mail'], form['emhelp'])
      && nonEmpty(form["name2"], form["name2_help"])
      && nonEmpty(form["help3"], form["help3_h"])) {
    form.submit();
  }
  else {
    alert("Вы заполнили форму неправильно")
  }
}