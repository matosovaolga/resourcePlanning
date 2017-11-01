import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'getLevels'
})
export class GetLevels implements PipeTransform {
    transform(input: any, level: number): any {

        var inputArr = [];
        var i = 0, len = input.length;

        for (; i < len; i++) {
            if (input[i].level == level) {
                inputArr.push(input[i]);
            }
        }
        return inputArr;

    }
}