export class User {
	private firstName: string;
	private lastName: string;
	private age: number;
	private street: string;

	constructor(
				firstName: string,
				lastName: string,
				age: number,
				street: string) {

		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.street = street;
	}

	public getFirstName(): string {
		return this.firstName;
	}
	public setFirstName(name: string) {
		this.firstName = name;
	}

	public getLastName(): string {
		return this.lastName;
	}
	public setLastName(name: string) {
		this.lastName = name;
	}

	public getAge(): number {
		return this.age;
	}
	public setAge(age: number) {
		this.age = age;
	}

	public getStreet(): string {
		return this.street;
	}
	public setStreet(street: string) {
		this.street = street;
	}

	public print(): void {
		console.log('--- USER ---');
		console.log('Name: ', this.firstName, this.lastName);
		console.log('Age: ', this.age);
		console.log('Street: ', this.street);
	}
}
