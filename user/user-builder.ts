import {User} from "./user";

export class UserBuilder {

	private firstName: string;
	private lastName: string;
	private age: number;
	private street: string;

	constructor() {
		this.firstName = '';
		this.lastName = '';
		this.age = -1;
		this.street = '';
	}

	public static user(): UserBuilder {
		return new UserBuilder();
	}

	public withFirstName(name: string): UserBuilder {
		this.firstName = name;
		return this;
	}

	public withLastName(lastName: string): UserBuilder {
		this.lastName = lastName;
		return this;
	}

	public withAge(age: number): UserBuilder {
		this.age = age;
		return this;
	}

	public liveInStreet(street: string): UserBuilder {
		this.street = street;
		return this;
	}

	public build(): User {
		let user: User = new User(this.firstName, this.lastName, this.age, this.street);
		return user;
	}
}
