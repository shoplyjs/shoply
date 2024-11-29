import gql from 'graphql-tag';

export const adminApiExtensions = gql`
    type Webhook implements Node {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        name: String!
        url: String!
        method: String!
        headers: [String!]!
    }

    extend type Query {
        webhooks: [Webhook!]!
        webhook(id: ID!): Webhook
    }

    extend type Mutation {
        createWebhook(input: CreateWebhookInput!): Webhook!
        updateWebhook(input: UpdateWebhookInput!): Webhook!
        deleteWebhook(id: ID!): DeletionResponse!
    }

    input CreateWebhookInput {
        name: String!
        url: String!
        method: String!
        headers: [String!]!
    }

    input UpdateWebhookInput {
        id: ID!
        name: String
        url: String
        method: String
        headers: [String!]
    }
`;
