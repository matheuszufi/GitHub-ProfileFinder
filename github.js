class Github {
    constructor() {
        this.client_id = '3ef9c813b2454b4c0570';
        this.client_secret = '074108e6c11dc66198db0d4f09927ce64d636db6';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
   
   
    }   

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}