import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

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
        let form = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            repeatPassword: [''],
            phone: ['', [Validators.required]],
            address: this.formBuilder.group({
                street: ['', [Validators.required]],
                number: ['', [Validators.required]],
                neighborhood: ['', [Validators.required]],
                complement: ['', [Validators.required]],
                zipCode: ['', [Validators.required]],
                state: ['', [Validators.required]],
                city: ['', [Validators.required]],

            })
        });

        form.get('repeatPassword')?.setValidators(matchPasswordAndRepeatPassword(form));

        return form;
    }

    setAddress(place: any) {
        const addressForm = this.form.get('address');

        addressForm?.get('street')?.setValue(findStreet(place.address_components));
        addressForm?.get('number')?.setValue(findAddressNumber(place.address_components));
        addressForm?.get('neighborhood')?.setValue(findNeighborhood(place.address_components));
        addressForm?.get('zipCode')?.setValue(findZipCode(place.address_components));
        addressForm?.get('state')?.setValue(findState(place.address_components));
        addressForm?.get('city')?.setValue(findCity(place.address_components));

    }

    getForm() : FormGroup {
        return this.form;
    }

}

function matchPasswordAndRepeatPassword(form: FormGroup) : ValidatorFn {
    const password = form.get('password');
    const repeatPassword = form.get('repeatPassword');

    const validator = () => {
        return password?.value == repeatPassword?.value ? null : {isntMatching: true}
    };

    return validator;

}

function findStreet(address_components: any): any {
    throw new Error("Function not implemented.");
}
function findAddressNumber(address_components: any): any {
    throw new Error("Function not implemented.");
}

function findNeighborhood(address_components: any): any {
    throw new Error("Function not implemented.");
}

function findZipCode(address_components: any): any {
    throw new Error("Function not implemented.");
}

function findState(address_components: any): any {
    throw new Error("Function not implemented.");
}

function findCity(address_components: any): any {
    throw new Error("Function not implemented.");
}

