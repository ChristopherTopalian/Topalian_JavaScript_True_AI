// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeLogicGateButtons.js

function makeLogicGateButtons()
{
    let logicButtonsDiv = ce("div");
    logicButtonsDiv.id = "logicButtonsDiv";
    logicButtonsDiv.className = "logicButtonsDiv";
    logicButtonsDiv.style.position = 'absolute';
    logicButtonsDiv.style.left = '217px';
    logicButtonsDiv.style.top = '40px';
    logicButtonsDiv.style.width = '375px';
    ba(logicButtonsDiv);

    //-//

    for (let x = 0; x < logic.length; x++)
    {
        let logicGateButton = ce("button");
        logicGateButton.innerHTML = logic[x].name;
        logicGateButton.id = "logicGateButton" + logic[x].name;
        logicGateButton.className = "logicGateButton";

        logicGateButton.onclick = function()
        {
            ge('sfx_blip_001').play();
            makeLogicCalculator(logic[x].name);
        };

        logicGateButton.onmouseover = function()
        {
            ge('sfx_warp_001').play();
        };
        logicButtonsDiv.append(logicGateButton);
    }
}

