/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      text
      tags
      links
      explanation
      answers {
        items {
          id
          text
          correct
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
      version
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        tags
        links
        explanation
        answers {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      text
      correct
      question {
        id
        text
        tags
        links
        explanation
        answers {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      createdAt
      updatedAt
      version
    }
  }
`;
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        correct
        question {
          id
          text
          tags
          links
          explanation
          createdAt
          updatedAt
          version
        }
        createdAt
        updatedAt
        version
      }
      nextToken
    }
  }
`;
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      title
      questions {
        items {
          id
          text
          tags
          links
          explanation
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
      version
    }
  }
`;
export const listQuizzes = /* GraphQL */ `
  query ListQuizzes(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        questions {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      nextToken
    }
  }
`;
