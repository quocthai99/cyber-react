import BaiTapBurger from './BaiTapBurger/BaiTapBurger';
import BaiTapFormSinhVien from './BaiTapQuanLySinhVien/BaiTapFormSinhVien';
import { connect } from 'react-redux'

function App() {
  return (
    <div className='App' >
      {/* <BaiTapBurger /> */}
      <BaiTapFormSinhVien />
    </div>
  );
}

export default App;
