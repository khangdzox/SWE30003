type JointPayment = {
    id: string,
    type: string,
    amount: number,
    date: Date | string,
    status: string,
    cardNumber?: string,
    expiryDate?: string,
    paymentGateway?: string
};

abstract class Payment {
    id: string | null;
    amount: number;
    date: Date;
    status: string;

    constructor(id: string | null, amount: number, date: Date, status: string) {
        this.id = id;
        this.amount = amount;
        this.date = date;
        this.status = status;
    }

    abstract verify(): boolean;

    abstract process(): Promise<void>;

    abstract refund(): Promise<void>;

    updateStatus(status: string) {
        this.status = status;
    }
}

export { Payment };
export type { JointPayment };