import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

export default class BaiTapFormSinhVien extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Bai tap form SV</h3>
        <FormSinhVien />
        <TableSinhVien />
      </div>
    )
  }
}
