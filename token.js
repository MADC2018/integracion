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
                      $.ajax({
                        url: 'https://ingenieria.aulasvirtuales.udistrital.edu.co/webservice/rest/server.php?wstoken'+data.token+'&wsfunction=core_enrol_get_users_courses&userid=' + data.users[0].id + '&moodlewsrestformat=json',
                        async: false,
                        dataType: 'json',
                        success: function (data2) {
                            //inicia token
                            console.log("el user id" , data2.userid)
                           
                     //finaliza token
      
                          }
      
                        });
            
      
                      }
         
          //termina segunda funcion
        
        
               //finaliza token

                    

                  }

              }); 

              
  
            

          }

        });

      })
/*

1. llamar funcion del token 
2. llamar funcion get site info 
https://ingenieria.aulasvirtuales.udistrital.edu.co/webservice/rest/server.php?wstoken=dd6f64b851f7dad55154b52202c25ee2&wsfunction=core_webservice_get_site_info&moodlewsrestformat=json
3. tomar el user id de el resultado 
4. llamar funcion que retorna los cursos 
5. https://ingenieria.aulasvirtuales.udistrital.edu.co/webservice/rest/server.php?wstoken=dd6f64b851f7dad55154b52202c25ee2&userid=5&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json


    */
   
  }