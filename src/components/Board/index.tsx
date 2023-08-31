import { Box, Container, Typography } from '@mui/material'
import { Card } from '../Card'
import { generateHand } from '../../logic/randomHandGenerator';

export const Board = () => {
    const numberOfCardsInTheHand = 3;
    const cards = generateHand(numberOfCardsInTheHand) ?? [];
    console.log(generateHand(3))

    return (
        <Box
            component="footer"
            sx={{ py: 3, px: 2, mt: "auto" }}
        >
            <Container maxWidth="sm">
                <Typography variant="body1">
                    This is the board
                </Typography>
                <Box display="flex">
                    {cards.length ? cards.map(card => <Card title={card.name} />) : <Typography>an error has ocurred</Typography>}
                </Box>
            </Container>
        </Box>
    )
}