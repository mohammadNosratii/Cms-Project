import Home from "../page/Home/Index"
import Products from "../page/Products/Index"
import Comments from "../page/Comments/index"
import Users from "../page/Users/Index"
import Orders from "../page/Orders/Index"
import DisCounts from "../page/DisCounts/Index"

const routes = [
    {path: "/", element: <Home />},
    {path: "/products", element: <Products />},
    {path: "/comments", element: <Comments />},
    {path: "/users", element: <Users />},
    {path: "/orders", element: <Orders />},
    {path: "/disCounts", element: <DisCounts />},
]

export default routes