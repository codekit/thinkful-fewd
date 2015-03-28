$(document).ready(function () {

    $("#add").click(function () {
        var item = $('#addItem').val();
        var qty = $('#qty').val();
        if (item == '') {
            console.log("no items added");
        } else {
            addItems(item, qty);
            $('#addItem').val('');
            $('#qty').val('');
            $('#addItem').focus();
        };
    });

    $('.list').on('click', 'div.del', deleteItems);
    $('.list').on('click', 'span.item', function () {
        console.log("checked out");
        $(this).toggleClass("checked");
    });

    function addItems(item, qty) {
        var newItem = "<li class='listItem'>" + "<span  class='item'>" + qty + ' ' + item + "</span>" + "<div class='del'></div>" + "</li>";
        $(newItem).prependTo('.list').slideDown('slow');
    }

    function deleteItems() {
        console.log("deleted");
        if ($(this).siblings().hasClass("checked")) {

            $(this).parent().slideUp('fast', function () {
                $(this).remove();
            });
        } else {
            $(this).parent().slideUp('fast', function () {
                $(this).remove();
            });
        }
    }
});