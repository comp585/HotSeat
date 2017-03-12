import React, { Component } from 'react';
import { Container, Button, Text, Grid, Row, Col, Footer, FooterTab } from 'native-base';
import { View, Text as RNText } from 'react-native';

class ResultScreen extends Component {
  returnToMain() {
    this.props.navigator.push({
      name: 'Round',
    });
  }

  componentWillMount() {
    if (this.props.p1 === 3 || this.props.p2 === 3) {
      this.props.navigator.push({
        name: 'Victory',
        passProps: {
          victoryText: (this.props.p1 === 3 ? 'Player 1 Wins!' : 'Player 2 Wins!'),
        }
      });
    }
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }} >
          <Grid>
            <Row size={1} />
            <Row size={1}>
              <Col>
                <RNText
                  style={{
                    fontSize: 48,
                    textAlign: 'center',
                  }}
                >
                  {this.props.won ? 'Continue' : 'Switch Roles'}
                </RNText>
              </Col>
            </Row>
          </Grid>
          <Footer>
            <FooterTab>
              <Button
                full
                onPress={() => this.returnToMain()}
              >
                <Text>
                  Continue
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    );
  }
}

export default ResultScreen;
