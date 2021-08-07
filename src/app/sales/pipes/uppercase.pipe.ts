import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'uppercasepipe'
})

export class uppercasePipe implements PipeTransform {

    transform(value: string, inUppercase: boolean = true ): string{

        if( inUppercase ){
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        }
    }

}