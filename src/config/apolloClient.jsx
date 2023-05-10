import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://fair-adder-58.hasura.app/v1/graphql",
    cache: new InMemoryCache({ addTypename: false }),
    headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
            "GqJL4775LI0vkwf6WBKz2rx90FBUgxmyq5oZsEScY6SeH3MpLT0sbAX9IvlZ2bD8",
    },
});
