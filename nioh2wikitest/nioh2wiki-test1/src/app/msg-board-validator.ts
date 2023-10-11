import { FormControl, ValidationErrors } from "@angular/forms";

export class MsgBoardValidator {

    static whitespace(control: FormControl) : ValidationErrors {

        if ((control.value != null) && (control.value.trim().length === 0)) {

            return { 'whitespace': true };
        }
        else{
            return null!;
        }
    }
}
