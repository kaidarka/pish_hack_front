import './App.css';
import AppRouter from "./pages"
import {useEffect} from "react";
import {fetchUserData} from "./store/user";
import {useDispatch} from "react-redux";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData())
  }, []);

  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
