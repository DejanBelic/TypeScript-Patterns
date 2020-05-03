import {User} from "./user/user";
import {UserBuilder} from "./user/user-builder";


let user: User = UserBuilder.user()
	.withFirstName('Dejan')
	.withLastName('Belic')
	.withAge(33)
	.liveInStreet('Kolo Srpskih Sestara')
	.build();

	user.print();
