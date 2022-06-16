class HeaderPage{
    elements = {
       myAccountLink: () => cy.get('ul.noo-topbar-right li').contains('My Account')
    }
  
  //funciones
  clickOnMyAccount(){
    this.elements.myAccountLink().click({force:true})
  }
}

module.exports = new HeaderPage()
