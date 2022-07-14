import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {


    renderSinhVien = () => {
        const {mangSinhVien} = this.props

        return mangSinhVien.map((sinhVien, index) => {
            return (
                <tr key={index}>
                    <td>{sinhVien.maSV}</td>
                    <td>{sinhVien.hoTen}</td>
                    <td>{sinhVien.soDT}</td>
                    <td>{sinhVien.email}</td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Ma SV</th>
                            <th>Ho ten</th>
                            <th>soDT</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps, null)(TableSinhVien)