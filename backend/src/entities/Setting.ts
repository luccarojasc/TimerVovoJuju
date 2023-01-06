import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid"; 

@Entity("settings")
class Setting{

    @PrimaryColumn()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    /*constructor(){
        if(!this.username){
            this.username = uuid();
        }
        if(!this.email){
            this.email = uuid();
        }
        if(!this.password){
            this.password = uuid();
        }
    }*/

}

export { Setting }