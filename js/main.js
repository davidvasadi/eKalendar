
///////////REGISZTRÁCIÓ/////////
$("#submit").click(
    () => {

        let fname = $("#fname").val();
        let email = $("#email").val();
        let coname = $("#coname").val();
        let pwd = $("#pwd").val();
        let pwdagain = $("#pwdagain").val();
        let checkbox = $("#checkbox").is(":checked");

        $(".error").css({
            "display": "none"
        });

        if (!fname) {

            $(".fname-error").css({

                "display": "block",
                "visibility": "visible"
            });

        }
        else if (!email) {

            $(".email-error").css({

                "display": "block",
                "visibility": "visible"
            });

        }
        else if (!coname) {

            $(".coname-error").css({

                "display": "block",
                "visibility": "visible"
            });

        }
        else if (!pwd) {

            $(".pwd-error").css({

                "display": "block",
                "visibility": "visible"
            });

        }
        else if (!pwdagain) {

            $(".pwdagain-error").css({

                "display": "block",
                "visibility": "visible"
            });

        }
        else if  (pwd != pwdagain) {
            $(".wrong-pwd").css({

                "display": "block",
                "visibility": "visible"
            });
        }

        else if (!checkbox) {

            $(".checkbox-error").css({

                "display": "block",
                "visibility": "visible"
            });

        }
    else{
        registerUser();
    }
        
    }
);
/////LOGIN//////
$("#button").click(
    () => {
        let email = $("#email").val();
        let pwd = $("#pwd").val();


        $(".error").css({
            "display": "none"
        });

        if (!email) {

            $(".email-error").css({

                "display": "block",
                "visibility": "visible"
            });

        }
        else if (!pwd) {

            $(".pwd-error").css({

                "display": "block",
                "visibility": "visible"
            });

        }
        else{
            loginUser(email, pwd);
        }
        
    }
);



function registerUser() {

    var userData = {

        name: $("#fname").val(),
        email: $("#email").val(),
        coname: $("#coname").val(),
        pwd: $("#pwd").val(),

    }

    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.replace("https://davidvasadi.github.io/eCaly/confirmation-email.html")
    
    
}
function loginUser(email, pwd){
    let userInfo = JSON.parse(localStorage.getItem("userData"));

    if (email != userInfo.email){


        $(".error").css({
            "display": "none"
        });


        $(".login-error").css({

            "display": "block",
            "visibility": "visible"
        });
    } 
    if (pwd != userInfo.pwd){


        $(".error").css({
            "display": "none"
        });


        $(".login-error").css({

            "display": "block",
            "visibility": "visible"
        });
    } 
    else{
        window.location.replace("https://davidvasadi.github.io/eCaly/homepage.html")
    }
    
}

