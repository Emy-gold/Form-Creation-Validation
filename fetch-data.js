async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  dataContainer.innerHTML = "Loading user data...";

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContainer.innerHTML = ""; // Clear "Loading..." message

    const userList = document.createElement("ul");

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = ""; // Clear content
    dataContainer.textContent = "Failed to load user data.";
  }
}

// Run fetchUserData when DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
