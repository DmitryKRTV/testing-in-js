type CityTitle  = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityTitle
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

type TechnologiesType = {
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    "name": "Dmitry",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Petra",
        city :  {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.address)
console.log(student.technologies[2].title)

