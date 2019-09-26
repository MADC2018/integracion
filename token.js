function token() {
  const nombre = document.getElementById("nombre").value;
  const password = document.getElementById("password").value;
  console.log(nombre)
  console.log(password)
 



  $(document).ready(function () {
            $.ajax({
          url: 'https://ingenieria.aulasvirtuales.udistrital.edu.co/login/token.php?username='+nombre+'&password='+password+'&service=moodle_mobile_app',
          async: false,
          dataType: 'json',
          success: function (data) {
              //inicia token
              console.log("el token" , data.token)
              // inicia segunda funcion
              $(document).ready(function () {
                  $.ajax({
                url: 'https://ingenieria.aulasvirtuales.udistrital.edu.co/webservice/rest/server.php?wstoken='+data.token+'&wsfunction=core_webservice_get_site_info&moodlewsrestformat=json',
                async: false,
                dataType: 'json',
                success: function (data2) {
                    //inicia token
                    console.log("el user id" , data2.userid)
                    $(document).ready(function () {
                      $.ajax({
                    url: 'https://ingenieria.aulasvirtuales.udistrital.edu.co/webservice/rest/server.php?wstoken='+data.token+'&wsfunction=core_enrol_get_users_courses&userid=' + data2.userid + '&moodlewsrestformat=json',
                    async: false,
                    dataType: 'json',
                    success: function (cursos) {
                        //inicia token
                        console.log("cursos:" ,cursos,data.token)
                        for (i = 0; i < cursos.length; i++) {
                          
                          insertHtml(cursos[i].fullname,"https://ingenieria.aulasvirtuales.udistrital.edu.co/course/view.php?id="+cursos[i].id)
                      }
                              
                       //finaliza token
        
                    }
        
                });
              
        
            });
                      
                   //finaliza token
    
                }
    
            });
          
    
        });
        //termina segunda funcion
      

             //finaliza token

          }

      });


  });

//  return otro2;

}
function insertHtml(entrada,url){
  var lista = document.getElementById("htmlins");
lista.innerHTML += 
'<div class="col-lg-3 col-md-6 mb-4">'+
'<div class="card h-100">'+
'<div class="card-body">'+
'<h4 class="card-title">'+entrada+'</h4>'+
'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>'+
'</div>'+
'<div class="card-footer">'+
'<a href="'+url+'" class="btn btn-primary">Ir a curso</a>'+
'</div>'+
'</div>'+
'</div>';
}; 



/*
1. llamar funcion del token 
2. llamar funcion get site info 
https://ingenieria.aulasvirtuales.udistrital.edu.co/webservice/rest/server.php?wstoken=dd6f64b851f7dad55154b52202c25ee2&wsfunction=core_webservice_get_site_info&moodlewsrestformat=json
3. tomar el user id de el resultado 
4. llamar funcion que retorna los cursos 
5. https://ingenieria.aulasvirtuales.udistrital.edu.co/webservice/rest/server.php?wstoken=dd6f64b851f7dad55154b52202c25ee2&userid=5&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json
*/