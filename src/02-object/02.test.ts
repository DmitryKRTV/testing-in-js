import {CityTitle} from "./02-01";

let city: CityTitle;

beforeEach(() => {
    city = {
        title: "New Your",
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 1,
                street: {
                    title: "strin12g"
                }
            },
        }, {
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 2,
                street: {
                    title: "strin12g"
                }
            },
        }, {
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 3,
                street: {
                    title: "strin12g"
                }
            },
        }],
        govermentBuildings: [{
            isStoleMoney: true,
            howManyMoneyInCity: {
                cityTitle: "Minsk",
                moneyNumber: 100,
            },
        }, {
            isStoleMoney: true,
            howManyMoneyInCity: {
                cityTitle: "Nov",
                moneyNumber: 100
            },
        }],
        citizenNumber: 1000000,
    }
})

test("test city should have 1 house", () => {
    expect(city.houses.length).toBe(3);
    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(1)
    expect(city.houses[0].address.street.title).toBe("strin12g")
})

test("test our government", () => {
    expect(city.govermentBuildings.length).toBe(2);
    expect(city.govermentBuildings[0].isStoleMoney).toBe(true);
    expect(city.govermentBuildings[0].howManyMoneyInCity.cityTitle).toBe("Minsk");
    expect(city.govermentBuildings[0].howManyMoneyInCity.moneyNumber).toBe(100);
})

