document.addEventListener('DOMContentLoaded', () => {
    const userId = 1; // Specify the user ID

    // Fetch user details
    fetchUserDetails(userId)
        .then(user => {
            // Fetch user posts
            return fetchUserPosts(userId)
                .then(posts => ({ user, posts }));
        })
        .then(({ user, posts }) => {
            // Render user details and posts
            renderUserDetails(user);
            renderUserPosts(posts);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function fetchUserDetails(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user details. Status: ${response.status}`);
            }
            return response.json();
        });
}

function fetchUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user posts. Status: ${response.status}`);
            }
            return response.json();
        });
}

function renderUserDetails(user) {
    const userContainer = document.getElementById('user-container');
    const userDetails = document.createElement('div');
    userDetails.innerHTML = `
      <h2>User Details</h2>
      <p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
    `;
    userContainer.appendChild(userDetails);
}

function renderUserPosts(posts) {
    const userContainer = document.getElementById('user-container');
    const userPosts = document.createElement('div');
    userPosts.innerHTML = `
      <h2>User Posts</h2>
      <ul>
        ${posts.map(post => `<li>${post.title}</li>`).join('')}
      </ul>
    `;
    userContainer.appendChild(userPosts);
}
