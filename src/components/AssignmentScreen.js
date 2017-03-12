import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Footer, FooterTab, Button, Col, Row, Grid } from 'native-base';

class AssignmentScreen extends Component {
  constructor(props) {
    super(props);
    const rand = Math.random();
    this.state = {
      selection: (rand > 0.5),
    };
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
