import { gql } from '@apollo/client';

/**
 * CREATE_REVIEW_MUTATION is used to create a new review for a restaurant.
 * The review is created by the current user.
 * The review is created for the restaurant which has only be used by user. 
 * The review is created for the restaurant which is not reviewed by the user.
 */
export const CREATE_REVIEW_MUTATION = gql`
    mutation createReview($createReviewInput: CreateReviewInput!) {
        createReview(createReviewInput: $createReviewInput) {
            authorId
            title
            content
            restaurantId
            rating
        }
    }
`;
