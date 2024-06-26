import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
interface Props {
  children: string;
}
const ExapandableText = ({ children }: Props) => {
  const [expanded, setExapanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + '... ';

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExapanded(!expanded)}
        marginLeft={1}
      >
        {expanded ? 'Show Less' : 'Read more'}
      </Button>
    </Text>
  );
};

export default ExapandableText;
