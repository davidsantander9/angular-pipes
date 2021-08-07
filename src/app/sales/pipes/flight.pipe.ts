import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'flight'
})

export class flightPipe implements PipeTransform {

    transform(value: boolean ): string{

        if( value ){
            return 'flights';
        }else{
            return 'does not flght';
        }
    }

}