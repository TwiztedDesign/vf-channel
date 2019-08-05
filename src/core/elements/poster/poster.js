import VFChannelHTMLElmenet from "../vfChannelHTMLElement";

export default class Poster extends VFChannelHTMLElmenet {
    constructor(...args) {
        super(...args);
        this.obj = window.vfchannel.content.getPoster();
    }

    connectedCallback() {
        //this is the HTML element - 'vfchannel-poster'
        this.style.display = 'block';
        this.innerHTML = '<div class="poster"></div>';
        // this._update();
    }

    refresh(){
        this.innerHTML = '<div class="poster-refresh"></div>';
    }

    // _update(){
    //     this.innerHTML = '<div class="poster-updating"></div>';
    // }

    // start(){
    //     this.interval.start();
    // }
    // stop(){
    //     this.interval.stop();
    // }
    // set(time){
    //     this._time = time;
    // }
    // get(){
    //     return this._time;
    // }
    // format(){
    //     return this._time;
    // }
    // init(){
    //     return 0;
    // }
    // onInterval(i){
    //     this._time += i;
    // }
    // get autorun(){
    //     return this.getAttribute("autorun") === 'true' || this.getAttribute("autorun") === '';
    // }

    // get run(){
    //     return this.running;
    // }
    // set run(value){
    //     this.running = value;
    //     this.running? this.start() : this.stop();
    //     this.dispatchEvent(new Event(value? "start" : "stop"));
    // }
    // get show(){
    //     return this._visibility;
    // }
    // set show(value){
    //     this._visibility = value;
    //     this.style.display = value? 'block' : 'none';
    // }

    // expose(){
    //     return {
    //         visibility : 'show',
    //         run : 'run'
    //     };
    // }
    // options(){
    //     return {
    //         updateOn : 'control'
    //     };
    // }

}