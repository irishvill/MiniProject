// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Start coding here...
const topRatedMovies = movies.filter(movie => movie.rating >= 8);
    const filteredTitles = topRatedMovies.map(m => m.title).join(", ");
    document.getElementById("filteredMovies").innerHTML = filteredTitles;

    // Task 2: Create formatted movie descriptions
    const movieDescriptions = movies.map(
      ({ title, genre, rating }) => `${title} (${genre}) - ${rating} ⭐`
    );
    document.getElementById("movieDescriptions").innerHTML = movieDescriptions.join("<br>");

    // Task 3: recommend() function
    const recommend = (movie, minRating = 8) => movie.rating >= minRating;

    // Sample usage for all movies
    const recommendations = movies.map(
      movie => `${movie.title}: ${recommend(movie) ? "✅ Recommended" : "❌ Not Recommended"}`
    );
    document.getElementById("recommendationOutput").innerHTML = recommendations.join("<br>");