export type SingleCardType = { number: number, type: string, name: string }
export type CardTypos = {
    basto: SingleCardType[],
    espada: SingleCardType[],
    oro: SingleCardType[],
    copa: SingleCardType[]
}
export type Decks = "spanish"
export type barajaEspañolaType = "basto" | "copa" | "oro" | "espada" | ""

const barajaEspañolaSchema = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 10 },
    { number: 11 },
    { number: 12 }
]

export const HandSchema: CardTypos = {
    basto: barajaEspañolaSchema.map(card => Object.assign(card, { type: "basto", name: `${card.number} de basto` })),
    espada: barajaEspañolaSchema.map(card => Object.assign(card, { type: "espada", name: `${card.number} de espada` })),
    oro: barajaEspañolaSchema.map(card => Object.assign(card, { type: "oro", name: `${card.number} de oro` })),
    copa: barajaEspañolaSchema.map(card => Object.assign(card, { type: "copa", name: `${card.number} de copa` }))
}