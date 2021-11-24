function play(){
    for(i=99;i>0;i--){
        document.getElementById("main").innerHTML+="<br n/>"+i+" bottles of beer on the wall, "+i+" bottles of beer.<br n/>Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.<br n/>";
    }
    document.getElementById("main").innerHTML+="<br n/>No more bottles of beer on the wall, no more bottles of beer.<br n/>Go to the store and buy some more, 99 bottles of beer on the wall.";
}