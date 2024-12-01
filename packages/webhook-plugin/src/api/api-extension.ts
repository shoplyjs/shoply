import gql from 'graphql-tag';

export const adminApiExtensions = gql`
    type Webhook implements Node {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        event: String!
        url: String!
        method: String!
        clientType: String
        headers: [String]
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
        event: String!
        url: String!
        method: String!
        clientType: String
        headers: [String]
    }

    input UpdateWebhookInput {
        id: ID!
        event: String
        url: String
        method: String
        clientType: String
        headers: [String]
    }
`;
