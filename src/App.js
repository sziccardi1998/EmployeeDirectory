import React from "react";

import HeaderInfo from "./components/headerInfo";
import UsersContainer from "./components/UsersContainer";
import FooterInfo from "./components/footerInfo";


function App() {
    //containers
    return<>
    <HeaderInfo/>
    {/* <SearchForm /> */}
    <UsersContainer/>
    <FooterInfo/>
    </>
  }


export default App;