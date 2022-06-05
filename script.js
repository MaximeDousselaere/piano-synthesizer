
    // vars
    let context = new AudioContext();
    let o = context.createOscillator();
    let type = "sine";

    onInit();

    // bind sounds to keys
    function onInit(){
        let data = [{key : 'q', frequency:523.3},
                    {key : 's', frequency:554.4},
                    {key : 'd', frequency:587.3},
                    {key : 'f', frequency:622.3},
                    {key : 'g', frequency:659.3},
                    {key : 'h', frequency:698.5},
                    {key : 'j', frequency:740.0},
                    {key : 'k', frequency:784.0},
                    {key : 'l', frequency:830.6},
                    {key : 'm', frequency:880.0}];

        for(let element of data){
            document.addEventListener('keydown', (e) => {
                if ((!e.repeat) && (e.key.toLowerCase() == element.key)){
                    onPlayFrequency(element.frequency);
                    console.log(e.key);
                }
            });
        }
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
        // Stop 
        onStop(2);
    }

    function onStop(fade){
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + fade);
    }

    function onChangeType(localType){
        console.log('Type changed : ', localType);
        type = localType;
    }