/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
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
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
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
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
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
