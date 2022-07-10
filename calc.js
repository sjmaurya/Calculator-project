var displayArea = document.getElementById('display');
function isOperator(x) {
    if (x == '+' || x == '-' || x == '*' || x == '/' || x == '%')
        return true;
    else
        return false;

}

// function buttonClicked(x) {
//     if (displayArea.innerText.length >= 24)
//         return

//     if (buttonText != "CLR" && buttonText != 'DEL' && buttonText != '=') {
//         if (displayArea.innerText === '0') {
//             if (x != '00' && x != '0') { //dont do anything if button is closed on or off//
//                 if (x == '.' || isOperator(x)) {
//                     displayArea.innerText = displayArea.innerText + x;
//                 }
//                 else {
//                     displayArea.innerText = x;
//                 }
//             }
//         }
//         else {
//             if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(x)) {
//                 displayArea.innerText = displayArea.innerText.slice(0, -1) + x;
//             } else {
//                 displayArea.innerText = displayArea.innerText + x;
//             }
//         }
//     } else {
//         if (X === 'CLR') {
//             displayArea.innerText = '0'
//         } else if (buttonText === 'DEL') {
//             displayArea.innerText = displayArea.innerText.slice(0, -1)
//         } else {
//             try {
//                 displayArea.innerText = eval(displayArea.innerText)
//             } catch (error) {
//                 displayArea.innerText = 0
//             }
//         }
//     }

// }


function buttonClicked(x) {
    if (displayArea.innerText.length >= 24)
        return

    if (x === 'CLR') {
        displayArea.innerText = '0'
        return;
    }

    if (x === 'DEL') {
        displayArea.innerText = displayArea.innerText.slice(0, -1)
        return;
    }

    if (x === '=') {
        try {
            displayArea.innerText = eval(displayArea.innerText)
        } catch (error) {
            displayArea.innerText = 0
        }
        return;
    }

    if (displayArea.innerText === '0') {
        if (x == '00' || x == '0')
            //dont do anything if button is closed on or off//
            return;
        if (x == '.' || isOperator(x)) {
            displayArea.innerText = '0' + x;
            return;
        }

        displayArea.innerText = x;
    }
    else {
        if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(x)) {
            displayArea.innerText = displayArea.innerText.slice(0, -1) + x;
            return;
        }
        displayArea.innerText = displayArea.innerText + x

    }
}



