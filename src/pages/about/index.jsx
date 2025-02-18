import { lazy } from "react";
/**
 * import thông thường: React sẽ tải và khởi tạo Test ngay khi ứng dụng khởi chạy, dù bạn có render nó hay không.
 */
// import Test from "../../components/test";

/**
 * Test sẽ chỉ được tải và khởi tạo khi nó thực sự cần thiết, tức là khi Test được render.
 */
const Test = lazy(() => import("../../components/test"));

const About = () => {
  return (
    <div>
      About
      {/* import lazy thì BẮT BUỘC bọc Suspense ở đây nhưng do Routes.jsx đã bọc Suspense ở level cao nhất rồi nên ở đây không cần bọc cũng đuộc */}
      <Test />
    </div>
  );
};

export default About;
