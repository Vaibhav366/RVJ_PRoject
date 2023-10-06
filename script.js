const userTableBody = document.getElementById('userTableBody');
const createUserButton = document.getElementById('createUserButton');
const userFormModal = document.getElementById('userFormModal');
const paginationContainer = document.getElementById('pagination');

// Function to fetch a list of users from the API
function fetchUsers(page = 1) {
    // Make a GET request to the API to fetch users for the specified page
    fetch(`https://gorest.co.in/public-api/users?page=${page}`)
        .then(response => response.json())
        .then(data => {
            // Process and display the user list
            displayUsers(data.data);
            // Add pagination controls
            //displayPagination(data.meta.pagination);
        })
        //.catch(error => console.error('Error fetching users:', error));
}

// Function to display users in the table
function displayUsers(users) {
    // Clear the existing user table
    userTableBody.innerHTML = '';

    // Loop through the users and create table rows
    users.forEach(user => {
        const userRow = document.createElement('tr');
        userRow.innerHTML = `
            <td>${user.id=")"}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.status}</td>
            <td>
                <button class="viewUserButton" data-id="${user.id}">View</button>
                <button class="editUserButton" data-id="${user.id}">Edit</button>
                <button class="deleteUserButton" data-id="${user.id}">Delete</button>
            </td>
        `;
        userTableBody.appendChild(userRow);
    });
}

// Function to display pagination controls
const totalPages = 297; // Replace with the actual total number of pages

// The current page, which can be changed dynamically
let currentPage = 1;

// Function to generate pagination controls
function generatePaginationControls() {
    const paginationContainer = document.getElementById('pagination');

    // Clear any existing pagination controls
    paginationContainer.innerHTML = '';

    // Create a "Previous" button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchUsers(currentPage); // Replace with your fetchUsers function
        }
    });

    // Create a "Next" button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchUsers(currentPage); // Replace with your fetchUsers function
        }
    });

    // Add the "Previous" button to the pagination container
    paginationContainer.appendChild(prevButton);

    // Create and add numbered page buttons
    for (let page = 1; page <= totalPages; page++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = page;
        pageButton.addEventListener('click', () => {
            currentPage = page;
            fetchUsers(currentPage); // Replace with your fetchUsers function
        });
        paginationContainer.appendChild(pageButton);
    }

    // Add the "Next" button to the pagination container
    paginationContainer.appendChild(nextButton);
}

// Call the function to generate pagination controls
generatePaginationControls();
 {
    // Implement pagination controls here
}

// Handle click on "Create New User" button
createUserButton.addEventListener('click', () => {
    // Show the user creation/edit form modal
    // You can implement this functionality
});

// Handle click on user actions (View, Edit, Delete)
userTableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('viewUserButton')) {
        // Handle view user action
        const userId = event.target.getAttribute('data-id');
        // Implement logic to fetch and display user details
    } else if (event.target.classList.contains('editUserButton')) {
        // Handle edit user action
        const userId = event.target.getAttribute('data-id');
        // Implement logic to fetch user details for editing
    } else if (event.target.classList.contains('deleteUserButton')) {
        // Handle delete user action
        const userId = event.target.getAttribute('data-id');
        // Implement logic to confirm and delete the user
    }
});

// Initial load of users (you may specify a default page)
fetchUsers();
