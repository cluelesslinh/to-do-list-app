function newItem() {

    //Add new items to list

    let list = $('#list');
    let li = $('<li></li>');
    let inputValue = $('#input').val();

    if (inputValue === '') {
        alert('You must write something!');
    } else {
      li.append(inputValue);
        list.append(li);
    }

    //Cross out items
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    //Add delete button X

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append('X');
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
        this.parentElement.remove();
    }

    //Reorder items

    $('#list').sortable();

}
