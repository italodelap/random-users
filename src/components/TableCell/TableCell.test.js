import React from 'react'
import { TableCell } from './index'

import { render } from '@testing-library/react'

describe('<TableCell />', () => {
  let component
  const td = { label: 'Name', data: 'Italo De la Peña' }

  beforeEach(() => {
    component = render(
      <table>
        <tbody>
          <tr><TableCell label={td.label} data={td.data} /></tr>
        </tbody>
      </table>
    )
  })

  test('renders label', () => {
    const element = component.getByText(td.label)
    expect(element).toBeDefined()
  })

  test('renders data', () => {
    const element = component.getByText(td.data)
    expect(element).toBeDefined()
  })

  test('renders alternative text', () => {
    let component = render(
      <table>
        <tbody>
          <tr><TableCell label={td.label} /></tr>
        </tbody>
      </table>
    )
    
    const element = component.getByText(`No information about ${td.label}`)
    expect(element).toBeDefined()
  })
})
