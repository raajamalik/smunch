import { gql } from "@apollo/client";

/**
 * ME query is used to get the current user's information. It should be used 
 * only after the authentication is successfull. 
 */
export const ME = gql`
  query me($userInput: UserInput!) {
    me(userInput: $userInput) {
      id
      firstName
      lastName
      email
      addresses {
        id
        street
        city
        state
      }
    }
  }
`;

/**
 * TOP_PICK_QUERY is used to get the top 3 restaurant which are popular these days.
 */
export const TOP_PICK_QUERY = gql`
  query topPick {
    topPick {
      id
      name
      averageRating
      latestReview 
    }
  }
`;

/**
 * USER_REVIEWS_QUERY is used to get the reviews of the current user.
 * The reviews are sorted by the latest review first.
 */
export const USER_REVIEWS_QUERY = gql`
  query userReviews($userReviewInput: UserReviewInput!) {
    userReviews(userReviewInput: $userReviewInput) {
      id
      rating
      title
      content
    }
  }
`;

/**
 * SEARCH_QUERY is used to get the restaurants based on the search criteria.
 * THE SEARCH_CRITERIA can be either restaurant name or cuisine type.
 */
export const SEARCH_QUERY = gql`
  query search($searchInput: SearchInput!) {
    search(searchInput: $searchInput) {
      id
   	  name
      averageRating
      latestReview 
    } 
  }
`;

