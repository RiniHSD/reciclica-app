import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm {
    static createForm(): typeof FormGroup {
        throw new Error("Method not implemented.");
    }
    private formBuilder: FormBuilder

    constructor(formBuilder:FormBuilder){
        this.formBuilder = formBuilder
    }

    createForm() : FormGroup {
        return this.formBuilder.group({
            email:['', [Validators.required, Validators.email]],
            password:['', [Validators.required]]
        })
    }
}