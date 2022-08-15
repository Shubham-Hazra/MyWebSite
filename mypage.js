  
 function checkbox(){ 
  var x = 0;
  var my_checkbox1 = document.getElementById("check1");
  if(my_checkbox1.checked)
    {
    chess.style.display = "block";
    x++;
    }
  else    
    {
    chess.style.display = "none";
    }
    var my_checkbox2 = document.getElementById("check2");
  if(my_checkbox2.checked)
    {
    books.style.display = "block";
    x++;
    }
  else    
    {
    books.style.display = "none";
    }
    var my_checkbox3 = document.getElementById("check3");
  if(my_checkbox3.checked)
    {
    badminton.style.display = "block";
    x++;
    }
  else    
    {
    badminton.style.display = "none";
    }
    var my_checkbox4 = document.getElementById("check4");
  if(my_checkbox4.checked)
    {
    travelling.style.display = "block";
    x++;
    }
  else    
    {
        travelling.style.display = "none";
    }
    var my_checkbox5 = document.getElementById("check5");
  if(my_checkbox5.checked)
    {
    youtube.style.display = "block";
    x++;
    }
  else    
    {
        youtube.style.display = "none";
    }
    var my_checkbox6 = document.getElementById("check6");
  if(my_checkbox6.checked)
    {
    games.style.display = "block";
    x++;
    }
  else    
    {
        games.style.display = "none";
    }
    var my_checkbox7 = document.getElementById("check7");
  if(my_checkbox7.checked)
    {
    anime.style.display = "block";
    x++;
    }
  else    
    {
        anime.style.display = "none";
    }
    if(x>0)
    {
        var my_checkbox = document.getElementById("checkbox");
        my_checkbox.style.display="none";
    }
    else
    {
        var my_checkbox = document.getElementById("checkbox");
        my_checkbox.style.display="block";
    }
 }