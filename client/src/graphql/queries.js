import gql from "graphql-tag";

export default {
  QUERY_USERS: gql`
    query QueryUsers($queryString: String) {
      users(queryString: $queryString) {
        _id
        name
        profilePhoto
        currentPage
        currentlyReading {
          title
          coverPhoto
        }
        friendIds
        shelves {
          bookIds
        }
      }
    }
  `,
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  CACHED_USER: gql`
    query WhoDis {
      user {
        name @client
      }
    }
  `,
  BOOK_BY_ID: gql`
    query BookById($_id: ID!) {
      book(_id: $_id) {
        _id
        title
        coverPhoto
        coverType
        description
        publishDate
        publisher
        edition
        pages
        isbn
        genres
        rating
        series
        authors {
          name
          _id
          followerIds
          bookIds
          profilePhoto
          bio
        }
      }
    }
  `,
  BOOKS_BY_GENRE: gql`
    query BooksByGenre($genreString: String) {
      booksByGenre(genreString: $genreString) {
        _id
        title
        description
        coverPhoto
        authors {
          name
        }
        ratings {
          stars
        }
      }
    }
  `,
  BOOKS_BY_SERIES: gql`
    query BooksBySeries($series: String!) {
      booksBySeries(series: $series) {
        _id
        title
        description
        coverPhoto
        series
        authors {
          name
        }
        rating
      }
    }
  `,
  BOOKS_BY_AUTHOR: gql`
    query BooksByAuthor($_id: ID!) {
      booksByAuthor(_id: $_id) {
        _id
        title
        description
        coverPhoto
        series
        rating
      }
    }
  `
};
