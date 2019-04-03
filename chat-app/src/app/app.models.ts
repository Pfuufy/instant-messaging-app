export interface Message {
	message: string;
	sender: string;
}

export interface Users {
	userName: string;
	friendUserName: string;
}

export enum MessageClass {
	YOU = 'YOU',
	THEM = 'THEM'
}
