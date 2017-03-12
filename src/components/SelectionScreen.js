import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Col, Row, Grid, Header, Body, Title } from 'native-base';

class SelectionScreen extends Component {
  startTimer(answer) {
    this.props.navigator.push({
      name: 'Result',
      passProps: {
        won: (this.props.answer === answer),
      },
    });
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <Header>
            <Body>
              <Title>
                Investigator
              </Title>
            </Body>
          </Header>
          <Grid>
            <Col
              style={{ backgroundColor: '#635DB7' }}
            >
              <Row />
              <Row>
                <Col>
                  <Text
                    style={{
                      fontSize: 48,
                      textAlign: 'center',
                    }}
                    onPress={() => this.startTimer(true)}
                  >
                    Truth
                  </Text>
                </Col>
              </Row>
              <Row />
            </Col>
            <Col
              style={{ backgroundColor: '#00CE9F' }}
            >
              <Row />
              <Row>
                <Col>
                  <Text
                    style={{
                      fontSize: 48,
                      textAlign: 'center',
                    }}
                    onPress={() => this.startTimer(false)}
                  >
                    Lie
                  </Text>
                </Col>
              </Row>
              <Row />
            </Col>
          </Grid>
        </View>
      </Container>
    );
  }
}

export default SelectionScreen;
