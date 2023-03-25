import { Redirect, Route, Switch } from "react-router-dom"
import { About } from "../component/About"

export const useRoutes=(isAuthenticated,role)=>{
   
        return(
            <Switch>
            <Route path="/" exact>
              <About/>  
            </Route>
            <Redirect to="/" />
        </Switch>
        )
}
