
describe('OpenWeatherMap current weather page', () => { 
    it('displays the current weather information', () => { 
      cy.visit('https://openweathermap.org/current') 
   
      cy.get('#forecast_list_ul > table > tbody > tr > td:nth-child(2)') 
        .then((city) => { 
          cy.wrap(city) 
            .should('contain', 'Paris') 
        }) 
   
      cy.get('#forecast_list_ul > table > tbody > tr > td.odd > b') 
        .then((temperature) => { 
          cy.wrap(temperature) 
            .should('contain', '15') 
        }) 
   
      cy.get('#forecast_list_ul > table > tbody > tr > td.odd > span.wind-speed') 
        .then((wind) => { 
          cy.wrap(wind) 
            .should('contain', '2.6') 
        }) 
   
      cy.get('#forecast_list_ul > table > tbody > tr > td.odd > span.pressure') 
        .then((pressure) => { 
          cy.wrap(pressure) 
            .should('contain', '1017') 
        }) 
    }) 
  })