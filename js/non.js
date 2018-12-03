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
          "введите правильную эл. почту(например имя@дамен.дамен).");
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