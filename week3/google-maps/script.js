var area = "NewYork";

document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+area+"&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyBqliwwDOrYdIOj2mLJy_2t9edJy9VWJzc";

function changeArea(){
    area = document.getElementById("newArea").value;
    area = document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+area+"&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyBqliwwDOrYdIOj2mLJy_2t9edJy9VWJzc";
}
changeArea();