import React, { Component } from 'react';
import { Container, Header, Title, Content, Body, Button, Text, Footer, FooterTab } from 'native-base';

class StartScreen extends Component {
  startGame() {
    this.props.navigator.push({
      name: 'Round',
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              Hot Seat
            </Title>
          </Body>
        </Header>

        <Content />

        <Footer>
          <FooterTab>
            <Button
              full
              onPress={() => this.startGame()}
            >
              <Text>New Game</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default StartScreen;
