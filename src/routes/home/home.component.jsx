import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
   return (
      <div>
         {/* outlet allows child route to display */}
         <Outlet />
         <Directory />
      </div>
   );
};

export default Home;
