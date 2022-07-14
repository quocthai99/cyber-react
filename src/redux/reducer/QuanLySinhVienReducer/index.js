const stateDefault = {
    mangSinhVien: [{ maSV: 1, hoTen: 'Nguyen Van A', soDT: 12345576767, email: 'teo@gmail.com' }]
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            const mangSVUpdate = [...state.mangSinhVien, action.sinhVien]
            state.mangSinhVien = mangSVUpdate
            return { ...state }
        }

        default: {
            return { ...state }
        }
    }
}