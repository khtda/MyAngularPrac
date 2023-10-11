export class Message {

    messageUser!: string;

    messageContent!: string;

    Date!: Date;

    constructor(messageUser: string, messageContent: string) {

        this.messageUser = messageUser;
        this.messageContent = messageContent;
        this.Date = new Date();

    }
}
