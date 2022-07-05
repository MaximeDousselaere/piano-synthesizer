
    // vars
    let context = new AudioContext();
    let o = context.createOscillator();
    let type = "sine";
    let tiles = document.getElementById("tiles");
    let keyz = document.getElementById("keyz");
    let lang = "fr"
    // Executé par défaut.
    onInitFrench();

    // bind sounds to keys
    function onInitFrench(){
        let data = [
                    {key : 'w', frequency:523.251, isBlack:false, latin:'Do4', midi : 'C4'},
                    {key : 's', frequency:554.365, isBlack:true, latin:'Do4#', midi : 'C#4'},
                    {key : 'x', frequency:587.33, isBlack:false, latin:'Ré4', midi : 'D4'},
                    {key : 'd', frequency:622.254, isBlack:true, latin:'Ré4#', midi : 'D#4'},
                    {key : 'c', frequency:659.255, isBlack:false, latin:'Mi4', midi : 'E4'},
                    {key : 'v', frequency:698.456, isBlack:false, latin:'Fa4', midi : 'F4'},
                    {key : 'g', frequency:739.989, isBlack:true, latin:'Fa4#', midi : 'F#4'},
                    {key : 'b', frequency:793.991, isBlack:false, latin:'Sol4', midi : 'G4'},
                    {key : 'h', frequency:830.609, isBlack:true, latin:'Sol4#', midi : 'G#4'},
                    {key : 'n', frequency:880, isBlack:false, latin:'La4', midi : 'A4'},
                    {key : 'j', frequency:939.238, isBlack:true, latin:'La4#', midi : 'A#4'},
                    {key : ',', frequency:987.767, isBlack:false, latin:'Si4', midi : 'B4'},
                    {key : ';', frequency:1046.5, isBlack:false, latin:'Do5', midi : 'C5'},
                    {key : 'k', frequency:1108.73, isBlack:true, latin:'Do5#', midi : 'C#5'},
                    {key : ':', frequency:1174.66, isBlack:false, latin:'Ré5', midi : 'D5'},
                    {key : 'l', frequency:1244.51, isBlack:true, latin:'Ré5#', midi : 'D#5'},
                    {key : '!', frequency:1318.51, isBlack:false, latin:'Mi5', midi : 'E5'},
                    ];
        tiles.innerHTML = "";
        keyz.innerHTML = "";
        document.cloneNode(true);
        for(let element of data){
            // Insert DOM tiles 
            let tile = document.createElement("div");
            tile.classList.add(element.isBlack ? "tileBlack" : "tile");
            tile.id = element.key;
            tile.innerHTML = element.latin;
            tiles.appendChild(tile);
            // Keyz
            let key = document.createElement("div");
            key.classList.add(element.isBlack ? "keyBlack" : "key");
            key.innerHTML = element.key.toUpperCase();
            keyz.appendChild(key);
            // Eventlistener
            document.addEventListener('keydown', (e) => {
                if ((!e.repeat) && (e.key.toLowerCase() == element.key)){
                    onPlayFrequency(element.frequency);
                    onTilePressed(e.key.toLowerCase(), element.isBlack);
                }
            });
        }
    }

    function onTilePressed(id, isBlack){
        let tile = document.getElementById(id);
        tile.classList.remove(isBlack ? "tileBlack" : "tile");
        tile.classList.add(isBlack ? "tileBlackPressed" : "tilePressed");
        setTimeout(() => {
            tile.classList.remove(isBlack ? "tileBlackPressed" : "tilePressed");
            tile.classList.add(isBlack ? "tileBlack" : "tile");
        }, 250);
    }

    function onPlayFrequency(frequency){
        context = new AudioContext();
        o = context.createOscillator();
        g = context.createGain();
        o.type = type;
        o.frequency.value = frequency;
        o.connect(g);
        g.connect(context.destination);
        o.start(0);
        onStop(2);
    }

    function onStop(fade){
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + fade);
    }

    function onChangeType(localType){
        type = localType;
        document.getElementById("sine").setAttribute("style", "border:3px solid #a77676");
        document.getElementById("square").setAttribute("style", "border:3px solid #a77676");
        document.getElementById("triangle").setAttribute("style", "border:3px solid #a77676");
        document.getElementById("sawtooth").setAttribute("style", "border:3px solid #a77676");
        document.getElementById(type).setAttribute("style", "border:3px solid #ffffff");
    }

    function onChangeLangue(){
        if(lang=="fr"){
            lang = "en";
            onInitEnglish();
        }
        else{
            lang = "fr";
            onInitFrench();
        }
    }


/* Gestion anglais les gros relous là */

// bind sounds to keys
function onInitEnglish(){
    let data = [    
                {key : 'z', frequency:523.251, isBlack:false, latin:'Do4', midi : 'C4'},
                {key : 's', frequency:554.365, isBlack:true, latin:'Do4#', midi : 'C#4'},
                {key : 'x', frequency:587.33, isBlack:false, latin:'Ré4', midi : 'D4'},
                {key : 'd', frequency:622.254, isBlack:true, latin:'Ré4#', midi : 'D#4'},
                {key : 'c', frequency:659.255, isBlack:false, latin:'Mi4', midi : 'E4'},
                {key : 'v', frequency:698.456, isBlack:false, latin:'Fa4', midi : 'F4'},
                {key : 'g', frequency:739.989, isBlack:true, latin:'Fa4#', midi : 'F#4'},
                {key : 'b', frequency:793.991, isBlack:false, latin:'Sol4', midi : 'G4'},
                {key : 'h', frequency:830.609, isBlack:true, latin:'Sol4#', midi : 'G#4'},
                {key : 'n', frequency:880, isBlack:false, latin:'La4', midi : 'A4'},
                {key : 'j', frequency:939.238, isBlack:true, latin:'La4#', midi : 'A#4'},
                {key : 'm', frequency:987.767, isBlack:false, latin:'Si4', midi : 'B4'},
                {key : ',', frequency:1046.5, isBlack:false, latin:'Do5', midi : 'C5'},
                {key : 'k', frequency:1108.73, isBlack:true, latin:'Do5#', midi : 'C#5'},
                {key : '.', frequency:1174.66, isBlack:false, latin:'Ré5', midi : 'D5'},
                {key : 'l', frequency:1244.51, isBlack:true, latin:'Ré5#', midi : 'D#5'},
                {key : '/', frequency:1318.51, isBlack:false, latin:'Mi5', midi : 'E5'},
                ];
    tiles.innerHTML = "";
    keyz.innerHTML = "";  
    document.cloneNode(true);              
    for(let element of data){
        // Insert DOM tiles 
        let tile = document.createElement("div");
        tile.classList.add(element.isBlack ? "tileBlack" : "tile");
        tile.id = element.key;
        tile.innerHTML = element.midi;
        tiles.appendChild(tile);
        // Keyz
        let key = document.createElement("div");
        key.classList.add(element.isBlack ? "keyBlack" : "key");
        key.innerHTML = element.key.toUpperCase();
        keyz.appendChild(key);
        // Eventlistener
        document.addEventListener('keydown', (e) => {
            if ((!e.repeat) && (e.key.toLowerCase() == element.key)){
                onPlayFrequency(element.frequency);
                onTilePressed(e.key.toLowerCase(), element.isBlack);
            }
        });
    }
}