import { Injectable } from "@nestjs/common"
import { UserEntity } from "./user.entity"

@Injectable()
export class UserRepository {
    private users: UserEntity[]

    async save(user: any) {
        this.users.push(user)
        console.log(this.users)
    }

    async list() {
        return this.users
    }

    async existsWithEmail(email: string) {
        const potentialUser = this.users.find(
            user => user.email === email
        )
        return potentialUser !== undefined
    }
}