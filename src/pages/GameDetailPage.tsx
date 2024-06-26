import { GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import CriticScore from '../components/CriticScore';
import DefinitionItem from '../components/DefinitionItem';
import ExapandableText from '../components/ExapandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshot from '../components/GameScreenshot';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        <GridItem>
          <Heading>{game?.name}</Heading>
          <ExapandableText>{game.description_raw}</ExapandableText>
          <GameAttributes game={game}></GameAttributes>
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshot gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
