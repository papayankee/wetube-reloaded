const fakeUser = {
    username: "Pyung",
    loggedIn: false,
};

export const trending = (req, res) => res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch Videos" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit Videos" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Delete Video");
}