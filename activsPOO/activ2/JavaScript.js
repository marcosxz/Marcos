class Animal {
    fazerBarulho() {
      alert('Fazendo barulho genérico');
    }
  }
 
  class Cachorro extends Animal {
    latir() {
      alert('Au au!');
    }
  }
  
  function fazerBarulho() {
   
    let animal = new Animal();
    animal.fazerBarulho();
  }
  
  function latir() {
   let cachorro = new Cachorro();
    cachorro.fazerBarulho(); 
    cachorro.latir();
  }
  