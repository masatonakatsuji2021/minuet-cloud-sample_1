import { AdminController as AdminController_} from "minuet-server-cloud/src/controllers/AdminController";

export class AdminController extends AdminController_ {

    public async index() { }
    
    public async detail() {
        this.autoRender = false;
        this.res.write("Detail Page...");
    }
}