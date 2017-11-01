import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'object2Array'
})
export class Object2ArrayPipe implements PipeTransform {
    transform(object): Object {

        var out = [];
        for (var i in object) {
            out.push(object[i]);
        }
        return out;
    }
}