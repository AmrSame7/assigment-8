var author = [' ― Oscar Wilde' , '― Albert Einstein' , '― Frank Zappa' , '― Mae West' , '― Robert Frost' , '― Mark Twain'];
    var quote = ['“Be yourself; everyone else is already taken.”' , '“Two things are infinite: the universe and human stupidity and Iam not sure about the universe.”' , '“So many books, so little time.”' , '“You only live once, but if you do it right, once is enough.”' , '“In three words I can sum up everything I have learned about life: it goes on.”' ,"“If you tell the truth, you don't have to remember anything.”"];

    var num ;
    var newNum ;



function RandomQuote() {

    num = Math.floor( Math.random() * author.length );
    
    while( num ==  newNum){

        num = Math.floor( Math.random() * author.length );
    }

        newNum =  num


   document.getElementById("quotes").innerHTML= quote[newNum]

   document.getElementById("authors").innerHTML= author[newNum]

   console.log(newNum);
}







