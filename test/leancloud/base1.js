import {GlobalConfig} from "../../typings/entitis";

let AV = require("leancloud-storage");
let lean = require("../../config").lean;
AV.init(lean);
AV.Cloud.useMasterKey();

async function getVersion() {
	let config = await new AV.Query('GlobalConfig').equalTo("name", "js_view").find();
	return config[0].version
}

console.log(getVersion());




