const navLink = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "About",
        to: "/about",
    },
    {
        name: "Contact Us",
        to: "",
    },
];

const detailNav = (id) => {
    return `${id}`;
};

export { navLink, detailNav };
