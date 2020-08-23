import { Task } from '../model/task'
import { resolve } from 'dns';

class TaskApi{

    API_URL: string = "http://localhost:8080/engine-rest/"; 
    // "http://localhost:8080/engine-rest/task?sortBy=created&sortOrder=desc""

    public list(): Promise< Task[] > {
        return fetch("HTTP://localhost:8080/tasklist")
            .then((response) => this.checkStatus(response))
            .then((response) => this.parseJSON(response))
            .then(data => this.resolveTasks(data) ) ;
    }

    public get(id: string): Promise< Task > {
        return fetch("HTTP://localhost:8080/task/" + id) 
            .then((response) => this.checkStatus(response))
            .then((response) => this.parseJSON(response))
            .then(data => { const task =  this.resolveTask(data); console.log(task.steps); return task; } );
    }

    public complete(id: string, variables: any) : Promise<any> {
        const url = this.API_URL + "task/" + id + "/complete";
        return fetch(
                url, 
                { 
                    method: "POST", 
                    body: JSON.stringify( variables ),
                    headers: { 
                        "Content-Type": "application/json; charset=UTF-8"
                    } 
                })
            .then( resp => this.checkStatus(resp) );
    }

    public addTask(variables: any) : Promise< any > {
        return fetch(
            "http://localhost:8080/addtask", 
            { 
                method: "POST", 
                body: JSON.stringify( variables ),
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                    'Accept-Encoding': 'gzip, deflate, br'
                } 
            })
        .then( resp => this.checkStatus(resp) )
        ;
    }

    private checkStatus(response : Response) : Promise<Response> {
    
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        } else {
          let error = new Error(response.statusText);
          throw error;
        }
    }
    
    private parseJSON(response : Response) : any {
        return response.json();
    }

    private resolveTasks (data : any) : Promise<Task[]> {
        const tasks = data.map( (obj: any) => {
          return this.resolveTask(obj);
        });
    
        return Promise.resolve(tasks);
    }

    private resolveTask(obj: any): Task {
        var task : Task = new Task();
          task.id = obj.id;
          task.amount = obj.amount;
          task.currentStep = obj.currentStep;
          task.customerName = obj.customerName;
          task.customerType = obj.customer;
          task.finalDecision = obj.finalDecision;
          task.variables = obj.variables;
          task.workflowInstanceId = obj.workflowInstanceId
          task.created = obj.created;
          task.steps = [];
          if (obj.performedSteps && obj.performedSteps.length > 0){
              task.steps = obj.performedSteps;  
          }  


          return task;
    }
}

export const taskApi = new TaskApi();