import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
    query admin {
        admin {
            username
            password
        }
    }
`;

export const ADD_PROFILE = gql`
    mutation admin($object: admin_insert_input!) {
        insert_admin_one(object: $object) {
            uuid
            username
        }
    }
`;
