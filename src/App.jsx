import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

/**
 * import.meta.glob() trả về các dynamic imports. Điều này có nghĩa là các module được tải theo cách bất đồng bộ (async), và cần phải xử lý chúng một cách phù hợp, phải sử dụng lazy (trong hàm useRoute đấy là lý do dùng lazy, mà dùng lazy thì BẮT BUỘC phải dùng Suspense)
 */
const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

function App() {
  return (
    <div className="">
      <h6>File System Based Router like NextJS - use ReactJS </h6>
      <BrowserRouter>
        <Routes pages={pages} />
      </BrowserRouter>
    </div>
  );
}

export default App;
