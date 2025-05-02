export const getPath = (id, sname) => {
    const path = window.location.pathname;

    if (path === "/") {
        return "Home";
    } else if (path === "/stacks") {
        return "Stacks";
    } else if (path === "/dashboard") {
        return "Dashboard";
    } else if (path === "/settings") {
        return "Settings";
    } else if (path === `/bill/${id}`) {
        const parts = id.split("&");
        const routePath = parts.length === 2 ? `update/${parts[1]}` : "bill";
        return routePath;
    } else if (path === `/stack/${sname}`) {
        return "AddStack-" + sname;
    }
} 