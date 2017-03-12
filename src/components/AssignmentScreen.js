import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Footer, FooterTab, Button, Col, Row, Grid, Header, Body, Title } from 'native-base';

class AssignmentScreen extends Component {
  constructor(props) {
    super(props);
    const answer = (Math.random() > 0.5);
    this.state = {
      selection: answer,
    };
    props.onInit(answer);
  }

  startTimer(answer) {
    this.props.navigator.push({
      name: 'Question',
      passProps: {
        answer: this.state.selection,
        questions: this.props.questions,
      },
    });
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }} >
          <Header>
            <Body>
              <Title>
                Teller
              </Title>
            </Body>
          </Header>
          <Grid>
            <Row />
            <Row>
              <Col>
                <Text
                  style={{
                    fontSize: 48,
                    textAlign: 'center',
                  }}
                >
                  {this.state.selection ? 'Tell a Truth' : 'Tell a Lie'}
                </Text>
              </Col>
            </Row>
            <Row />
          </Grid>
          <Footer>
            <FooterTab>
              <Button onPress={() => this.startTimer(this.state.selection)}>
                <Text>
                  Proceed
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    );
  }
}

export default AssignmentScreen;
