document.addEventListener('DOMContentLoaded', async function () {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    try {
        const response = await fetch('https://api.github.com/users/thiago742');

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const json = await response.json();

        nameElement.innerText = json.name || 'Nome não disponível';
        usernameElement.innerText = json.login || 'Usuário não disponível';
        avatarElement.src = json.avatar_url || 'https://via.placeholder.com/180x180';
        followingElement.innerText = json.following || '0';
        followersElement.innerText = json.followers || '0';
        reposElement.innerText = json.public_repos || '0';
        linkElement.href = json.html_url || '#';
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        alert('Não foi possível carregar as informações do usuário. Tente novamente mais tarde.');
    }
});
