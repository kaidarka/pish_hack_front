import './App.less';
import AppRouter from "./pages"
import {useEffect} from "react";
import {fetchUserData} from "./store/user";
import {useDispatch} from "react-redux";

import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData())
  }, []);

  return (
    <div className="App">
        <Header/>
        <AppRouter/>
    </div>
  );
}

export default App;
