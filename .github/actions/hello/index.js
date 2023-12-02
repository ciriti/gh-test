const core = require("@actions/core")
const github = require("@actions/github")

try{

    throw new Error("Some error message")

    core.debug("Debug message");
    core.warning("warning message");
    core.error("error message");


    const name = core.getInput("who_to_greet");

    console.log(`Hello ${name}`);

    const time = new Date();

    core.setOutput("time", time.toTimeString());

    core.exportVariable("HELLO_TIME", time);

    core.startGroup("Loggin github contex");
    console.log(JSON.stringify(github.context, null, 2));
    core.endGroup();

} catch (er) {
    core.setFailed(er.message);
}