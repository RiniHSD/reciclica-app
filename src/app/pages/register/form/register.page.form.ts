import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class RegisterPageForm {
    static getForm(): FormGroup<any> {
        throw new Error("Method not implemented.");
    }

    private formBuilder: FormBuilder;
    private form: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
        this.form = this.createForm();
    }

    private createForm() : FormGroup {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            repeatPassword: [''],
            phone: ['', [Validators.required]],
            address: this.formBuilder.group({
                street: ['', [Validators.required]],
                number: ['', [Validators.required]],
                neighborhood: ['', [Validators.required]],
                complement: ['', [Validators.required]],
                ZipCode: ['', [Validators.required]],
                State: ['', [Validators.required]],
                city: ['', [Validators.required]],

            })
        });
    }

    getForm() : FormGroup {
        return this.form;
    }

}