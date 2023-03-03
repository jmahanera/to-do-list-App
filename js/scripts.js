function newItem() {
  // Add new item to the list:
  let inputValue = $('#input').val();
  if (inputValue === '') {
    alert("Please Write a list item!!.");
  } else {
    let li = $('<li></li>');
    li.append(inputValue);
    $('#list').append(li);

    // Cross item from the lists
    function crossOut() {
      li.toggleClass("strike");
    }
    li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
  });

    // Delete button "X":
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);
    crossOutButton.on("click", deleteListItem);

    // Add class "delete" totally from css file:
    function deleteListItem() {
      li.addClass("delete");
    }
  }
}
  // Reorder of items when dragged to change positions:
  $('#list').sortable();
