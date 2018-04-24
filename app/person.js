
class Person {
    constructor(name) {
        this.name = name;
    }
    sleep(hours) {
        return `<h1>I sleep for ${hours} hours each night.</h1>`;
    }
    drink(beverage) {
        return `<h1>I love drinking ${beverage}</h1>`;
    }
    speak(message) {
        return `<h1>${message} I say!</h1>`
    }
}

class SuperPerson extends Person {
    constructor(name, heroName) {
        super();
        this.heroName = heroName
    }

    sayHeroName() {
        return this.speak(`I'm a super hero named ${this.heroName}`)
    }

    xRay() {
        return this.speak("I can see into buildings!")
    }
}

export default SuperPerson;

