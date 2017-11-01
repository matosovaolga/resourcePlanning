import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'isOverloadDay'
})
export class IsOverloadDay implements PipeTransform {
    transform(input, day) {

        var load = 0;
		var i = 0, len = input.length;
		for (; i < len; i++) {
			if (input[i].start_time <=  day / 1000 &&  day / 1000 <= input[i].end_time ) {
				load += parseInt(input[i].percent);
			}
		}
		if (load > 100){
			return true;
		}
		return false;

       
    }
}


