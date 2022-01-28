/// <reference types="cypress" />
import { mount } from '@cypress/react'
import OrderDetail from '../../src/components/Order/OrderDetail'

describe('<OrderDetail />', () => {
  beforeEach(() => {
    // given
    mount(() => <OrderDetail />)
  })

  it('renders post title', () => {
    // when, then
    cy.findAllByTestId("title").should('have.length', 'Order Overview')
  })
})
