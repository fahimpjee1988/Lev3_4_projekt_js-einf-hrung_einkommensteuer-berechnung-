function berechnen(){
    if(document.getElementById("netto").checked){
        console.log("netto")
        if(document.getElementById("neuzehn").checked){
            document.getElementById("mehrwert").innerHTML=
        Number(document.getElementById("typein").value)*0.19
        document.getElementById("mehrwert2").innerHTML=
        Number(document.getElementById("typein").value)*0.19+Number(document.getElementById("typein").value)
    
        }else{
            document.getElementById("mehrwert").innerHTML=
            Number(document.getElementById("typein").value)*0.07
            document.getElementById("mehrwert2").innerHTML=
            Number(document.getElementById("typein").value)*0.07+Number(document.getElementById("typein").value)
        
        }
        }
    else{
        if(document.getElementById("neuzehn").checked){
            document.getElementById("mehrwert").innerHTML=
        Number(document.getElementById("typein").value)/1.19
        document.getElementById("mehrwert2").innerHTML=
        Number(document.getElementById("typein").value)*1.19-Number(document.getElementById("typein").value).toFixed(2)
    
        }else{
            document.getElementById("mehrwert").innerHTML=
            Number(document.getElementById("typein").value)/1.19
            document.getElementById("mehrwert2").innerHTML=
            Number(document.getElementById("typein").value)*1.19-Number(document.getElementById("typein").value).toFixed(2)
        
        }
    }
}