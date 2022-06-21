import {multiply, splitIntoWords, summ} from "./01";

test("sum should be correct", ()=>{

    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = summ(a,b)
    const result2 = summ(a,c)

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(4);
})

test("multiply should be correct", ()=>{

    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = multiply(a,b)
    const result2 = multiply(a,c)

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(3);
})

test("splitting should be correct", ()=>{

    //data
    const sentence1 = "Hello my friends";
    const sentence2 = "Js - the best programming language";

    //action
    const result1 = splitIntoWords(sentence1)
    const result2 = splitIntoWords(sentence2)

    //expect result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");

})

