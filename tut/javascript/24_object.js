const proto = {
    greet: function () {
        console.log(`Hello, I'm ${this.name}`);
    }
}

proto.greet();

const person = Object.create(proto);