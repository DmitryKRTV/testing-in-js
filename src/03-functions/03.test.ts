import {StudentType} from "../02-object/02";
import {addSkill} from "./03";

let student: StudentType;

beforeEach(()=> {
    student = {
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
})

test("new skill added", ()=> {

    addSkill(student, "JS")
    expect(student.technologies[3].title).toBe('JS')

})