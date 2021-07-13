
function helperfn() {
    console.log(`List of all the commands:

    node mycommand.js view <dir-name> flat
    node mycommand.js view <dir-name> tree
    node mycommand.js organize <dir-name>
    node mycommand.js organize 
    node mycommand.js help

    ---------------------------------------
    --------------------------------------

    For GLOBAL Commands

    mycmd view <dir-name> flat
    mycmd view <dir-name> tree
    mycmd organize <dir-name>
    mycmd organize 
    mycmd help
`);
}

// nodejs -> export
module.exports={
    help_fn:helperfn
}
