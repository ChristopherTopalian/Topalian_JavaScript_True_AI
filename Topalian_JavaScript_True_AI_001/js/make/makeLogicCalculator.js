// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeLogicCalculator.js

function makeLogicCalculator(whichItem)
{
    if (ge("logicCalcDiv"))
    {
        ge("logicCalcDiv").remove();
    }

    //-//

    let logicCalcDiv = ce("div");
    logicCalcDiv.id = "logicCalcDiv";
    logicCalcDiv.className = "logicCalcDiv";
    logicCalcDiv.style.position = 'absolute';
    logicCalcDiv.style.left = '10px';
    logicCalcDiv.style.top = '5px';
    logicCalcDiv.style.display = 'flex';
    logicCalcDiv.style.flexDirection = 'column';
    ba(logicCalcDiv);

    //-//

    let logicGateTitle = ce("div");
    logicGateTitle.innerHTML = logic[findIndexByName(logic, whichItem)].name;
    logicGateTitle.id = "logicGateTitle";
    logicGateTitle.style.position = 'relative';
    logicGateTitle.style.left = '3.5px';
    logicGateTitle.style.top = '-1.5px';
    logicGateTitle.style.color = 'rgb(0, 255, 255)';
    logicCalcDiv.append(logicGateTitle);

    //-//

    let textboxDiv = ce('div');
    textboxDiv.id = 'textboxDiv';
    textboxDiv.style.display = 'flex';
    textboxDiv.style.flexDirection = 'row';
    logicCalcDiv.append(textboxDiv);

    //-//

    let textBox001 = ce("input");
    textBox001.type = 'text';
    textBox001.id = "textBox001";
    textBox001.placeholder = "A";
    textBox001.style.width = '50px';
    textBox001.style.marginRight = '3px';
    textBox001.onkeyup = function()
    {
        let a = textBox001.value;
        let b = textBox002.value;

        if (b != '')
        {
            ge("textBoxResult").value = eval(logic[findIndexByName(logic, whichItem)].function);
        }
    };
    textboxDiv.append(textBox001);

    //-//

    let textBox002 = ce("input");
    textBox002.type = 'text';
    textBox002.id = "textBox002";
    textBox002.placeholder = "B";
    textBox002.style.width = '50px';
    textBox002.onkeyup = function()
    {
        let a = textBox001.value;
        let b = textBox002.value;

        if (a != '' && b != '')
        {
            ge("textBoxResult").value = eval(logic[findIndexByName(logic, whichItem)].function);
        }
        else
        {
            ge("textBoxResult").value = ''
        }
    };
    textboxDiv.append(textBox002);

    //-//

    let textBoxResult = ce("textarea");
    textBoxResult.id = "textBoxResult";
    textBoxResult.placeholder = "Result";
    textBoxResult.style.width = '200px';
    textBoxResult.onchange = function()
    {
        if (ge('textBoxResult').value == 0)
        {
            ge('textBoxResult').style.borderColor = 'rgb(255, 255, 255)';
        }
        else
        {
            ge('textBoxResult').style.borderColor = 'rgb(0, 255, 255)';
        }
    }
    logicCalcDiv.append(textBoxResult);

    //-//
    
    let truthTableAbbreviated = ce('div');
    truthTableAbbreviated.innerHTML = logic[findIndexByName(logic, whichItem)].truthTable;
    truthTableAbbreviated.id = 'truthTableAbbreviated';
    truthTableAbbreviated.style.position = 'absolute';
    truthTableAbbreviated.style.left = '140px'
    truthTableAbbreviated.style.top = '40px';
    truthTableAbbreviated.style.color = 'rgb(150, 150, 150)';
    if (ge('truthTableAbbreviated'))
    {
        ge('truthTableAbbreviated').remove();
    }
    ba(truthTableAbbreviated);

    //-//

    let truthTableComplete = ce('div');
    truthTableComplete.innerHTML = '<pre>' + logic[findIndexByName(logic, whichItem)].truthTableFormatted + '</pre>';
    truthTableComplete.id = 'truthTableComplete';
    truthTableComplete.style.position = 'absolute';
    truthTableComplete.style.left = '-30px'
    truthTableComplete.style.top = '151px';
    truthTableComplete.style.color = 'rgb(150, 150, 150)';
    if (ge('truthTableComplete'))
    {
        ge('truthTableComplete').remove();
    }
    ba(truthTableComplete);

    //-//

    let booleanLogicGate = ce('div');
    booleanLogicGate.innerHTML = logic[findIndexByName(logic, whichItem)].formula;
    booleanLogicGate.id = 'booleanLogicGate';
    booleanLogicGate.style.position = 'absolute';
    booleanLogicGate.style.left = '25px'
    booleanLogicGate.style.top = '310px';
    booleanLogicGate.style.width = '400px';
    booleanLogicGate.style.color = 'rgb(0, 255, 255)';
    if (ge('booleanLogicGate'))
    {
        ge('booleanLogicGate').remove();
    }
    ba(booleanLogicGate);

    //-//

    let oppositeGate = ce('div');
    oppositeGate.innerHTML = 'Opposite Gate is: ' + logic[findIndexByName(logic, whichItem)].opposite;
    oppositeGate.id = 'oppositeGate';
    oppositeGate.style.position = 'absolute';
    oppositeGate.style.left = '280px'
    oppositeGate.style.top = '3px';
    oppositeGate.style.color = 'rgb(100, 100, 100)';
    if (ge('oppositeGate'))
    {
        ge('oppositeGate').remove();
    }
    ba(oppositeGate);

    //-//

    let topalianDiagram = ce('img');
    topalianDiagram.id = 'topalianDiagram';
    if (online == false)
    {
        topalianDiagram.src = logic[findIndexByName(logic, whichItem)].imgSrcOffline;
    }
    else
    {
        topalianDiagram.src = logic[findIndexByName(logic, whichItem)].imgSrcOnline;
    }
    topalianDiagram.style.position = 'absolute';
    topalianDiagram.style.left = '458px';
    topalianDiagram.style.top = '283px';
    topalianDiagram.style.width = '115px';
    ba(topalianDiagram);
}

