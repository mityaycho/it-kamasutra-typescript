let age = 10;
let firstName = 'Dimych';
let isMentor: boolean = true;
let ages = [18, 12, 19, 22, 45];
let ages4: number[] = [18, 12, 19, 22, 45];
let ages2: Array<string> = ['18', '12', '19', '2', '45'];
let ages3: Array<string | number> = ['18', 12, '19', '2', '45'];

// 4
let man11: { name: string; height: number } = {name: 'Dima', height: 1.34};
let man12: { name: string; height: number } = {name: 'Sasha', height: 1.8};
let car11: { model: string; year: number } = {model: 'Reno Stepway', year: 2016};

//5
interface IMan {
    name: string;
    height: number;
    weight?: number | string;
}


let man1: IMan = {name: 'Dima', height: 1.34, weight: '70'};
let man2: IMan = {name: 'Sasha', height: 1.8};
// let car1: ICar = {model: 'Reno Stepway', year: 2016};


// 6 Создайте массив (и явно типизируйте его), в котором будут сидеть 2 элемента man1 и man2
let mans: IMan[] = [man1, man2];
let numbers: number[] = [1, 2];

//7. Добавьте явную типизацию для параметров и результирующего
// значения функции (функция имьютабельно превращает все строки
// из входящего массива в верхний регистр):

function toUpperCase(strings: string[]): number[] {
    let result = strings.map(s => Number(s));
    return result;
}

function toUpperCase2(strings: string[]): void {
    let result = strings.map(s => s.toUpperCase());
    console.log(result);
}

// 8. Добавьте строгую типизацию функции, используя те интерфейсы, которые у вас есть:
let createMan = (name: string, height: number): IMan => {
    return {
        height,
        name
    };
};

let renameMan = (man: IMan, newName: string): IMan => {
    return {
        ...man,
        name: newName
    }
};


// 9. Расширить интерфейс ICar, чтобы компилятор не ругался:
interface ICar {
    model: string;
    year: number;
    on: boolean;
    turnOn: () => void;
    rename: (model: string) => void;
}

export let createCar = (model: string, year: number): ICar => {
    return {
        model: model,
        year: year,
        on: false,
        turnOn(): void {
            this.on = true;
        },
        rename(model: string): void {
            this.model = model;
        }
    }
};

let car: ICar = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn(): void {
        this.on = true;
    },
    rename(model: string): void {
        this.model = model;
    }
};

// 10.Создайте interface IGarage и типизируйте этот кусок кода:
export interface IGarage {
    addCar: (car: ICar) => void;
    logAllCarsNames: () => void;
    getAllCars: () => ICar[];
    subscribe: (subscriber: () => void) => void;
}

export let createGarage = (): IGarage => {
    let _cars: ICar[] = [];
    let _subscriber: (() => void) | null = null;
    return {
        addCar(car) {
            _cars.push(car);
            if (_subscriber !== null) {
                _subscriber();
            }
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        },
        subscribe(subscriber: () => void): void {
            _subscriber = subscriber;
        }
    }
};

// 11.Создайте класс Car, который будем использовать для создания машинок
// (в параметрах конструкторор будет принимать модель и год)

// S O L I D

interface ITransport {
    start: () => void;
    stop: () => void;
    year: number;
}

interface IDiggable {
    dig: () => void;
}

class Mole {
    constructor(public diggableThing: IDiggable) {
    }

    dig() {
        this.diggableThing.dig();
    }
}


class Garage {
    transports: ITransport[] = [];

    put(transport: ITransport) {
        this.transports.push(transport);
    }

    repair() {
        this.transports.forEach(t => {
            t.start();
            t.stop();
            console.log(t.year > 2000 ? "100$" : "500$");
        })
    }
}

class Tractor implements ITransport, IDiggable {
    constructor(public year: number) {
    }

    start() {
        console.log('kerosin');
        console.log('kruchu herny, tolkayu');
    }

    stop() {
    }

    dig() {
    }

    color = "red"
}

class Bike implements ITransport {
    constructor(public year: number, public speed: number) {
    }

    start() {
        console.log('shlem ,');
    }

    stop() {
    }
}

class Shovel implements IDiggable {
    dig() {
        console.log("low speed")
    }
}

let g = new Garage();
g.put(new Tractor(2000));
g.put(new Bike(2012, 300));


let tractor = new Tractor(2000);
let shovel = new Shovel();

let mole = new Mole(tractor);
let mole2 = new Mole(shovel);

mole.diggableThing.dig();

class Car implements ICar {
    on: boolean = false;

    constructor(public model: string, public year: number) {
    }

    turnOn(): void {
        this.on = true;
    }

    rename(model: string): void {
        this.model = model;
    }

    stop() {
        this.on = false;
    }
}

let car1: Car = new Car("Reni", 2020);
car1.stop();
let car2 = new Car("Mers", 2019);

export default 15;