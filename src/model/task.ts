
export class Task {
    public id: string = '';
    public created: Date | undefined;

    public customerType : string = '';
    public customerName : string = '';
    public largeCompany : boolean = false;
    public amount : number = 1000.0000;
    public finalDecision: string = '';
    public currentStep: string  = '';
    public variables: string = '';

    public workflowInstanceId: string = '';
    
    public steps: History[] = [];
}