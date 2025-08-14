// মুভি ডেটা অ্যারে
const movies = [
    {
        image: "picture/maxresdefault.jpg",
        title: "Her",
        description: "In a future where technology has advanced beyond our wildest dreams.",
        buttonText: "WATCH"
    },
    // আরো মুভি এখানে অ্যাড করতে পারেন
    {
        image: "picture/another-movie.jpg",
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
        buttonText: "PLAY"
    }
];

// মুভি কন্টেইনার সিলেক্ট করুন
const movieContainer = document.getElementById('movieContainer');

// প্রতিটি মুভির জন্য HTML এলিমেন্ট তৈরি করুন
movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie-list-item';
    
    movieElement.innerHTML = `
        <img class="movie-list-item-img" src="${movie.image}" alt="${movie.title}">
        <span class="movie-list-item-title">${movie.title}</span>
        <p class="movie-list-item-desc">${movie.description}</p>
        <button class="movie-list-item-button">${movie.buttonText}</button>
    `;
    
    movieContainer.appendChild(movieElement);
});