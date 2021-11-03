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

class ItemSubject extends Subject {
    constructor() {
        super()
        this.items = []
    }
    notify(item) {
        this.items.push(item)
        super.notify(this)
    }
}

class ListObserver {
    notify(subject) {
        console.log('Observer List')
        subject.items.forEach(elem => console.log(elem))
    }
}


class TotalAmout {
    notify(subject) {
        const total = subject.items.reduce((acc, total) => acc + total.amout, 0)
        console.log(total)
    }
}


const famous = new ItemSubject()
const fan1 = new ListObserver()
const fan2 = new ListObserver()

const total = new TotalAmout()

famous.suscribe(fan1);
famous.suscribe(fan2);

famous.suscribe(total);

famous.notify({
    post: 'Hello People',
    amout: 40
})
