import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform {

    // dato | calculadora: otrodato
    // param1               param2
    transform(value1: number, value2: number){
        let operation = `
            Suma: ${value1 + value2}
            Resta: ${value1 - value2}
            Multiplicación: ${value1 * value2}
            División: ${value1 / value2}
        `
        return operation

    }
}