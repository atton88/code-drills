$(document).submit(function () {
    // dont forget to prevent default
    event.preventDefault();

    // grab the show information from the form on the page
    var searchInformation;
    $("#showSearch").closest("form").on("submit", function() {
        searchInformation = $("#showSearch").val();
        //console.log(searchInformation);

    // console.log the input


    // this is the api we are using add your search variable to end of the queryURL
    var queryURL = "http://api.tvmaze.com/search/shows?q=" + searchInformation;
        var dupeCancel = true;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log the response 
        console.log(response);
        // create a forloop and append the first 3 responses to the page

        if (dupeCancel) {
            console.log(response[0].show.image.medium);
            $(".shows").append("<img src="+response[0].show.image.medium + ">");

            
            // console.log the image and then append it to the page.            


            // console.log the name of the show and append it to the page

            console.log(response[0].show.name);
            $(".shows").append("<h2>"+response[0].show.name + "</h2>");

            // console.log the genres of the show and append it to the page

            console.log(response[0].show.genres);
            $(".shows").append(response[0].show.genres.toString());

            // console.log the summary of the show and append it to the page
            console.log(response[0].show.summary);
            $(".shows").append(response[0].show.summary);
            dupeCancel = false;
        }
    });

})})    
