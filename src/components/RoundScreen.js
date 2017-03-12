import React, { Component } from 'react';
import { View, Text as RNText } from 'react-native';
import { Container, Content, Button, Text, Card, CardItem, Body, Footer, FooterTab, Header, Title } from 'native-base';

const textStyle = {
  fontSize: 24,
};

class RoundScreen extends Component {
  onNext() {
    this.props.navigator.push({
      name: 'Topic',
    });
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <Header>
            <Body>
              <Title>
                {`Round ${this.props.round}`}
              </Title>
            </Body>
          </Header>
          <Card>
            <CardItem
            >
              <Body>
                {this.props.roleSwapped ?
                  <RNText style={textStyle}>Teller: Player 2</RNText> : <RNText style={textStyle}>Teller: Player 1</RNText>}
                <RNText style={textStyle}>
                  {`Player 1 Score: ${this.props.p1}`}
                </RNText>
                <RNText style={textStyle}>
                  {`Player 2 Score: ${this.props.p2}`}
                </RNText>
              </Body>
            </CardItem>
          </Card>
          <Footer>
            <FooterTab>
              <Button onPress={() => this.onNext()}>
                <Text>
                  Start
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    );
  }

}

export default RoundScreen;
