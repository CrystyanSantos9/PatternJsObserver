class Observable{
    /**
     * Cada instância da classe Observer
     * é criada com um array vazio com observadores/observes
     * eles reagirão as mudanças de estados
     * 
     */constructor(){
         this.observers = [];
     }

     //adicina inscrição de novo objeto / Elemento DOM
     //adicionando este dado ao array de observadores

     subscribe(f){
         this.observers.push(f);
     }

     unsubscribe(f){
         this.observers = this.observers.filter(subscriber => subscriber !== f)
     }

     //atualiza os objetos inscritos / Elementos do DOM
     //e passa dados para cada um 
     notify(data){
         this.observers.forEach(observer=> observer(data))
     }
}

const input = document.querySelector('.js-input');
console.log(input)
const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');
const p3 = document.querySelector('.js-p3');




// algumas ações para adicionar ao array de observadores
const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

// instanciando uma nova classe Observer
const headingsObserver = new Observable();

//criando a inscrição dos observadores
headingsObserver.subscribe(updateP1)
headingsObserver.subscribe(updateP2)
headingsObserver.subscribe(updateP3)


//disparando um evento e informando aos observadores sobre essa mudança
input.addEventListener('keyup', e=>{
    headingsObserver.notify(e.target.value)
})

const btnSubscribeP1 = document.querySelector('.js-subscribe-p1')

btnSubscribeP1.addEventListener('click',()=>{
    const inputValue = input.value
    headingsObserver.subscribe(updateP1)
})

const btnUnSubscribeP1 = document.querySelector('.js-unsubscribe-p1')

btnUnSubscribeP1.addEventListener('click',()=>{
    const inputValue = input.value
    headingsObserver.unsubscribe(updateP1)
})

const btnSubscribeP2 = document.querySelector('.js-subscribe-p2')

btnSubscribeP2.addEventListener('click',()=>{
    const inputValue = input.value
    headingsObserver.subscribe(updateP2)
})

const btnUnSubscribeP2 = document.querySelector('.js-unsubscribe-p2')

btnUnSubscribeP2.addEventListener('click',()=>{
    const inputValue = input.value
    headingsObserver.unsubscribe(updateP2)
})

const btnSubscribeP3 = document.querySelector('.js-subscribe-p3')
const btnUnSubscribeP3 = document.querySelector('.js-unsubscribe-p3')
