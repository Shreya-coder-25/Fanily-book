var names=[
    "Appa:Murli",
    "Amma:Shubha",
    "Sister:Aadya",
    "Myself:Shreya"
];
var images=[
    "https://comps.gograph.com/father-and-baby-kiss_gg66829244.jpg",
    "https://i.pinimg.com/736x/5b/75/26/5b75264812ae75bdb521f3e6a941f397.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6q9QoG4J5V9IUVk590a4Xv_-seUGQZrM2Q&usqp=CAU",
    "https://i.pinimg.com/originals/a1/39/3f/a1393f844157d448ce64b2fb277f6ecc.jpg"
];
var i=0;
function next_image()
{
    document.getElementById("names").innerHTML=
    names[i];
  document.getElementById("images").src=
    images[i];
  i++;
   
}