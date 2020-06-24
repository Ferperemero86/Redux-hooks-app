import "./style.scss";
import moment from "moment";
import Test from "./components/test";

import { getUsers } from "./common/usersAPI";

getUsers().then(json => console.log(json));