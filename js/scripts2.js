$(document).ready(function() {
  $("form").submit(function(event) {
    var person1Input = $("#person1").val();
    var person2Input = $("#person2").val();
    var verbInput = $("#verb").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".verb").text(verbInput);

    $("#story").show();

    event.preventDefault();
  });
  form.reset();  
});
