const stateDefault = {
    mangSinhVien: [{ maSV: 1, hoTen: 'Nguyen Van A', soDT: 12345576767, email: 'teo@gmail.com' }]
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    return { ...state }
}