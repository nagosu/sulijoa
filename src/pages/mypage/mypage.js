import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MyPageContainer from "../../components/MyPageContainer"

const Mypage = () => (
  <div className="flex flex-col items-center justify-center">
    <Header />
    <MyPageContainer />
    <Footer />
  </div>
);

export default Mypage;
