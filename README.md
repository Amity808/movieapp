## Getting Started


## Features

**1 Homepage - Display Top 10 Movies**
On the homepage, the app display the top 10 movies. And it was displayed in a grid layout with their movie posters. Each movie card display the movie title and release date.

**Implementation Notes:**

- Movie Card Component: Use a data-testid attribute of movie-card for the movie card component.

- Movie Poster: Use a data-testid attribute of movie-poster for the movie poster.
- Movie Title: Use a data-testid attribute of movie-title for the movie title.
- Movie Release Date: Use a data-testid attribute of movie-release-date for the movie release date.
**2. Movie Search**

Movie Search
Implemented a search feature that allows users to search for movies by title. Display search results, including movie posters, titles, and release dates. And Also added a loading indicator while fetching search results.

**Implementation Notes:**
- Use a search bar to allow users to input their search queries.
- Display search results in a grid layout similar to the homepage.
- Show a loading indicator while fetching search results.
- Implement the following data-testid attributes for search elements:

**3. Movie Details**
When a user navigates to the /movies/:id route (where :id is the movie's ID), they should see the movie details page. The movie details page display the following information:

- Movie Title
- Release Date (in UTC)
- Runtime (in minutes)

Implementation Notes:

- Fetch movie details by ID from the TMDB API using the provided endpoint: https://api.themoviedb.org/3/movie/{movie_id}


**API Integration**
Consumed the TMDB API to fetch movie data. Use the provided API endpoints for fetching movie details. Ensure that the API integration is robust and handles failures gracefully.

Error Handling
Implement error handling to display meaningful error messages to users in case of API failures or other issues. Users should be informed if there are problems fetching data from the TMDB API or if there are other errors within the app.

Getting Started
To get started with the movie app, follow these steps:

Start the development server using npm start or yarn start.
Additional Notes
Ensure that you have a TMDB API key to access movie data. You can obtain one by signing up on the TMDB website.
Consider using a state management library like Redux to manage movie data and user interactions.
CSS framework Tailwind was used to style the components and layout.

### Clone the repo
```
git clone https://github.com/Amity808/movieapp
```
### Install the necessary dep

```
npm install
```

Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Hosted Link
[MovieApp](https://movieapp-git-main-amity808.vercel.app/)

