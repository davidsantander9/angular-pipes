import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'uppercasepipe'
})

export class uppercasePipe implements PipeTransform {

    transform(value: string): string{
        return 'Hello World';
    }

}