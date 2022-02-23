class Component {
  constructor() {
    
  }

  setState() {
    // update-eli a state-et és újrarendereli a komponenst!
  }

  actualRender() {
    const componentToRender = this.render(); 
    // ez a fn. a DOM-API-t használja, a facebook fejlesztői megírták, úgy hogy a componentToRender-t használja
  }
}

module.exports = {Component};