/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
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
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
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
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
