import React, { Component } from 'react';
import { Container, Content, Button, Text, Header, Body, Title } from 'native-base';
import topics from '../../data/topics';


class TopicScreen extends Component {
  showQuestions(questions) {
    this.props.navigator.push({
      name: 'Assign',
      passProps: {
        questions,
      },
    });
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

          {topics.map((topic, index) => {
            return (
              <Button
                full
                key={index}
                onPress={() => this.showQuestions(topics[index].questions)}
              >
                <Text>
                  {topic.category}
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
