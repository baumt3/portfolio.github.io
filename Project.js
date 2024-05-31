 /**********
Date: 04/11/24
Author: Taylir Baum
Class: CITW 165
Exercise: Project
**********/  

document.addEventListener("DOMContentLoaded", function() {
    const skillsList = document.querySelectorAll("#skills ul li");
    let currentIndex = 0;
  

    function showSkill(index) {
      
      skillsList.forEach(skill => {
        skill.style.display = "none";
      });
  
      
      skillsList[index].style.display = "block";
    }
  

    showSkill(currentIndex);
  

    function nextSkill() {
      currentIndex = (currentIndex + 1) % skillsList.length; 
      showSkill(currentIndex);
    }
  
    
    setInterval(nextSkill, 1000);
  });


  $(document).ready(function() {
    console.log("Document is ready.");
    
    $("#contact-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            message: {
                required: "Please enter your message"
            }
        }
    });

    console.log("Form validation initialized.");

    $("#contact-form").submit(function(event) {
        console.log("Form submitted.");
        event.preventDefault();
          
        var email = $("#email").val();
        var name = $("#name").val();
        var message = $("#message").val();
        
        var popupMessage = "Your message has been successfully submitted!\n\n";
        popupMessage += "Email: " + email + "\n";
        popupMessage += "Name: " + name + "\n";
        popupMessage += "Message: " + message;
        
        alert(popupMessage);
  
    });
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            var scrollAdjustment = 100; // Default adjustment value
            if ($(this).attr('href') === '#contact') {
                scrollAdjustment = 200; // Adjust this value specifically for the "contact" section
            } else if ($(this).attr('href') === '#welcome') {
                scrollAdjustment = 280; // Adjust this value specifically for the "welcome" section
            }
            $('html, body').animate({
                scrollTop: target.offset().top - scrollAdjustment
            }, 1000);
        }
    });
});
