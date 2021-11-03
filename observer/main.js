class Subject {
    constructor() {
        this.observers = []
    }
    suscribe(observer) {
       this.observers.push(observer) 
    }
    unsuscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }
    notify(obj) {
        this.observers.forEach(observer => {
            observer.notify(obj)
        })
    }
}