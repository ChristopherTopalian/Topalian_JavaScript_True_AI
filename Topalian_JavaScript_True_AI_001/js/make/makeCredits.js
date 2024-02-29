// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeCredits.js

function makeCredits()
{
    let creditsDiv = document.createElement('div');
    creditsDiv.style.position = 'absolute';
    creditsDiv.style.right = '10px';
    creditsDiv.style.top = '5px';
    creditsDiv.style.zIndex = 1;
    ba(creditsDiv);

    //-//

    let titleDiv = document.createElement('div');
    titleDiv.innerHTML =
    `<a href = 'https://github.com/christophertopalian' target = '_blank'>Topalian JavaScript True AI</a>`;
    titleDiv.style.fontSize = '15px';
    titleDiv.style.color = 'rgb(120, 120, 120)';
    creditsDiv.append(titleDiv);
}

