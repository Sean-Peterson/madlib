$(document).ready(function() {
  $("form").submit(function(event) {
    var blanks = ["person1", "person2", "person3", "animal", "exclamation", "verb", "noun"]

    blanks.forEach(function (blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
