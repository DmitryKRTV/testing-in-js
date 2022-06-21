export function summ(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentence: string) {
    const words = sentence.toLowerCase().split(" ")
    return(words.filter(i=> i !== "" && i !== "-").map(i=>i
                .replace("!", "")
                .replace("-", "")
                .replace(",", "")
            )
    )
}
