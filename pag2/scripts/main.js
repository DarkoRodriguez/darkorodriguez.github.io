
function getData2(form){
    console.log("este es el form: "+form);
    var formData = new FormData(form);

    for(var pair of formData.entries()){
        console.log(pair[0] +": "+ pair[1]);
    }

    var var1 =(Object.fromEntries(formData));
    console.log(JSON.stringify(Object.fromEntries(formData),null,4));

    if(document.getElementById("msg") !=null){
        document.getElementById("msg").innerHTML = null;
    }else{
        msg= "<p id='msg'>Formulario Enviado con Exito<p>"
    }
    document.getElementById("FormLogin").innerHTML += msg;
    console.log("este es el var1 "+var1["email"]);
    
}
document.getElementById("FormLogin").addEventListener("submit", function (e){
    
    e.preventDefault();
    getData2(e.target);
  
})








function getData(form){
    console.log("este es el form: "+form);
    var formData = new FormData(form);

    for(var pair of formData.entries()){
        console.log(pair[0] +": "+ pair[1]);
    }

    var var1 =(Object.fromEntries(formData));
    console.log(JSON.stringify(Object.fromEntries(formData),null,4));

    if(document.getElementById("msg") !=null){
        document.getElementById("msg").innerHTML = "";
    }
    console.log("este es el var1 "+var1["edad"]);
    msg= "<p id='msg'>Formulario Enviado con Exito<p>"
    document.getElementById("myForm2").innerHTML += msg;
    msg2= rangoEdad(var1["edad"]);
    document.getElementById("myForm2").innerHTML += msg2;
}

//var edad = func_leer_edad(Object.fromEntries(formData))
//mensaje = func_get_msg (edad)
// func_escribir_msg(msg)
function rangoEdad(edad){
    var msg="";
    if (edad < 18 ){
        msg= "<p id='msg2'>Usted es un niño<p>";
    } else if (edad >=18 && edad < 65){
        msg= "<p id='msg2'>Usted es un adulto<p>";
    }else{
        msg= "<p id='msg2'>Usted es de la tercera edad<p>";
    }
    return msg;
}
document.getElementById("myForm").addEventListener("submit", function (e){
    e.preventDefault();
    getData(e.target);
    
})
document.getElementById("myForm2").addEventListener("submit", function (e){
    
    e.preventDefault();
    getData(e.target);
  
})
function varHola(nom){
    return "Hola "+nom+" buenos dias"
}
var mensaje = varHola("juan");
document.writeln("<h3>"+mensaje+"<h3/>");
