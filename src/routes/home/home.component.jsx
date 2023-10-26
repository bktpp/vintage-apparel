import { Outlet } from "react-router-dom";

import categories from "../../components/categories-menu/categories-menu";
import Directory from "../../components/directory/directory.component";

const Home = () => {
   return (
      <div>
         {/* outlet allows child route to display */}
         <Outlet />
         <Directory categories={categories} />
      </div>
   );
};

export default Home;
