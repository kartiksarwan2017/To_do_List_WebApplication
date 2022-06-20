$("#my_Select").change(function () {
  var color = $("option:selected", this).attr("class");
  $("#my_Select").attr("class", color);
});
