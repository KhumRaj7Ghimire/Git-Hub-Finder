// Init GitHub
const github = new Github();

// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById('search-user');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get Input Text
  const userText = e.target.value;
  if (userText !== '') {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show Alter
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        // Show the Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
