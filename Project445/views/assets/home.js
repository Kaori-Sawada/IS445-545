$(document).ready(function () {
    $.ajax({
        type: 'GET', 
        url: 'api/user', 
        dataType: 'json',
    })
    .done(successHandler)
    .fail(errorHandler)

    // process the form
    $('#sendButton').click(() => {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        const formData = {
            name: $('input[name=name]').val(),
            email: $('input[name=email]').val(),
            phone: $('input[name=phone]').val()

        }

        const requestData = JSON.stringify(formData)

        $.ajax({
                type: 'POST', 
                url: 'api/user', 
                data: requestData,
                dataType: 'json',
                contentType: 'application/json',
            })
            .done(successHandler)
            .fail(errorHandler)
            
    })

        $.ajax({
                type: 'PUT', 
                url: 'api/user', 
                data: requestData,
                dataType: 'json',
                contentType: 'application/json',
            })
            .done(successHandler)
            .fail(errorHandler)

            $.ajax({
                type: 'DELETE', 
                url: 'api/user', 
                data: requestData,
                dataType: 'json',
                contentType: 'application/json',
            })
            .done(successHandler)
            .fail(errorHandler)
    })



function successHandler(users) {
    console.log(`Response has ${users.length} users`)
    var $table = $( "<table border='1'><tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th></table>" );
    for ( let index = 0; index < users.length; index++ ) {
        const user = users[index]
        const $line = $( "<tr></tr>" )
        $line.append( $( "<td></td>" ).html( user.id ) )
        $line.append( $( "<td></td>" ).html( user.name ) )
        $line.append( $( "<td></td>" ).html( user.email ) )
        $line.append( $( "<td></td>" ).html( user.phone ) )
        $table.append( $line )
    }

    $('#output').empty()
    $table.appendTo( $('#output') )
}

function errorHandler(jqXHR, textStatus, error) {
    $('#output').val("textStatus: " + textStatus + ". server error: " + error)
}
