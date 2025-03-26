
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/trydavidqix/json/refs/heads/main/profile.json?token=GHSAT0AAAAAAC5P47NNSJTJW4DUHSJWG5K2Z7EJG3Q';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
