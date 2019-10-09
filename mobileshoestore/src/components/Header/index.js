import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Entypo name="shopping-cart" size={24} color="#FFF" />
          <ItemCount>0</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
