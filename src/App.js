import LoginForm from "./components/login_form/LoginFormComp";
import BackgroundAudioPlayer from "./components/login_form/backgroud_youtube_player/BackgroundAudioPlayer";
import LoginFormComp from "./components/login_form/LoginFormComp";
import BannerFormComp from "./components/banner_form/BannerFormComp";
import SignupFormComp from "./components/signup_form/SignupFormComp";
import LoginRouters from "./routers/LoginRouters";

function App() {
  return (
    <div className="App">
      <LoginRouters/>
    </div>
  );
}

export default App;
