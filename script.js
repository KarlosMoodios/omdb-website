
$(document).ready(function(){//document ready function of jquery

    const apiKey = "796660e5";//const variable for apikey

    $("#movieForm").submit(function(event){//target the movie form, when it submits run this function
        event.preventDefault();// prevent the auto submission of the form 
        //get movie name from user entry
        var movie = $("#movie").val(); //store the value entered by user
        let plot = $("#plot").val();
        var url = "http://www.omdbapi.com/?apikey="+apiKey;
        var result = "";
        $.ajax({//ajax request through jquery
            method:'GET',//request type
            url:url+"&t="+movie+"&plot="+plot,//url + search type, i, t or s, then the movie variable.
            success:function(data){// if success function
                console.log(data);//console log this data
                result = //display these data to html
                `
                <img style="float:left" class"img-thumbnail" width="200" hieght="300" src="${data.Poster}"/>
                <h3>${data.Title}</h3>
                <p>Actors: ${data.Actors}</p>
                <p>Director: ${data.Director}</p>
                <p>Genre: ${data.Genre}</p>
                <p>Language(s): ${data.Language}</p>
                <p>Rated: ${data.Rated}</p>
                <p>Runtime: ${data.Runtime}</p>
                <p>Year: ${data.Year}</p>
                <p>Plot: ${data.Plot}</p>

                `
                $("#result").html(result);
            }
        });

    });
});