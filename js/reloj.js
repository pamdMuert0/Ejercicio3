 const mostrarReloj=()=>{
    let fecha = new Date();
    let hr=formato(fecha.getHours());
    let mn=formato(fecha.getMinutes());
    let seg=formato(fecha.getSeconds());
    document.getElementById("hora").innerHTML=`${hr}:${mn}:${seg}`;

    const meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    const dias=["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
    let diasSem=dias[fecha.getDay()];
    let mes=meses[fecha.getMonth()];
    let dia=fecha.getDate();
    document.getElementById("fecha").innerHTML=`${diasSem}, ${dia} ${mes}`;
    document.getElementById("contenedor").classList.toggle("animar");
 }
 
 const formato=(hora)=>{
    if(hora<10)
        hora="0"+hora
    return hora;
 }
 setInterval(mostrarReloj,1000);