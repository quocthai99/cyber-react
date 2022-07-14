import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormSinhVien extends Component {

  state = {
    values: {
      maSV: '',
      hoTen: '',
      email: '',
      soDT: ''
    },
    error: {
      maSV: '',
      hoTen: '',
      email: '',
      soDT: ''
    }
  }

  handleOnChange = (e) => {
    const { name, value, type } = e.target

    let errorMessage = ''
    if (value.trim() === '') {
      errorMessage = name + ' khong duoc bo trong !'
    }

    if (type === 'email') {
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
      if (!regex.test(value)) {
        errorMessage = name + ' Khong dung dinh dang'
      }
    }

    let values = { ...this.state.values, [name]: value }
    let error = {...this.state.error, [name]: errorMessage}

    this.setState({
      values,
      error
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.themSinhVien(this.state.values)
  }

  render() {
    return (
      <div className='container'>
        <div className="card text-left">
          <div className='card-header bg-dark text-white'>
            <h3>THong tin sinh vien</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className='row'>
                <div className='form-group col-6'>
                  <span>MA SV</span>
                  <input className='form-control' name='maSV' value={this.state.values.maSV} onChange={this.handleOnChange} />
                  <p className='text-danger'>{this.state.error.maSV}</p>
                </div>
                <div className='form-group col-6'>
                  <span>HO TeN</span>
                  <input className='form-control' name='hoTen' value={this.state.values.hoTen} onChange={this.handleOnChange} />
                  <p className='text-danger'>{this.state.error.hoTen}</p>
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-6'>
                  <span>so dien thoai</span>
                  <input className='form-control' name='soDT' value={this.state.values.soDT} onChange={this.handleOnChange} />
                  <p className='text-danger'>{this.state.error.soDT}</p>
                </div>
                <div className='form-group col-6'>
                  <span>email</span>
                  <input type='email' className='form-control' name='email' value={this.state.values.email} onChange={this.handleOnChange} />
                  <p className='text-danger'>{this.state.error.email}</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 text-right'>
                  <button type='submit' className='btn btn-success'>them sinh vien</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: 'THEM_SINH_VIEN',
        sinhVien
      }
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(FormSinhVien)
