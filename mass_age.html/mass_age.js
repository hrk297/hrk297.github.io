function getConfirmation() {
               if(confirm("Humans were not designed to consume this much information.\nAm i only valuable if i'm surveilled?\nThe woman reflected in your eyes is an imposter of the woman standing before you. \nIs artificial intelligence the techological reflection of self-fulfilling prophecies?\nWhy is it so hard to believe this is our fate? \nWhat happens when i am the 'other'? \nAm i capable of holding two selves, one digital and one analog?" ) == true ) {
                    window.location.replace = "https://halenurkomsul.wixsite.com/mysite/about";
                return true;
               } 
               else {
                    console.log('The User Decided To Terminate This Experience');
                return false;
               }
            }
