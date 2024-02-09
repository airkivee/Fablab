import  RoleProvider  from "./components/RoleProvider";
import AppRouter  from "./pages";


export default function App() {
  return (
    <div className="App">
      <RoleProvider>
        <AppRouter />
      </RoleProvider>
    </div>
  );
}

