import categories from "./components/categories-menu/categories-menu";
import Directory from "./components/directory/directory.component";

const App = () => {
   return <Directory categories={categories} />;
};

export default App;
