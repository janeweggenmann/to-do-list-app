function newItem(){

//1. Adding a new item to the list of items:
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

 //2. Crossing out an item with a doubleclick:
  function crossOut() {
    li.addClass("strike");
  }

  li.on("dblclick", function() {
    li.toggleClass("strike");
  });

 //3(i). Adding the delete button "X":
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

 //3(ii). Adding "delete" class to remove list item (display: none from the css):
  function deleteListItem() {
    li.addClass("delete");
  }

 // 4. Making items sortable/able to be re-ordered:
   $('#list').sortable();

//Clears form after submitting
   $("#toDoList")[0].reset();
   event.preventDefault;
   return false;
}

//Create new list item with Enter keypress, prevent page from re-loading
$('input[type=text]').keypress(function(e) {
    if (e.which == 13) {
      newItem();
      e.preventDefault();
      }
});
