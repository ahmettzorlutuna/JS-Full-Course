function MotherBoard(name) {
    this.name = name
    this.type = 'Hardware'
    this.price = '$4500'
}

function GraphicCard(name) {
    this.name = name
    this.type = 'Software'
    this.price = '$2200'
}

function ComputerFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new MotherBoard(name)
                break;
            case 2:
                return new GraphicCard(name)
                break;
        }
    }
}

function showPrice(){
    console.log(this.name + ' price is ' + this.price)
}

const computerFactory = new ComputerFactory()
const parts = []
parts.push(computerFactory.create('MSI',1))
parts.push(computerFactory.create('Nvidia',2))

parts.forEach(part=>{
    console.log(part.name,part.type);
    showPrice.call(part);
})



