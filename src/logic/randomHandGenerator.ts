import { HandSchema, barajaEspañolaType, CardTypos, SingleCardType, Decks } from '../schema/CardSchema';

/** Pick a random number between 0 and 4 */
const getRandomPalo = (): barajaEspañolaType => {
    const number = Math.floor(Math.random() * 4)

    let randomPalo: barajaEspañolaType = "";

    switch (number) {
        case 0:
            randomPalo = "basto";
            break;
        case 1:
            randomPalo = "oro";
            break;
        case 2:
            randomPalo = "espada";
            break;
        case 3:
            randomPalo = "copa";
            break;
        default:
            break;
    }

    return randomPalo;
};

/** Pick a random number between 1 and 12 (8 and 9 not included) */
const randomNumberToPickCards = (deck: Decks): number => {
    const numberOfCards = {
        spanish: 10,
        poker: 14
    }
    return Math.floor(Math.random() * (numberOfCards[deck]))
};


export const generateHand = (numberOfCards: number): SingleCardType[] => {
    const hand = [];
    const selectedCards = new Set<string>();

    while (hand.length < numberOfCards) {
        const randomPalo = getRandomPalo();
        const randomCardNumber = randomNumberToPickCards("spanish");
        const pickedCard = HandSchema[randomPalo as keyof CardTypos][randomCardNumber];

        // creating a new ID for each card 
        const cardKey = `${pickedCard.type}-${pickedCard.number}`;

        // Checking if the ID already exist
        if (!selectedCards.has(cardKey)) {
            selectedCards.add(cardKey);
            hand.push({
                ...pickedCard,
                type: randomPalo,
                name: `${pickedCard.number} de ${randomPalo}`,
            });
        }
    }

    return hand;
}
