// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// loadSounds.js

function loadSounds()
{
    let sounds =
    [
        {
            name: 'sfx_blip_001',
            soundFileOffline: 'media/sounds/sfx_blip_001.mp4',
            soundFileOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/sfx_blip_001.mp4'
        },

        {
            name: 'sfx_warp_001',
            soundFileOffline: 'media/sounds/sfx_warp_001.mp4',
            soundFileOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/sfx_warp_001.mp4'
        }
    ];

    for (let x = 0; x < sounds.length; x++)
    {
        let theSound = ce('audio');
        if (online == false)
        {
            theSound.src = sounds[x].soundFileOffline;
        }
        else
        {
            theSound.src = sounds[x].soundFileOnline;
        }
        theSound.id = sounds[x].name;
        theSound.loop = false;
        theSound.volume = 1.0;
        ba(theSound);
    }
}

