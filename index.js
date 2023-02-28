const amer = "американо"
const amerm = "американо з молоком"
const cap = "капучіано"
const lat = "латте"
let addition, sizeCup, sort, sugar
let cofee  = prompt(`Яку каву ви бажаєте? ${amer}, ${amerm}, ${cap} чи ${lat}?`)
    if (cofee == amer){
        cofee = amer 
        addition = ''
        sizeCup = ''
    }
    if (cofee == amerm){
        addition = confirm("З вершками(Ок) чи молоком(Відміна)?")
        if(addition == true){
            addition = "з вершками"
            sizeCup = ''
        }
        else{
            addition = "з молоком"
            sizeCup = ''
        }
    }
    if (cofee == cap){
        sizeCup = confirm("Мальнький(Ok) чи великий(Відміна)?")
        if(sizeCup == true){
            sizeCup = "мальнький"
            addition = ''
        }
        else{
            sizeCup = "великий"
            addition = ''
        }
    }
    if (cofee == lat){
        sizeCup = confirm("Мальнький(Ok) чи великий(Відміна)?")
        if(sizeCup == true){
            sizeCup = "мальнький"
            addition = ''
        }
        else{
            sizeCup = "великий"
            addition = ''
        }
    }

if (cofee){
    sort = confirm("Кубаш(Ок) чи арабіка(Відміна)?")
    if(sort == true){
        sort = " кубаш"
    }
    else{
        sort = " арабіка"
    }
    sugar = prompt ("Скільки  цукру ?")
    
} 
console.log(`Ось ваше замовлення ${cofee} ${addition} ${sizeCup} ${sort} з ${sugar} кубиками цукру`)
