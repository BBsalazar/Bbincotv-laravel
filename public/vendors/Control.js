var PressedKey      = 0,
    Clicks          = 0,
    MaxClicks       = 10,
    TimeClicks      = 1000, //milisegundos
    TimeCheck       = 2000, //milisegundos
    Sequence        = 0,
    ClearingClicks  = false,
    CheckingClicks  = false,
    timeMenu        = 0,
    showInfoDevi  = false,
    timeInfoDevice  = null,
    contInfoDevice  = 0,
    DelayChangeChannel = false,
    DelaySkip          = false;
var SwapPausePlay = true;
var CheckInfo = 0;
    
document.addEventListener('keydown',KeyHandler,false);

function KeyHandler(e) {
		PressedKey = e.keyCode;
		e.preventDefault();

		alert('PressedKey: '+PressedKey);
        switch (PressedKey) {

			case REMOTE_OK:
                alert("OK")
		
			break;
}
}  
   /*      //Debug('>> PressedKey: '+PressedKey);
        if(Clicks <= MaxClicks) {
            //alert(REMOTE_RED);
            //ShowRecorderMessage(PressedKey);
            switch (PressedKey) {
                case REMOTE_GUIDE:
                    //Debug("BOTON REMOTE_RED");
                    alert("Presiono el boton rojo")
                break;
                case REMOTE_BLUE:
                    //Debug("BOTON REMOTE_BLUE");
                    if(showInfoDevi == false){
                        Blue();
                    }
                break;

                case REMOTE_GREEN:
                    //Debug("BOTON REMOTE_GREEN");

                    if(showInfoDevi == false){
                        Green();
                    }
                break;

                case REMOTE_YELLOW:
                    //Debug("BOTON REMOTE_YELLOW");

                    // if(contInfoDevice == 2 && showInfoDevi == false){
                    //     clearTimeout(timeInfoDevice);
                    //     contInfoDevice++;
                    //     timeInfoDevice = setTimeout(function(){
                    //         contInfoDevice=0;
                    //     }, 5500);
                    // }
                    if(showInfoDevi == false){
                       Yellow(); 
                    }
                    
                break; */

        /********** NAVEGACION **********/

      /*           case ARROW_KEY_UP:
                    //Debug("BOTON ARROW_KEY_UP");

                   break;
            }
        
        }
    } */
/*******************************************************************************
 * Función para ejecutar los eventos de las teclas en Pantalla de Vendor = Generic
 *******************************************************************************/
 function MakeEvent(key){
    document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode':key, 'which':key}));
}
    
    