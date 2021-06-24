const changeCardLink = (state = 'https://api.themoviedb.org/3/movie/popular?api_key=798a9399b2bdd848aeb911f6a7b11d5a', action) => {
    switch (action.type) {
        case "Trending": return state = "https://api.themoviedb.org/3/trending/all/week?api_key=798a9399b2bdd848aeb911f6a7b11d5a";
        case "tvEpisodes": return state = 'https://api.themoviedb.org/3/discover/tv?api_key=798a9399b2bdd848aeb911f6a7b11d5a';
        case "Movies": return state = "https://api.themoviedb.org/3/movie/popular?api_key=798a9399b2bdd848aeb911f6a7b11d5a";
        default: return state;
    }
}


export default changeCardLink