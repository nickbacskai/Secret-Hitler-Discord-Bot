class Player {
    constructor(user, role){
        this.user = user;
        this.role = role;
    }

    getUser() {
        return this.user;
    }
    getRole() {
        return this.role;
    }
}

export default Player;