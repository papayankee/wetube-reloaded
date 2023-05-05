export const trending = (req, res) => res.send("Home Page stories");
export const globalNew = (req, res) => res.send("New stories");

export const see = (req, res) => {
    console.log(req.params);
    return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
    console.log(req.params);
    res.send("Edit");
};
export const deleteStories = (req, res) => {
    console.log(req.params);
    res.send("Delete Video");
};


// export const search = (req, res) => res.send("Search");
// export const upload = (req, res) => res.send("Upload");