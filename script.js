$(document).ready(function() {
    var turn = "X";
    var computersTurn = 'O';
    var turns = ["#" , "#" , "#" , "#" , "#" , "#" , "#" , "#" , "#"];
    //function defination area
    // winning condition function
    function checkWin(){
        if(turns[0] === "X" &&
          turns[1] === "X" &&
          turns[2] === "X"
        ) { alert("X Wins");
        location.reload(); 
        }
        else if (
          turns[3] === "X" &&
          turns[4] === "X" &&
          turns[5] === "X"
        ) { alert("X Wins");
        location.reload();  
        }
         else if (
          turns[6] === "X" &&
          turns[7] === "X" &&
          turns[8] === "X"
        ) { alert("X Wins");
        location.reload();  
        }
        if(turns[0] === "X" &&
        turns[3] === "X" &&
        turns[6] === "X"
        ) { alert("X Wins");
            location.reload();
        }
        else if (
        turns[1] === "X" &&
        turns[4] === "X" &&
        turns[7] === "X"
        ) { alert("X Wins");
        location.reload();   
        }
        else if (
        turns[2] === "X" &&
        turns[5] === "X" &&
        turns[8] === "X"
        ) { alert("X Wins");
        location.reload();  
        }  
        else if (
            turns[0] === "X" &&
            turns[4] === "X" &&
            turns[8] === "X"
        ) { alert("X Wins");
        location.reload();  
        }
        else if (
            turns[2] === "X" &&
            turns[4] === "X" &&
            turns[6] === "X"
         ) { alert("X Wins");
             location.reload();  
            }
      }
   
    // check for O winning

    function checkWinO(){
        if(turns[0] === "O" &&
          turns[1] === "O" &&
          turns[2] === "O"
        ) { alert("O Wins");
        location.reload(); 
        }
        else if (
          turns[3] === "O" &&
          turns[4] === "O" &&
          turns[5] === "O"
        ) { alert("O Wins");
        location.reload();  
        }
         else if (
          turns[6] === "O" &&
          turns[7] === "O" &&
          turns[8] === "O"
        ) { alert("O Wins");
        location.reload();  
        }
        if(turns[0] === "O" &&
        turns[3] === "O" &&
        turns[6] === "O"
        ) { alert("O Wins");
           location.reload(); 
        }
        else if (
        turns[1] === "O" &&
        turns[4] === "O" &&
        turns[7] === "O"
        ) { alert("O Wins");
        location.reload();   
        }
        else if (
        turns[2] === "O" &&
        turns[5] === "O" &&
        turns[8] === "O"
        ) { alert("O Wins");
        location.reload();  
        }  
        else if (
            turns[0] === "O" &&
            turns[4] === "O" &&
            turns[8] === "O"
        ) { alert("O Wins");
        location.reload();  
        }
        else if (
            turns[2] === "O" &&
            turns[4] === "O" &&
            turns[6] === "O"
         ) { alert("O Wins");
             location.reload();  
            }
      }



    // computers mmove function
    function computersMove() {
        var num = Math.floor((Math.random() * 8) + 1);
        if(turns[num] === "#"){
            $("#" + num).text(computersTurn);
            turns[num] = computersTurn;
            checkWinO();
        }else{
            computersMove();
        }
    }
    // your move function
    function theTurn(turn , id) {
        var check = $("#" + id).text();
        if(check === "#") {
            $("#" + id).text(turn);
            turns[id] = turn;
            checkWin();
            computersMove(turn);
        }
    }

    //play with x
    $('#turn-x').click(function() {
        $('#turn-x').removeClass('btn-secondary');
        $('#turn-x').addClass('btn-primary');
        $('#turn-o').removeClass('btn-primary');  
        $('#turn-o').addClass('btn-secondary'); 
        turn = "X";
        computersTurn = 'O'
    });
    //play with 
    $('#turn-o').click(function() {
        $('#turn-o').removeClass('btn-secondary');
        $('#turn-o').addClass('btn-primary'); 
        $('#turn-x').removeClass('btn-primary');  
        $('#turn-x').addClass('btn-secondary');
        turn = "O";
        computersTurn = 'X';
    });

    //click to change
    $('.tic').click(function() {
        var slot = $(this).attr('id');
        theTurn(turn , slot);
    });
});