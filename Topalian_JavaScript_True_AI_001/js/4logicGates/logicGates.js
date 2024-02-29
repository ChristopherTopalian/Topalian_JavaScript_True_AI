// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// logicGates.js

function gateAnd(a, b)
{
    if (a == 1 && b == 1)
    {
        return "Both True";
    }
    else
    {
        return 0;
    }
}

function gateNand(a, b)
{
    /*
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 0) ||
        (a == 0 && b == 1))
    */

    if (a == 0 || b == 0)
    {
        return "Both False or A True or B True"
    }
    else
    {
        return 0;
    }
}

function gateOr(a, b)
{
    /*
    if ((a == 1 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 1))
    */

    if (a == 1 || b == 1)
    {
        return "One or Both True";
    }
    else
    {
        return 0;
    }
}

function gateNor(a, b)
{
    if (a == 0 && b == 0)
    {
        return "Both False";
    }
    else
    {
        return 0;
    }
}

function gateXor(a, b)
{
    if ((a == 1 && b == 0) ||
        (a == 0 && b == 1))
    {
        return "A True or B True";
    }
    else
    {
        return 0;
    }
}

function gateXnor(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 1))
    {
        return "Both False or Both True";
    }
    else
    {
        return 0;
    }
}

function gateCi(a, b)
{
    /*
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    */

    if (a == 1 || b == 0)
    {
        return "Both False or A True or Both True";
    }
    else
    {
        return 0;
    }
}

function gateCni(a, b)
{
    if (a == 0 && b == 1)
    {
        return "B True";
    }
    else
    {
        return 0;
    }
}

function gateMi(a, b)
{
    /*
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 1))
    */

    if (a == 0 || b == 1)
    {
        return "Both False or B True or Both True";
    }
    else
    {
        return 0;
    }
}

function gateMni(a, b)
{
    if (a == 1 && b == 0)
    {
        return "A True";
    }
    else
    {
        return 0;
    }
}

function gateRp(a, b)
{
    if ((a == 0 && b == 1) ||
        (a == 1 && b == 1))
    {
        return "B True or Both True";
    }
    else
    {
        return 0;
    }
}

function gateRc(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 0))
    {
        return "Both False or A True";
    }
    else
    {
        return 0;
    }
}

function gateLp(a, b)
{
    /*
    if ((a == 1 && b == 0) ||
        (a == 1 && b == 1))
    */

    if (a == 1)
    {
        return "A True or Both True";
    }
    else
    {
        return 0;
    }
}

function gateLc(a, b)
{
    /*
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1))
    */

    if (a == 0)
    {
        return "Both False or B True";
    }
    else
    {
        return 0;
    }
}

function gateTautology(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return "One or Both False or True";
    }
    else
    {
        return 0;
    }
}

function gateContradiction(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return "One or Both False or True. Negative Message is placed here, or we can leave it blank";
    }
    else
    {
        return 0;
    }
}

