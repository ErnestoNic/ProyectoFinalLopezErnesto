//HASH MAP
            /*
            function numeros(lista,sumaDeseada){
                let hash = {}
                for (let index = 0; index < lista.length; index++) {

                    if(hash[lista[index]] !== undefined){
                        console.log(hash)
                        return [hash[lista[index]]]
                    }

                    hash[sumaDeseada - lista[index]] = lista[index]
                    
                }

                return hash
            }    

            console.log(numeros([2,3,17],20))
            */


//LINKEDLIST
            /*
            class List {
                constructor() {
                this.head = null;
                this.tail = null;
                }

                makeNode(value) {
                    return {
                    value: value,
                    next: null
                    }
                }

                append(value) {
                    let node = this.makeNode(value);                                   
                
                    // Is it currently empty?
                    if(!this.tail) {
                    // Head and tail are one and the same
                    this.head = this.tail = node;
                    return node;
                    }
                
                    // If it's not empty, tack this on the end,
                    // and update `tail` to point at this new node
                    this.tail.next = node;
                    this.tail = node;
                
                    // Return the node we added
                    return node;
                }

                print() {
                    let current = this.head;
                    while(current) {
                    console.log(current.value);
                    current = current.next;
                    }
                }

                }


                linkedList = new List()

                linkedList.append(3)
                linkedList.append(4)
                linkedList.append(5)

                linkedList.print ()

            */


//ALGORITMO DE BUSQUEDA BINARIA
            /* 
            let numeros = [1, 5, 8, 9, 8, 4, 6, 25, 222, 44, 6969, 8]

            function busquedaBinaria(arr, busqueda) {

                const puntoMedio = Math.floor(arr.length / 2);
            
                if (arr[puntoMedio] === busqueda) {
                return arr[puntoMedio];
                }
            
                if (arr[puntoMedio] < busqueda && arr.length > 1) {
                return busquedaBinaria(arr.slice(puntoMedio), busqueda);
                }
            
                if (arr[puntoMedio] > busqueda && arr.length > 1) {
                return busquedaBinaria(arr.slice(0, puntoMedio), busqueda);
                }
            
                return "no encontrado :(";
            }

            console.log(busquedaBinaria(numeros, 25))
            */