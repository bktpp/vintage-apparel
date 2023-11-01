import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/vin-app.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
   const { currentUser } = useContext(UserContext);
   const { isCartOpen } = useContext(CartContext);

   return (
      <>
         <NavigationContainer>
            <LogoContainer to="/">
               <Logo />
            </LogoContainer>

            <NavLinks>
               <NavLink to="/shop">Shop</NavLink>

               {currentUser ? (
                  <NavLink as="span" onClick={signOutUser}>
                     Sign Out
                  </NavLink>
               ) : (
                  <NavLink to="/auth">Sign In</NavLink>
               )}
               <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
         </NavigationContainer>
         <Outlet />
      </>
   );
};

export default Navigation;
