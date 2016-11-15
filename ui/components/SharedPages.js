import React, { Component } from 'react'

export default class SharedPages extends Component {
  render() {
    return (
      <table className='table'>
      <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.pages.map((page) => (
              <Page
                key={page.id}
                id={page.id}
                title={page.title} />
            ))
          }
        </tbody>
      </table>
    )
  }
}