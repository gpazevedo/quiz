# Playing with AppSync
Learn to make the best use of AWS managed services to build a GraphQL API React app.

### Introduction
This is a simple serverless application based on a GraphQL API.
The frontend is a React app that consumes a GraphQl API.
The backend runs on AWS and provides this GraphQL API.

AppSync provides a transformation layer to talk to DynamoDB,
ElasticSearch, and other services through custom AWS Lambdas functions.
So, with AppSync, our web service is separated into
static files, which are coming out of Amazon S3
and optionally through CloudFront, and GraphQL Queries,
which are the API calls to the service.
Those hit AppSync, and then, AppSync has Resolvers that
take the GraphQL Queries and hit the correct backends.
We can use ElasticSearch if we want to provide
search features like searching over information
about images, searching for other users, that sort of thing,
and then DynamoDB as the noSQL store.
All of these services, except for the custom Lambda Resolver are auto-managed.
AWS scales DynamoDB, ElasticSearch, RDS, etc.

In summary, our users make Queries to our API, which is run by AppSync.
AppSync goes to our data sources, which are ElasticSearch, DynamoDB,
or RDS or our Lambda custom Resolvers and then,
puts that data together and sends it to a client.

So an API is all of those components that
AppSync is managing for us to provide our GraphQL schema.
A Data Source is any of these providers, so, DynamoDB,
ElasticSearch, via Lambda.
The Resolver is the transformation between the format the data is stored in and 
the data that we're going to be using in our app.

When a request comes into our API, we have the user
making the GraphQL Query, AppSync reads the Query and
decides what Resolver to use.
The Resolver then uses Velocity Template Language to
build the Query for the data store, our case, DynamoDB, 
and then DynamoDB sends data back to the Resolver.
The Resolver reformats it, sends it to AppSync,
and then AppSync sends that data to our user application,
and the only custom thing that we are writing here is the DynamoDB schema
and the Velocity Template Language Resolver.
Everything else, AppSync is providing for us.

### Backend
AWS Mobile is a bunch of tools including command-line tools, 
client SDKs and the UI components that help us 
build apps for mobile, web, IoT, chat, all kinds of things.

AWS Amplify is the CLI to deploy our application,
and help us create our AWS resources.

Cognito includes social auth, it will provide credentials to social logins,
to access AWS services like DynamoDB or AppSync.
And it also has features for storing users.
So we can have our own user of parole Incognito,
and they can set passwords and everything like that.
It even gives us the tools to provide two-factor authentication
and UI components to deal with login for our app.

AWS AppSync provides data source integrations allowing us to build GraphQL backend,
and it also lets us do custom code through AWS Lambda.

Lambda runs serverless functions on demand.

API Gateway which lets we build HTTPS APIs
and layers between our web app and Lambda functions.

AppSync is a higher-level way to deal with similar things the API Gateway does,
but through GraphQL.

DynamoDB is a no SQL data store.

SNS pinpoints for those asynchronous interactions with our users.
When something happens and we want to text them
or send a push notification, we will be using SNS
or Pinpoint to get that message to their device.

### Frontend
React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

The entry point to our application is App.js. 
It has all of the imports for Amplifying React libraries, including the authentication.
And it also imports the custom components that we built,
and wraps the whole app in that authenticator component.

The interaction with the GraphQL API is done through the AWS Amplify.
AWS Amplify permits that my React app uses the GraphQL API, the same way,
when it is running locally or running inside AWS. 

In our app, we have five components, we have QuizPicker, Quizzes,
which contain Questions, Quizinput, and QuestionForm.

QuizPicker is a drop-down for selecting Quizzes.
A Quiz is a collection of Questions and it records what Questions have been answered.
A Question is a single question and allows users to select its answer.
The Quizinput renders the form for adding a Question and submits that input to AppSync.
And the QuestionForm is just the form layout and can record data
and it submits that data back up to Quizinput when quiz input asks for it.

Amplify provides the Connect component.
It connects our React app for rendering to the AppSync service.
The Connect component has a very simple job.
It fetches data for us and makes it available
when it comes back from AppSync.
So it asynchronously will make API calls to AppSync
using the authentication credentials
and bring that data back to us

The app runs locally and on AWS:

http://quizbiz-20200620203655-hostingbucket-dev.s3-website-us-east-1.amazonaws.com/

