class Timer {
    constructor(num){
        this.startTimer = 0
        this.endTimer = 1000 + num
        this.idTimer = null
    }
    
    _teste(){
        console.log('Oi chat')
    }

    _teste2(idTimer){
        clearInterval(idTimer)
    }

    start() {
        const idTimer = setInterval(this._teste, 1000)
        setTimeout(this._teste2, this.endTimer, idTimer)
    }
}