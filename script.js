const socket=io();
if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
        const{latitude,location}=position.coords;
        socket.emit("send-location",{latitude,longitude});
    },(error)=>{
        console.error(error);
    },
    {
        enableHighAccuracy:true,
        timeout: 5000,
        maximumAge: 0,
    }
    );
}
L.map("map").setView([0,0],10);
L.titleLayer("https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution: "OpenStreetMap"
}).addTo(map)