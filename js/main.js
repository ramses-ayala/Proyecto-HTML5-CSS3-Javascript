$(document).ready(function(){


    if(location.href.indexOf('index') > -1){
        // SLIDER
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });



        // POST

        let post = [
            {
                "titulo":"prueba titulo 1",
                "date": "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            },
            {
                "titulo":"prueba titulo 2",
                "date": "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                "content":"when an unknown printer took a galley of type and scrambled it to make a type"
            },
            {
                "titulo":"prueba titulo 3",
                "date": "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                "content":"It has survived not only five centuries, but also the leap into electronic"
            },
            {
                "titulo":"prueba titulo 4",
                "date": "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                "content":"with the release of Letraset sheets containing Lorem Ipsum passages, and more"
            },
            {
                "titulo":"prueba titulo 5",
                "date": "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                "content":"recently with desktop publishing software like Aldus PageMaker including"
            },
            {
                "titulo":"prueba titulo 6",
                "date": "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                "content":"recently with desktop publishing software like Aldus PageMaker including"
            }

        ];

        post.forEach(function(value,index){
            var art = `
            <article class="post">
                <h2>${value.titulo}</h2>
                <span class="date">${value.date}</span>
                <p>
                    ${value.content}
                </p>

                <a href="#" class="button-more">Read More</a>
            </article>
            `;
            //console.log(art);

            $("#posts").append(art);
        });

    } // if  LOCATION.HREF
        

        /*
             <article class="post">
                        <h2>Articulo 1</h2>
                        <span class="date">Fecha de publicación</span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. 
                            It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                            recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                        </p>
                    </article>
        */
                



    //console.log(post);




    // SELECTOR DE TEMA
    let theme = $('#theme');

    $('#to-red').click(function(){
        theme.attr("href","css/red.css");
    });

    $('#to-green').click(function(){
        theme.attr("href","css/green.css");
    });

    $('#to-blue').click(function(){
        theme.attr("href","css/blue.css");
    });



    // SCROLL PARA ARRIBA
    // BOTON SUBIR 
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        },500);

    });




    // HACER LOGIN FALSO CON LOCALSTORAGE
    

    $("#login").submit(function(){
        let form_name = $("#name").val();

        localStorage.setItem("name", form_name);

    });

    let name = localStorage.getItem("name");

    if(name != null && name != "undefined"){
        $("#caja-formulario").hide();

        let about = $("#about p");
        about.html("<p>Bienvenido al sistema</p>" + name);
        about.append("<a href='#' id='cerrar_sesion'>Cerrar sesion</a>");


        $("#cerrar_sesion").click(function(){

            localStorage.clear();
            location.reload();
        });

    }

    if(window.location.href.indexOf("about") > -1){
        $("#acordeon").accordion();
    }

    if(window.location.href.indexOf("reloj") > -1){

        
        setInterval(function(){
            let reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        },1000);
    }
    

    // CARGAR LA VALIDACION CON UN PLUGIN DE JQUERY EN EL PAGINA DEL FORMULARIO
    if(window.location.href.indexOf("formulario") > -1){

        $("input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: "es"
        })
    }

});