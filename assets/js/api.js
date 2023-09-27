
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Thiagotlm/portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
