import React, { Component } from 'react';
import { Container, Content, Button, Text, Header, Body, Title } from 'native-base';
import { getTopics, getQuestions } from '../api';


class TopicScreen extends Component {
  showQuestions(questions) {
    this.props.navigator.push({
      name: 'Assign',
      passProps: {
        questions,
      },
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
    this.setState({
      topics: getTopics(),
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Title>
                Topics
              </Title>
            </Body>
          </Header>

          {this.state.topics.map((topic, index) => {
            return (
              <Button
                full
                key={index}
                onPress={() => this.showQuestions(getQuestions(topic))}
              >
                <Text>
                  {topic}
                </Text>
              </Button>
            );
          })}
        </Content>
      </Container>
    );
  }
}

export default TopicScreen;
