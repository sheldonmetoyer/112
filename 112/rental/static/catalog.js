var movies = [];





function getCatalog(){
    $.ajax({
        url: 'http://127.0.0.1:8000/api/movies',
        type: "GET",
        success: function(response){
            console.log("response from server", response);

            movies = response.objects;
            for(var i=0; i< movies.length; i++){
                var movie = movies[i];
                diplayMovie(movie);
            }
        },
        error: function(errorDetails){
            console.log("Error", errorDetails);
        }
    });
}

function displayMovie(movie){
    //get container
    var container = $('#container');

    //create HTML syntax
    var sintax = 
    `
    <div class="carousel-item active">
        <img src="${http://via.placeholder.com/640x360
        }" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
    </div>
    `;


    //add syntax to container
    container.append(movieSlide)
}



function init(){
    console.log("Catalog JS is loaded");

    getCatalog();
}

window.onload = init;