	var j = 0;
	var myFunction = function(){
		var inlogNaam = inlogForm.elements["inlognaam"].value;
		var wachtWoord = inlogForm.elements["ww"].value;

		var inlogArray = ["Mathijs", "Koning", "Hekman", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen"];

		for(var i = 0; i < inlogArray.length; i++){
		if (inlogNaam == inlogArray[i] && wachtWoord == "qwerty"){
			location.href="timeline.html";
			};
		};


		if(inlogNaam == "" && wachtWoord == ""){
			document.getElementById("demo").innerHTML = ("U heeft uw wachtwoord/gebruikersnaam niet ingevuld!")
				$("#effect").effect("shake");
				
			j++;
		}

		else{
			document.getElementById("demo").innerHTML = ("U heeft uw wachtwoord/gebruikersnaam niet goed ingevuld!")
			$("#effect").effect("shake");
			
			j++;
		}

			if(j>2){
				console.log("random");
				document.getElementById("demo").innerHTML = ("U heeft 3x verkeerd uw inlognaam/wachtwoord ingevuld en kunt niet meer inloggen")
				$("button").hide();
				$("input").prop('disabled', true);
					
		}
};
/* login screen ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
$(document).ready(function(){
	
		
var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".profile-pic").on('click', function() {
       $(".file-upload").click();
    });
});



var filledInFields = 6

function reg(){
 var gb1 = registerForm.elements["gb1"].value;

 var gbArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "Mathijs"];
 
 for(var i = 0; i < gbArray.length; i++) {
  if(gb1 == gbArray[i]) {
   document.getElementById("demos").innerHTML = ("Deze gebruikersnaam is al in gebruik, kies een andere!");
   $( "#demos" ).effect( "shake" )
   filledInFields--;
  }
 }

 $(".registerhere").each(function(){
  if ($(this).val().length < 1){
     document.getElementById("demos").innerHTML = ("Niet alle invoerverleden zijn ingevuld!")
     filledInFields--;
        } 

    })
 
 if(filledInFields == 6){
  location.href="timeline.html";
 }
}


function checkWW(){

    var pass1 = document.getElementById('ww1');
    var pass2 = document.getElementById('ww2');


    var goodColor = "#66cc66";
    var badColor = "#ff6666";


    if(pass1.value == pass2.value){

        pass2.style.backgroundColor = goodColor;
        document.getElementById("demos").innerHTML = ("De wachtwoorden komen overeen!")

    }else{

        pass2.style.backgroundColor = badColor;
 		document.getElementById("demos").innerHTML = ("De wachtwoorden komen niet overeen!")
    }
} 

/* Register ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
$(document).ready(function(){
$('.timeline, .left, .right').css('height', $( window ).height() -70);

	$("#addTimelinePostButton").click(function() {

		var addTimelinepost = $('#addTimelineArea').val();

		var textareaIsEmpty = $.trim($('#addTimelineArea').val());
		if(textareaIsEmpty.length !== 0) {
			$(".timeline-add-post").append("<div class='timeline-post'><label class='naam'>Mathijs Hes</label><img id='icon' src='https://scontent-ams3-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/10259829_840382579414982_2348342420181825525_n.jpg?oh=d922b934ed96069de9c72c8212f49c2d&oe=573DF635' alt='matoise' /></p>"+addTimelinepost+"</p><button class='verwijder'>Verwijderen</button>");
						

			$("#addTimelineArea").val('');
			$("#errorTimeline").text('');
		} else {
			$("#errorTimeline").text('Er is niks ingevuld');
		}
	});

		$(document).on('click', '.verwijder', function(){
			$(this).parent().slideUp()
				$(this).remove()
		});

	$(document).on('click', '.likeButton', function() {

		$(this).parent().parent().find(".likeField").toggle();
		$(this).toggleClass("current");

	});

	$(document).on('click', '.reagerenButton', function() {

		$(this).parent().parent().find(".reagerenField").show();
		$(this).showClass("current");

	});

	$('.addCommentOnPost').keypress(function (e) {

		var addCommentOnPost = $('.addCommentOnPost').val();

		if (e.which == 13) {
			$(this).closest(".reagerenField").prepend(""+addCommentOnPost+"<br>");
			var addCommentOnPost = $('.addCommentOnPost').val('');
		}		
	});





});

/* Timeline ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */


$(document).ready(function(){
    $(".adddateB1").click(function(){
        $(".adddate4").show();
        $(".adddate1").hide();
        $(".adddateB1").hide();
         $(".adddateB4").show();
    });



    $(".adddateB2").click(function(){
        $(".adddate5").show();
        $(".adddate2").hide();
        $(".adddateB2").hide();
         $(".adddateB5").show();
    });




    $(".adddateB3").click(function(){
        $(".adddate6").show();
        $(".adddate3").hide();
        $(".adddateB3").hide();
         $(".adddateB6").show();
    });


    $(".adddateB4").click(function(){
        $(".adddate4").hide();
        $(".adddateB4").hide();
    });


    $(".adddateB5").click(function(){
        $(".adddate5").hide();
        $(".adddateB5").hide();
    });



    $(".adddateB6").click(function(){
        $(".adddate6").hide();
        $(".adddateB6").hide();
    });



    $(".adddateB7").click(function(){
        $(".adddate7").hide();
        $(".adddateB7").hide();
    });



    $(".adddateB8").click(function(){
        $(".adddate8").hide();
        $(".adddateB8").hide();
    });


    $(".adddateB9").click(function(){
        $(".adddate9").hide();
        $(".adddateB9").hide();
    });


    $(".adddateB10").click(function(){
        $(".adddate10").hide();
        $(".adddateB10").hide();
    });


    $(".adddateB11").click(function(){
        $(".adddate11").hide();
        $(".adddateB11").hide();
    });


    $(".adddateB12").click(function(){
        $(".adddate12").hide();
        $(".adddateB12").hide();
    });


    $(".adddateB13").click(function(){
        $(".adddate13").hide();
        $(".adddateB13").hide();
    });


    $(".adddateB14").click(function(){
        $(".adddate14").hide();
        $(".adddateB14").hide();
    });
});

/* Berichten functie -----------------------------------*/

$(document).ready(function(){

$(".addChatBericht").click(function() {
    var input = $("#inputChatBericht").val();
    
    var inputChatIsEmpty = $.trim($('#inputChatBericht').val());

    if(inputChatIsEmpty.length !== 0) {
        var chatbericht = "<div class='chatright'><div class='omschrijving'>Mathijs Hes zegt: <br>"+input+"</div></div>";
        $("#berichtenoverzicht").append(chatbericht);

    $("#inputChatBericht").val('');
    $("#error").text('');
} else {
    $("#error").text('Het veld is niet ingevuld.');
}
});


});




