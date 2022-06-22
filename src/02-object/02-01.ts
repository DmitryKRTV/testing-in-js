export type StreetType = {
    title: string
}


export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovType = {
    isStoleMoney: true
    howManyMoneyInCity: ManyMoneyInCityType
}

export type ManyMoneyInCityType = {
    cityTitle: string
    moneyNumber: number
}


export type CityTitle = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<GovType>
    citizenNumber: number
}