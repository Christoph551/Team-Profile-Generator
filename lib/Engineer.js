class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer