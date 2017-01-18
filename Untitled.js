$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    var answers = [];
    blanks.forEach(function(blank){
      var userInput = $("#" + blank).val();
      answers.push(userInput)
    });

    for (var index = 0; index < answers.length; index += 1) {
      $('.' + blanks[index]).text(answers[index]);
      };

    answers.sort();
    for (var index = 0; index < answers.length; index += 1) {
      $('#list').append(answers[index]);
    };

    // var person1Input = $("input#person1").val()
    // var person2Input = $("input#person2").val()
    // var animalInput= $("input#animal").val()
    // var exclamationInput = $("input#exclamation").val()
    // var verbInput = $("input#verb").val()
    // var nounInput = $("input#noun").val()
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
