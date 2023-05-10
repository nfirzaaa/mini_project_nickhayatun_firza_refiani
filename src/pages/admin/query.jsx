import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query site_admin {
        site_admin {
            id
            product_name
            price
            quantity
            url
        }
    }
`;

export const ADD_PRODUCT = gql`
    mutation site_admin($object: site_admin_insert_input!) {
        insert_site_admin_one(object: $object) {
            id
            product_name
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation site_admin(
        $pk_columns: site_admin_pk_columns_input!
        $_set: site_admin_set_input!
    ) {
        update_site_admin_by_pk(pk_columns: $pk_columns, _set: $_set) {
            id
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation site_admin($id: bigint!) {
        delete_site_admin_by_pk(id: $id) {
            id
        }
    }
`;
